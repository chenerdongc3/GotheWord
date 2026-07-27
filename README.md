# GotheWord

面向德语初学者的背词产品。通过新词记忆、四选一测试和固定间隔复习，帮助用户把碎片时间转化为稳定的词汇积累。

## 已实现

- 每日 5 / 10 / 20 个新词目标
- 名词冠词、复数、中文释义、三个双语例句和德语发音
- 新词连续答对 3 次后进入复习计划
- 复习连续答对 2 次后进入下一阶段
- 1 / 3 / 7 / 14 / 30 / 60 天固定复习间隔
- 错题延后 3～5 题再次出现，历史答题记录保留
- 单轮两次答错后标记薄弱词并安排次日复习
- 30 秒无操作、页面隐藏和手动暂停时停止计时
- 每日新学、复习、时长、连续学习和正确率统计
- 用户名与密码注册、登录（注册后立即登录）
- 学习目标、进度和统计按用户同步到 Supabase，并保留本地副本

## Goethe A1 / A2 内容

- 冻结来源为 `Goethe-Zertifikat A1: Start Deutsch 1` 成人版官方 PDF；URL、获取日期、SHA-256 与内容版本记录在 `app/content/a1/manifest.ts`。
- 作者层分离来源词条、中文教学内容、taxonomy 与 legacy ID；页面只消费构建期生成的 `app/content/a1/generated/a1-runtime.ts`。
- 当前基线覆盖 687 个字母词表来源行、13 类词组的 130 个成员/模式，并保留原有 24 个学习 ID。
- `app/content/a1/coverage-report.json` 记录来源覆盖、quiz-eligible/reviewed、词类/主题、legacy 解析、运行时体积和实际 chunk 归属。
- 官方来源例句不会进入公开运行时；运行时仅包含 GotheWord 教学例句。
- A2 沿用相同的来源层、教学层和生成运行时结构，当前提供 1038 个可学习词条；来源版本与校验信息记录在 `app/content/a2/manifest.ts`。
- A1 与 A2 使用独立稳定 ID。设置页可切换词书，并分别显示总词数和已学词数；切换不会清空另一册进度。
- A2 中文释义当前标记为机器生成初稿，发布前仍需人工校对；A2 来源清单的公开再分发状态保持 `pending`。

内容维护命令：

```bash
npm run content:a1:generate
npm run content:a1:validate
npm run content:a1:report
npm run content:a1:check
npm run content:a2:generate
npm run content:a2:validate
npm run content:a2:report
npm run content:a2:check
npm run content:check
```

## 本地运行

```bash
npm install
cp .env.example .env.local
npm run dev
```

将 `.env.local` 中的地址和 Publishable Key 替换为 Supabase 项目的实际值。
数据库结构位于 `supabase/migrations/20260726000000_create_learning_states.sql`。
免邮箱确认的注册入口位于 `supabase/functions/register/index.ts`。
PostHog 项目、事件契约、隐私边界和 dashboard 定义见
[`docs/analytics.md`](docs/analytics.md)；发布 smoke 与回滚流程见
[`docs/release-runbook.md`](docs/release-runbook.md)。

打开终端显示的本地地址即可使用。

## 验证

```bash
npm run lint
npm run typecheck
npm run test:unit
npm run test:integration
npm run test:e2e
npm test
npm run test:analytics
npm run test:pages
```

测试不会读取开发机的隐式 Supabase 配置：SSR 集成测试分别用显式空值和测试专用假配置构建，覆盖配置提示页与账号加载页。单元测试通过注入固定时间和 seeded RNG 验证学习调度；E2E 使用隔离的浏览器存储和网络桩，不接触生产用户数据。

## 发布与回滚

1. 发布前确认 Quality gate 的 lint、typecheck、unit、integration、E2E 和 Pages build 全部通过，并检查构建日志中没有 `FILE_NAME_CONFLICT`。
2. 在预发布环境注册测试账号，设置目标，完成一轮学习和报告；重新打开 Chromium 与 WebKit，确认进度恢复，再执行到期复习和重置。
3. 发布后访问首页，确认静态资源、Supabase 登录和一次学习状态保存正常；测试数据只能写入 Supabase 测试项目或开发分支。
4. 若 smoke 失败，立即停止推广，在 GitHub Pages 中重新运行上一个成功提交的部署 workflow（或将失败提交 revert 后推送），随后重复 smoke，并记录失败提交与数据迁移影响。

## GitHub Pages

推送到 `main` 后，GitHub Actions 会构建并验证静态版本。只有
`A1_MANIFEST.rights.sourceList` 与 `A2_MANIFEST.rights.sourceList` 均明确为
`approved` 时才允许发布到：

<https://chenerdongc3.github.io/GotheWord/>

本地可通过 `npm run test:pages` 验证 Pages 子路径、静态资源和站点元数据。
当前 A1 来源清单已确认为 `approved`；A2 仍为 `pending`，因此 Pages 工作流会在
A2 权利状态获得项目负责人明确确认前停止上传 artifact。

该入口是 public、免费、非商业的 MVP 测试入口。生产 Supabase URL 与 Publishable
Key 仅通过 GitHub environment secrets 配置，不进入仓库；发布门禁会核对配置格式、
当前 Git SHA、migration 与可追溯的 Pages run version。详细发布证据、认证页 smoke 和
回滚步骤见 [`docs/release-runbook.md`](docs/release-runbook.md)。

## UI 与许可

界面组件统一使用仓库内的
[`@gotheword/pencil-pup-ui`](packages/pencil-pup-ui)。该库采用 MIT 许可，
以原创的暖白纸张、手绘墨线、错位阴影和报纸漫画节奏构建设计语言。

### 原创与第三方 IP 边界

Pencil Pup UI 不隶属于 Peanuts Worldwide、Snoopy 或 Charles M. Schulz
Creative Associates，也未获其背书。组件库中不得加入受保护角色名称、角色轮廓、
临摹素材、品牌标识或标志性台词。`packages/pencil-pup-ui/LICENSE` 只授权本仓库的
原创代码，不授予任何第三方角色或品牌权利。

### Release checklist

每次公开发布前确认：

- [ ] `package-lock.json` 中不存在 `animal-island-ui`。
- [ ] 应用 UI 只从 `@gotheword/pencil-pup-ui` 导入通用组件。
- [ ] 新增视觉素材与文案不包含第三方角色、商标、临摹轮廓或标志性元素。
- [ ] 组件缺失时在 `packages/pencil-pup-ui` 中实现可复用能力，不在业务页面复制组件。
