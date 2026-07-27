# GotheWord 发布、监控与回滚 Runbook

关联工单：POR-12。适用于 preview 和 production。

当前 MVP 入口采用 **public 测试**。GitHub Pages environment 必须保持
public；若改为白名单测试，必须在发布记录中写明获准账号与访问策略（不得记录密码），
并先验证目标测试用户而非仅站点所有者可以访问。

## 1. 发布记录

每次发布前在发布记录或 Linear 评论中保存以下不可变值：

| 字段 | 取值来源 |
| --- | --- |
| Source commit | `git rev-parse HEAD` |
| App version | `package.json.version` |
| Sites version | Sites 保存版本返回的 version ID |
| Supabase migration | 已验证应用的最新 migration 文件前缀 |
| Analytics schema | `app/analytics.ts` 中的版本 |
| Previous Sites version | 发布前当前 production version ID，作为回滚目标 |

同一组值必须配置到浏览器 `NEXT_PUBLIC_*` 和 register Edge Function 的对应
secrets。生产事件出现 `release_sha=local`、`sites_version=unavailable` 或
`supabase_migration=unavailable` 时，本次发布不可标记完成。

构建会生成不含密钥的 `/release.json`，用于从线上直接核对 app version、source
commit、hosting version、Supabase migration 及 analytics/state schema。Codex
Sites 使用用户可见版本号（例如 `v6`）；GitHub Pages 使用
`github-pages-run-<run id>-attempt-<attempt>`。

## 2. 发布前门禁

```bash
npm run lint
npx tsc --noEmit
npm run release:verify
npm run test:unit
npm run test:analytics
npm test
npm run test:pages
```

- 确认 Git status/diff 中没有无关文件。
- 确认 `@gotheword/pencil-pup-ui` 仍使用 MIT 许可，依赖树中不存在
  `animal-island-ui`，且新增视觉没有第三方角色或商标元素。
- 数据库 migration 先在隔离环境执行 `supabase/tests/learning_state_revision.sql`。
- PostHog project、区域、token/host 与环境隔离已确认。
- 保存当前 production Sites version ID，且目标 source commit 与将保存的 Sites version 一致。
- 在 Sites/Pages 后台配置 `NEXT_PUBLIC_SUPABASE_URL` 与
  `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`；只记录配置 revision/version，绝不把值写入
  Git、发布记录或日志。运行 `npm run release:verify` 会校验两项存在且格式正确。
- `NEXT_PUBLIC_RELEASE_SHA` 必须等于 `git rev-parse HEAD`；GitHub Pages 门禁还会确认
  该 SHA 已存在于触发部署的远端分支。Codex Sites 只允许保存版本后再部署，并在记录中
  关联保存版本 ID 与 Git SHA。
- 核对 `NEXT_PUBLIC_SUPABASE_MIGRATION` 对应已执行并通过 SQL 验证的 migration，记录
  Sites env revision、Git SHA、目标 Sites version 与 Previous Sites version 后再发布。

## 3. 发布 smoke

用独立 smoke 账号执行，禁止使用真实用户状态：

1. 打开站点，确认静态资源、Supabase 和 PostHog ingestion 没有配置错误。
   `/` 必须显示“欢迎回来”认证页，不得显示“配置 Supabase”；随后读取 `/release.json`，
   逐项比对发布记录中的 Git SHA、Sites version 和 migration。
2. 注册 → 选择目标 5 → 开始并完成一个 new 会话。
3. 退出再登录，确认用户 UUID 一致且没有额外 `login_completed`。
4. 刷新一个进行中会话，分别验证“继续”和“结束”。
5. 制造一次 load/save 失败，确认本地 fallback、归一化错误码及同步分母事件。
6. 两个浏览器制造 revision 冲突，分别验证 use remote 与 keep local。
7. 完成最后一批到期复习，确认 `due_review_completed` 仅一次。
8. 在 Live Events 按 `release_sha` 过滤，确认 source/Sites/migration 三项都等于发布记录。
9. 检查事件没有用户名、密码、email、答案/词句文本、raw error 或 state JSON。
10. 确认 [Production P0 event heartbeat](https://us.posthog.com/project/455530/insights/pKeGlTKG)
    已出现本次 release 的 production 事件，然后启用
    `POR-12 · Production P0 heartbeat below 1` 告警；该告警每小时检查最近一小时，
    低于 1 时只通知项目所有者。

任一核心步骤失败、发生数据静默覆盖或出现隐私字段，立即进入回滚，不等待统计告警。

## 4. 告警

### 无基线也必须启用

- 发布 smoke 任一步失败：立即回滚。
- 新 release 已有成功认证或学习流量，但 30 分钟没有任何 P0 产品事件：立即人工
  检查 token、host、CSP 和初始化；每小时心跳告警负责持续兜底。
- PostHog 中出现隐私禁止字段：立即停止该环境采集，撤销/轮换相关 token，并回滚问题 release。
- 同一 release 出现 revision 静默覆盖、RLS 越权或无法恢复的学习状态：立即回滚。

### 有基线后启用

先采集至少 14 天，且每类指标至少 100 次操作。记录每个指标的日常分布和 p95，
再在 PostHog 创建同步失败率、冲突率、认证失败率和 sanitised exception
volume 告警。阈值取“业务可接受上限”和“已记录 p95”中更严格者，并要求最小样本量，
避免低流量单次失败触发噪声。基线、最终百分比、观察窗口和最小样本量必须回填
POR-12；没有基线时不得编造统计阈值。

“连续零事件”监控用于发现埋点或配置故障，不代表产品表现良好。它已预创建但在首个
POR-12 production release 前保持 Disabled；发布 smoke 后启用是发布完成门禁。

## 5. 回滚

1. 暂停继续发布，记录触发时间、release SHA、Sites version、migration 和症状。
2. 在 Sites 将 production 部署指向发布记录中的 `Previous Sites version`；只部署已保存版本。
3. 恢复该旧版本对应的浏览器/Edge release 元数据，避免事件错误归因。
4. 数据库优先使用向前修复。只有 migration 明确可逆、已备份且不会删除新数据时才执行数据库回滚；否则保留兼容 schema 并回滚应用。
5. 若问题来自 Edge Function，重新部署与旧 source commit 匹配的函数，并恢复其 secrets 元数据。
6. 重跑第 3 节 smoke，按新/旧 `release_sha` 确认错误停止且同步成功率恢复。
7. 在 POR-12 或事故工单记录回滚 version、证据和后续修复，不删除失败 release 的事件。

回滚完成的最低证据：站点可访问、认证可用、一次学习状态 load/save 成功、无隐私
字段、当前 Sites version 与发布记录一致。
