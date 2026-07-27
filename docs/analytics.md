# GotheWord 分析契约

关联工单：POR-12。事件 schema 版本：`1`。

## 接入边界

- 浏览器使用 `posthog-js`，由根目录 `instrumentation-client.ts` 初始化。
- 关闭 autocapture、自动 pageview、Session Replay、Surveys 和自动异常采集；产品指标只来自显式事件。
- 登录后只用 Supabase user UUID 调用 `identify`，退出时 `reset`。用户名、伪邮箱和密码不进入 PostHog。
- `sign_up_completed` 只由 `supabase/functions/register/index.ts` 在账号创建成功后发送，客户端不重复发送；其服务端属性契约由该函数和 `tests/analytics.test.mjs` 共同约束。
- `app/learning.ts`、`app/learning-sync.ts` 和数据库 migration 保持纯逻辑/数据职责；埋点位于页面调用层和同步 hook 编排层。
- 未配置 token 或 host 时分析层静默禁用，不能影响注册、学习或同步结果。

## 公共属性与发布关联

每个自定义事件都包含：

| 属性 | 来源 |
| --- | --- |
| `$geoip_disable` | 固定为 `true`，禁止 PostHog 对事件 IP 做 GeoIP 解析 |
| `analytics_schema_version` | 固定为 `1` |
| `app_version` | `NEXT_PUBLIC_APP_VERSION` / Edge `APP_VERSION` |
| `release_sha` | `NEXT_PUBLIC_RELEASE_SHA` / Edge `RELEASE_SHA` |
| `deployment_env` | `local`、`preview` 或 `production` |
| `state_schema_version` | 当前固定为 `2` |
| `local_day` | 浏览器本地日；服务端注册事件使用 UTC 日期 |
| `timezone` | 浏览器 IANA timezone；服务端省略 |
| `sites_version` | `NEXT_PUBLIC_SITES_VERSION` / Edge `SITES_VERSION` |
| `supabase_migration` | `NEXT_PUBLIC_SUPABASE_MIGRATION` / Edge `SUPABASE_MIGRATION` |

发布时必须让浏览器与 Edge Function 使用相同的 release 元数据。`local` 或
`unavailable` 是未配置时的诚实回退值，不能作为生产发布完成的证据。
站点同时公开不含密钥的 `/release.json`；生产构建前运行
`npm run release:verify`，会拒绝占位 SHA、站点版本、migration 或缺失的
PostHog ingestion 配置。

## P0 事件

事件名和属性的 TypeScript 唯一来源是 `app/analytics.ts`。

| 领域 | 事件 | 触发边界 |
| --- | --- | --- |
| 账号 | `sign_up_completed` | Edge Function 成功创建账号 |
| 账号 | `login_completed` | 用户显式提交登录并成功；session 恢复不发送 |
| 账号 | `authentication_failed` | 登录或注册流程最终失败并展示错误 |
| 激活 | `onboarding_completed` | 账号首次选定每日目标 |
| 复习入口 | `due_review_prompt_viewed` | 今日 Tab 真实显示且有到期词；用户/本地日/浏览器 session 一次 |
| 会话 | `learning_session_started` | 已创建非空 `activeSession` |
| 恢复 | `learning_session_resume_prompt_viewed` | 持久化会话 Modal 实际展示 |
| 恢复 | `learning_session_resumed` | 用户确认继续 |
| 答题 | `learning_answer_submitted` | 状态转换接受一次有效作答 |
| 会话 | `learning_session_completed` | 队列清空并生成报告 |
| 会话 | `learning_session_abandoned` | 显式返回首页或在恢复 Modal 结束 |
| 激活 | `daily_goal_completed` | 当日新词数首次跨过目标 |
| 复习 | `due_review_completed` | 最后一批 review 完成且剩余数为 0 |
| 可靠性 | `learning_state_sync_result` | load/save/legacy import 成功或失败 |
| 冲突 | `learning_state_conflict_detected` | hydration 或 CAS save 冲突 |
| 冲突 | `learning_state_conflict_resolution_result` | use remote 应用成功，或 keep local 的 CAS 得到结果 |

`accuracy` 使用 `0..1` 比例。学习事件用现有 `activeSession.id` 作为
`learning_session_id`。完成、日目标和复习清空事件使用确定性 `$insert_id`
与本地去重键。

## 指标定义

