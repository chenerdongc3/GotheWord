# GotheWord 学习状态同步降频与并发治理 Spec

- 状态：Draft
- 日期：2026-08-12
- 范围：背词会话中的本地持久化、Supabase 云同步、冲突处理和同浏览器多标签协调
- 不包含：学习算法调整、词库调整、认证改造、数据库表结构改造、生产部署

## 1. 结论

背词时“同步中 / 待同步”持续出现的直接原因不是 Supabase API 缺失，而是页面每秒把计时器写回整份 `AppState`，同步 hook 又把每次 `AppState` 变化都当作需要在 500ms 后上传的业务变更。

单标签因此会接近每秒写一次本地缓存和云端；同一账号打开多个标签时，每个标签还持有独立的 `revisionRef`，会竞争同一条 CAS revision，放大为 `learning_state_revision_conflict`。现有 CAS 能防止静默覆盖，但不能限制客户端写入频率，也不能决定哪个标签拥有写权限。

本 spec 的核心方案是：

1. 把每秒变化的展示计时从持久化 `AppState` 中解耦。
2. 本地缓存继续即时保护真实学习进度，云端只同步有业务意义的快照和 30 秒计时检查点。
3. 为同一浏览器中的同一账号建立单写者租约；跨设备仍由现有 CAS 和显式冲突选择兜底。
4. CAS 冲突后停止旧 revision 的保存重试，先读取一次最新云端状态，再等待用户选择。

## 2. 已核对的现状

### 2.1 当前代码证据

- `app/GotheWordApp.tsx` 的活动会话计时器每 1 秒调用一次 `setState`，同时递增 `activeSession.elapsedSeconds` 并刷新 `updatedAt`。
- `app/useLearningStateSync.ts` 中的 `setState` 对任何非同一对象引用都执行：标记 dirty、写 `localStorage`、设置 `pending`、调用 `scheduleSync(500)`。
- 同一 hook 在保存成功但期间又发生状态变化时，会再次以 500ms 调度下一次保存。
- `app/learning-state-api.ts` 已复用现有 `save_learning_state(expected_revision, next_state)` RPC；数据库按 revision 做 CAS，冲突返回 `learning_state_revision_conflict`。
- 当前跨标签逻辑只监听 `storage` 事件并传播缓存，没有 writer/leader 所有权。两个 dirty 标签状态不同时不会自动收敛，随后可能同时拿旧 revision 保存。
- 现有 `tests/learning-sync.test.mjs` 覆盖缓存解析、hydrate 决策、成功保存后的 dirty 判定、冲突选择、退避和 SQL 契约；`tests/e2e/mobile.spec.ts` 覆盖启动时冲突弹窗，但没有统计真实 RPC 次数，也没有双标签竞争测试。

### 2.2 当前数据流

```text
每秒计时 tick
  -> GotheWordApp setState(整份 AppState)
  -> useLearningStateSync 标记 dirty
  -> localStorage 写入完整缓存
  -> 500ms timer
  -> save_learning_state(expected_revision, 完整 AppState)
  -> learning_states revision + 1
```

权威边界：

| 数据 | 当前职责 | 改善后职责 |
| --- | --- | --- |
| UI 每秒计时 | 混在 `AppState`，触发持久化 | 页面 UI State，只负责显示 |
| 用户缓存 | dirty 状态的即时副本 | 真实业务变更即时写；计时按检查点写 |
| `learning_states` | 账号云端快照与 CAS authority | 保持不变 |
| `revisionRef` | 单标签内已知云端 revision | 保持单标签内缓存；由单写者负责提交 |
| PostHog | 同步结果和冲突结果的审计副本 | 增加触发原因与合并次数，不记录状态正文 |

### 2.3 已验证与尚未验证

2026-08-12 本地基线已通过 typecheck、12 个同步单测以及 4 个 SSR/同步契约集成测试。这只证明当前类型、纯逻辑和数据库契约没有报错，不证明同步频率合理。

历史生产排查曾观察到连续的 HTTP 400 `learning_state_revision_conflict`，并发现约 1.6 秒一次和极短时间内成批冲突的请求。该证据可支持本次机制分析，但它不是 2026-08-12 的生产现状确认；实施前后都必须用隔离测试账号重新测量。

## 3. 问题定义

### 3.1 P0：计时器被错误建模为云端业务变更

`elapsedSeconds` 每秒变化，但云端恢复只需要一个可接受误差的检查点。将 1Hz UI 更新直接映射为 1Hz 完整状态写入，会造成：

- 同步状态标签持续在 `pending`、`syncing`、`synced` 之间切换。
- 每分钟最多约 60 次本地完整 JSON 序列化与写入。
- 网络正常时接近每秒一次 RPC；网络较慢时持续 dirty 并在上一请求结束后补写。
- revision 快速增长，增加任何旧标签、休眠标签或其他设备发生冲突的概率。

### 3.2 P0：同步策略无法表达变更的重要性

当前只有统一的 500ms debounce。开始会话、答题、暂停、完成、设置修改和纯计时 tick 使用同一策略，无法同时满足“关键进度尽快保护”和“计时不要高频上传”。

### 3.3 P1：同浏览器多标签没有单写者

CAS 只能拒绝第二个写入者，不能选举写入者。两个标签都运行计时器并保持 dirty 时：

1. 两者可能从相同 revision 开始。
2. 第一个保存成功并推进 revision。
3. 第二个仍用旧 revision 保存，收到冲突。
4. 即使通过 `storage` 收到新缓存，本地 dirty 状态也可能迫使用户处理本可避免的冲突。

### 3.4 P1：冲突与瞬时错误的恢复语义不够明确

冲突、认证失败、数据校验失败、离线、超时、429 和 5xx 不应共享同一种重试行为。尤其不能对已知过期的 revision 继续保存。

## 4. 目标与非目标

### 4.1 目标

- 用户可继续看到每秒更新的学习时长，但不会因此每秒写缓存或请求云端。
- 答题、进度、会话阶段和设置等真实业务变更先即时写本地，再按优先级合并上传。
- 同一浏览器中同一账号同时只有一个标签可以提交学习状态。
- 现有 CAS、RLS、RPC、`learning_states` 表和 AppState v3 继续复用。
- 冲突不会静默覆盖，也不会形成旧 revision 的保存重试风暴。
- 可以通过自动化测试量化请求次数、恢复结果和双标签行为。

### 4.2 非目标

- 不把 `learning_states` 拆成多张表或改为事件溯源。
- 不在客户端自动合并两份不同的活动会话。
- 不通过关闭同步、移除 CAS 或延长固定 500ms 到一个更大的常数来掩盖问题。
- 不依赖 `beforeunload` 中一定能完成异步云端请求。
- 不新增页面自制通用 UI 组件；需要的提示继续使用 `@gotheword/pencil-pup-ui` 的 `Modal`、`Tag` 和 `Button`。

## 5. 方案设计

### 5.1 计时状态分层

保留 AppState v3 中 `activeSession.elapsedSeconds`，但把它定义为“最近一次持久化检查点的累计秒数”，不再作为每秒 UI 时钟。

页面新增仅存在于当前标签的计时运行态：

```ts
type SessionClock = {
  baseElapsedSeconds: number;
  runningSinceMs: number | null;
  displayedElapsedSeconds: number;
};
```

- `displayedElapsedSeconds` 每秒由 `baseElapsedSeconds + 当前运行区间` 推导，只更新 UI State。
- `pausedAt`、页面隐藏、30 秒无操作、答题、阶段切换、完成会话和主动退出时，先把当前运行区间物化进 `activeSession.elapsedSeconds`。
- 连续活动但没有其他业务操作时，每 30 秒物化一次计时检查点。
- `updatedAt` 只在物化检查点或真实业务变更时更新，不随 UI tick 更新。
- 页面崩溃或强制关闭时，最多损失 30 秒展示时长；答题和学习进度不能因此丢失。

### 5.2 显式的状态提交策略

`useLearningStateSync` 不再只暴露无语义的 React `Dispatch`。新增带原因和优先级的提交入口，名称可在实现时按项目风格确定：