| 指标 | PostHog 定义 |
| --- | --- |
| 注册 → 首轮完成漏斗 | 24 小时 unique-user funnel：`sign_up_completed` → `onboarding_completed` → `learning_session_started(session_mode=new)` → `learning_session_completed(session_mode=new)` |
| 首轮完成率 | 上述漏斗最后一步转化率 |
| 每日目标完成率 | `daily_goal_completed` unique users / `learning_session_started(session_mode=new)` unique users |
| D1 / D7 回访 | Retention：first=`sign_up_completed`，returning=`learning_session_completed` |
| 到期复习清空率 | `due_review_prompt_viewed` → `due_review_completed` |
| 会话完成率 | `learning_session_started` → `learning_session_completed`，按 `session_mode` 拆分 |
| 答题正确率 | `learning_answer_submitted(correct=true)` / 全部同事件 |
| 薄弱词触发率 | `learning_answer_submitted(weak_marked=true, session_mode=review)` / 全部 review 作答 |
| 同步失败率 | `learning_state_sync_result(outcome=failed)` / 全部同事件，按 `operation` 拆分 |
| 冲突解决成功率 | resolution result `outcome=succeeded` / 全部 resolution result |

留存和有效活跃统一使用“完成学习会话”，不使用打开页面。

## PostHog project 与 Dashboard

生产分析固定使用个人 `Bryant` 组织下的 US Cloud `GotheWord`
project（ID `455530`），不使用 Langcore 下的任何 project。

1. [POR-12 · MVP Overview](https://us.posthog.com/project/455530/dashboard/1673167)：日/周有效学习用户、按 mode 的完成会话、每日目标与 D1/D7。
2. [POR-12 · Activation Funnel](https://us.posthog.com/project/455530/dashboard/1906864)：按天查看 24 小时注册 → onboarding → new start → new complete 漏斗，以及注册、登录和会话趋势。
3. [POR-12 · Review & Quality](https://us.posthog.com/project/455530/dashboard/1906890)：review prompt → review complete、答案正确率、薄弱词、完成/放弃、恢复率。
4. [POR-12 · Reliability](https://us.posthog.com/project/455530/dashboard/1906891)：按 operation 的同步失败率、冲突发现/解决、认证失败、sanitised exceptions、[每小时 P0 事件心跳](https://us.posthog.com/project/455530/insights/pKeGlTKG)，并按 source/Sites/migration 关联发布。

所有生产 Insight 同时启用 internal/test account 过滤，并限定
`deployment_env ∈ {preview, production}`、`release_sha != por12-smoke`，因此本地与
POR-12 smoke 数据不会污染生产指标。

心跳 Insight 绑定阈值告警 `POR-12 · Production P0 heartbeat below 1`：最近一小时
事件总数低于 1 时触发，每小时检查并只通知项目所有者。正式发布前保持 Disabled，
避免零生产流量误报；发布 smoke 产生第一批 production 事件后必须启用。

## PostHog smoke 证据

2026-07-26 在 project `455530` 写入一组匿名 schema smoke：

- 18 个历史批次事件和 1 个实时同步事件均被 US ingestion endpoint 接受。
- 使用固定 `release_sha=por12-smoke` 和 `$process_person_profile=false`；没有创建
  person profile，也没有发送用户名、email、密码、答案文本、原始错误或 state。
- smoke 查询验证：日注册漏斗为 100%，D1 与 D7 各有 1 个回访用户；同步失败率
  smoke 为 save 50%、load 0%（整体 33.3%，分母包含额外实时成功事件）。
- 保存后的生产漏斗、D1/D7 与同步失败率 Insight 均已重新执行；当前生产结果为空，
  因为尚无非 smoke 的 preview/production 事件，这是预期状态。

## 隐私边界

禁止采集：

- 用户名、密码/hash、伪邮箱、token、service role key。
- 答案文本、正确释义、德语词、例句。
- 完整 AppState、本地/远端冲突 state、请求/响应 body。
- 第三方原始错误 message；只允许 `normalizeAnalyticsError` 返回的低基数错误码。

允许采集：Supabase UUID 仅作为 distinct ID、`word_id`、模式、阶段、数量、
布尔结果、时长、revision 和发布元数据。`findProhibitedAnalyticsKeys` 是运行时
第二道防线，事件类型是第一道防线。

## 验证

1. 运行 `npm run test:unit` 验证事件目录、公共属性、错误归一化和隐私守卫。
2. 运行 `npm run test:analytics`；测试使用假 token/host 和拦截 transport，不写真实 PostHog。
3. 在 PostHog Live Events 用独立测试账号完成注册、onboarding、新词会话、恢复、复习、同步失败和两种冲突解决。
4. 按禁止清单搜索事件属性；发现一项即停止生产采集并按发布 runbook 回滚或关闭 token。