```ts
type SyncUrgency = "flush" | "normal" | "checkpoint";
type SyncReason =
  | "session_start"
  | "answer"
  | "phase_transition"
  | "session_pause"
  | "session_resume"
  | "session_finish"
  | "timer_checkpoint"
  | "settings"
  | "reset"
  | "legacy_import"
  | "conflict_resolution";

commitState(action, { reason, urgency });
```

所有 `commitState` 都先同步写用户作用域的 `localStorage` 缓存，再进入云端调度器：

| 优先级 | 场景 | 云端调度 |
| --- | --- | --- |
| `flush` | 暂停、隐藏、完成、退出、重置、冲突选择 | 当前单飞请求结束后立即保存最新快照 |
| `normal` | 答题、阶段推进、开始/恢复、设置 | 2 秒 trailing debounce，10 秒 max wait |
| `checkpoint` | 纯计时检查点 | 距上次成功保存至少 30 秒后再保存 |

同一时间只允许一个请求；队列不保存多个历史快照，只保留最新状态和最高 urgency。保存成功后，如果请求期间产生了新业务变更，按当前队列策略继续，而不是固定再等 500ms。

### 5.3 同浏览器单写者租约

为每个账号建立标签级 `tabId` 和 writer lease。租约只协调同一浏览器 profile；跨浏览器和跨设备仍由服务端 CAS 保护。

- 租约 key：`${USER_STORAGE_KEY}:writer:${userId}`。
- value 至少包含 `tabId`、`expiresAt` 和随机 generation。
- 活跃 writer 每 5 秒续约，租约 15 秒过期。
- 获取和接管时优先用 Web Locks 保护临界区；不可用时使用写入后复读验证和确定性胜者规则作为 fallback。
- `BroadcastChannel` 用于快速通知，`storage` 事件作为不依赖频道的兼容路径。
- 只有 writer 可以启动/恢复活动会话、运行持久化检查点和调用 `save_learning_state`。
- follower 接受 writer 产生的 clean 新缓存，不运行自己的学习计时器，也不把观察到的状态重新标 dirty。
- 用户在 follower 中尝试学习时，使用现有 `Modal` 明确提示“另一个标签正在学习”，提供“返回查看”和“接管此标签”。接管成功后，原 writer 收到通知，物化本地计时、暂停交互并停止云端保存。
- 租约不是安全边界；服务端 CAS 仍是最终一致性和防覆盖边界。

如果 P0 需要先独立上线，至少先完成计时解耦和请求降频；writer lease 必须在同一发布周期的 P1 完成，不能以 `storage` 监听已经存在为由关闭该问题。

### 5.4 冲突和错误分类

| 结果 | 行为 |
| --- | --- |
| CAS `40001` / `learning_state_revision_conflict` | 取消当前 save timer；停止使用旧 revision；读取一次最新远端；成功后展示现有显式冲突选择 |
| 冲突后的远端读取失败 | 只重试 load；在拿到新 revision 前不得重试旧 save |
| 明确离线 | 保留 dirty 本地缓存，不轮询；等待 `online` 事件立即调度 |
| 超时、网络错误、429、5xx | 对最新快照使用 1/2/4/8/16/30 秒有上限退避 |
| 401/403 | 停止自动保存，交由认证恢复流程处理 |
| 400 数据校验错误 | 停止重试，记录归一化错误码并显示同步失败；不得把同一坏快照持续发送 |

现有“使用云端进度”和“保留本设备进度”继续保留。保留本地时必须以刚读取的远端 revision 为新 base 再提交；若再次冲突，重新进入选择流程，不循环覆盖。

### 5.5 后端与 API

本方案不新增接口，也不修改表结构：

- 继续使用 `loadLearningState(userId)` 读取当前账号状态。
- 继续使用 `saveLearningState(expectedRevision, state)` 调用现有 CAS RPC。
- 继续由 `auth.uid()`、RLS/ACL 和 RPC 约束账号边界。
- 继续由数据库生成 revision 和 `updated_at`。

只有在降频和单写者完成后仍能复现服务端写热点，才另开提案评估字段级更新或事件模型；本 spec 不提前扩大后端范围。

### 5.6 同步状态展示

状态语义调整为：

- `已同步`：最新需要上传的业务快照已确认保存；UI 计时在两个检查点之间增长不改变该状态。
- `待同步`：本地存在尚未上传的业务变更或已物化检查点。
- `同步中`：确实存在进行中的 RPC，不因纯 UI tick 展示。
- `离线`、`同步失败`、`同步冲突`：保留当前语义。
- follower 标签使用现有 `Tag` 表示“其他标签正在学习”，不能伪装成当前标签可写。

### 5.7 可观测性

扩展现有 `learning_state_sync_result`，只增加非 PII 元数据：

- `sync_reason`
- `sync_urgency`
- `coalesced_mutation_count`
- `dirty_age_ms`
- `writer_role`
- `revision_before`、`revision_after`

禁止记录完整 AppState、单词答案、用户名、token、请求正文或冲突状态正文。

需要新增或更新 dashboard 指标：

- 每活动学习分钟的 save RPC 数量。
- save 成功率、冲突率、429/5xx 比例。
- 同浏览器 writer takeover 次数。
- dirty 持续时间 P50/P95。
- 按 `sync_reason` 的请求分布，确认 `timer_checkpoint` 不超过设计频率。

## 6. 代码落点

### 6.1 复用与修改

- `app/GotheWordApp.tsx`
  - UI 时钟与持久化计时解耦。
  - 为现有状态变更标注 reason/urgency。
  - 在暂停、隐藏、无操作、完成和退出边界物化计时。
- `app/useLearningStateSync.ts`
  - 将固定 500ms timer 改为有优先级的单飞调度器。
  - 加入错误分类、冲突后的 save 停止条件和 writer lease 接入。
  - 保留现有 hydrate、旧缓存导入和显式冲突选择能力。
- `app/learning-sync.ts`
  - 保持缓存解析、hydrate 决策和 CAS 结果解析为纯逻辑。
  - 如有需要，新增纯函数形式的调度策略和 lease 判定，便于 node:test 覆盖。
- `app/learning-state-api.ts`
  - 保持 API 形状；只补充可测试的错误分类时才修改。
- `app/analytics.ts`
  - 扩展同步事件属性白名单，不写敏感正文。

### 6.2 不修改

- `supabase/migrations/*`
- `learning_states` 表结构
- `save_learning_state` RPC 签名和 CAS 语义
- `app/learning.ts` 的背词、答题和复习算法
- `@gotheword/pencil-pup-ui`，除非实现时确认现有 `Modal`、`Tag`、`Button` 无法表达接管交互；未得到明确同意前不新增替代组件

## 7. 自动化验收

### 7.1 单元测试

新增纯策略测试，至少覆盖：

1. 连续 UI tick 不产生 `AppState` mutation，也不调度 save。
2. 30 秒检查点只物化一次累计计时。
3. `normal` 变更使用 2 秒 trailing debounce，但连续变更在 10 秒 max wait 内一定提交。
4. `flush` 能提升队列优先级，并始终保存最新快照。
5. 单飞期间多次 mutation 只保留最新快照，成功后 revision 正确推进。
6. CAS 冲突后旧 revision 的 save 次数不再增加。
7. 离线不轮询，`online` 后恢复一次调度。
8. 429/5xx 退避有上限，401/403/校验错误不重试。
9. writer lease 的获取、续约、过期、接管和 generation 防 ABA 行为。

### 7.2 浏览器 E2E

在 `tests/e2e/mobile.spec.ts` 或独立 `tests/e2e/learning-sync.spec.ts` 中拦截并真实模拟 `/rest/v1/rpc/save_learning_state`，维护递增 revision，而不是对所有 REST 请求统一返回 401。

必须覆盖：

1. 单标签开始学习后，在没有答题的 60 秒内，UI 计时每秒变化；完成首次业务保存后，额外 save RPC 不超过 2 次。
2. 快速完成 10 次答题，刷新页面后最后一次进度可恢复；云端请求数明显少于状态 mutation 数，且不存在并发 save。
3. 打开同一 browser context 的两个 page：只有一个 writer；第二个页面不能后台写；健康路径产生 0 个 CAS 冲突。
4. 用户接管第二个标签后，第一个标签停止计时和保存，第二个标签使用最新 revision 继续。
5. RPC 返回一次 `learning_state_revision_conflict` 后，只允许一次远端 load；用户选择前 save 次数保持不变。
6. 离线答题会即时更新用户作用域缓存；恢复网络后只提交最新快照。
7. 页面隐藏、30 秒无操作、暂停、完成和强制刷新前，本地缓存中的 `elapsedSeconds` 已物化；强制关闭场景允许最多 30 秒时长误差。

### 7.3 非生产 Supabase smoke

使用隔离测试项目或明确的测试账号完成：

1. 注册/登录。
2. 开始学习、答题、暂停并等待同步。
3. 新页面重新登录，确认进度和时长恢复。
4. 双标签验证单写者和接管。
5. 清理测试账号与状态。

不得用真实用户现有学习记录做覆盖式 smoke，也不得把“页面打开成功”当作保存成功。

## 8. 量化验收标准

- 活动会话 UI 时钟保持 1Hz 更新，纯 tick 的 save RPC 为 0。
- 稳定网络下，无答题的 60 秒活动区间最多产生 2 次计时检查点 save。
- 任意单标签同时进行中的 `save_learning_state` 请求数最多为 1。
- 同浏览器双标签健康流程的 CAS 冲突数为 0；跨设备真实并发仍必须显式提示冲突。
- CAS 冲突被识别后，在用户选择或取得新 revision 前，旧 revision save 重试数为 0。
- 答题、阶段、设置和会话边界在 mutation 后立即进入用户作用域本地缓存。
- 正常在线时，`normal` 业务变更最迟 10 秒进入云端；`flush` 在当前单飞请求结束后立即进入下一次保存。
- 离线/崩溃场景中，答题和学习进度本地 RPO 为 0 次业务操作，纯时长 RPO 不超过 30 秒。
- 现有 typecheck、同步单测、integration、Chromium/WebKit mobile E2E 全部通过。
- 分析事件中不存在 AppState 正文、答案、账号标识、token 或其他 PII。

## 9. 分阶段实施

### Phase 1：P0 降频

- 拆分 UI 时钟与持久化计时。
- 引入 reason/urgency 调度器。
- 完成错误分类和冲突后停止旧 save。
- 增加请求计数 E2E 与分析属性。

完成标准：单标签 60 秒频率、冲突停止和离线恢复测试通过。

### Phase 2：P1 单写者

- 实现 writer lease、续约、过期和接管。
- 接入 `BroadcastChannel`/`storage` 通知。
- 使用 `pencil-pup-ui` 现有组件补充 follower 提示。
- 增加双标签 E2E。

完成标准：同浏览器双标签健康流程 0 冲突，接管后原 writer 停止写。

### Phase 3：预发布和生产观察

- 用隔离账号执行真实 save/reload/dual-tab smoke。
- 对比发布前后每活动分钟 save 数、冲突率和 dirty P95。
- 先小范围观察，再扩大使用；出现数据无法恢复、静默覆盖或冲突率上升时回滚客户端版本。

本方案不含数据库 migration，回滚不需要回退 `learning_states` 数据；本地 v3 缓存与旧客户端仍兼容。

## 10. Review 重点

- 是否还有任何 1Hz effect 直接调用持久化 `setState`。
- 是否所有业务 mutation 都先写用户作用域缓存，再进入云端队列。
- 是否存在绕过单飞调度器直接调用 `saveLearningState` 的路径。
- 冲突后是否真的停止旧 revision save，而不只是改变 UI 文案。
- follower 是否可能因计时、hydrate 或 `storage` 回调重新变为 dirty writer。
- 接管、页面隐藏和租约过期是否会产生两个短暂 writer；即使发生，CAS 是否仍能安全阻止覆盖。
- 测试是否断言 RPC 次数、revision 和刷新恢复结果，而不只断言“已同步”文案。
