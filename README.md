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

## Goethe A1 内容

- 冻结来源为 `Goethe-Zertifikat A1: Start Deutsch 1` 成人版官方 PDF；URL、获取日期、SHA-256 与内容版本记录在 `app/content/a1/manifest.ts`。
- 作者层分离来源词条、中文教学内容、taxonomy 与 legacy ID；页面只消费构建期生成的 `app/content/a1/generated/a1-runtime.ts`。
- 当前基线覆盖 687 个字母词表来源行、13 类词组的 130 个成员/模式，并保留原有 24 个学习 ID。
- `app/content/a1/coverage-report.json` 记录来源覆盖、quiz-eligible/reviewed、词类/主题、legacy 解析、运行时体积和实际 chunk 归属。
- 官方来源例句不会进入公开运行时；运行时仅包含 GotheWord 教学例句。

内容维护命令：

```bash
npm run content:a1:generate
npm run content:a1:validate
npm run content:a1:report
npm run content:a1:check
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
npx tsc --noEmit
npm test
npm run test:analytics
npm run test:pages
```

## GitHub Pages

推送到 `main` 后，GitHub Actions 会构建并验证静态版本。只有
`A1_MANIFEST.rights.sourceList` 明确为 `approved` 时才允许发布到：

<https://chenerdongc3.github.io/GotheWord/>

本地可通过 `npm run test:pages` 验证 Pages 子路径、静态资源和站点元数据。
当前完整 Goethe 来源清单的权利状态为 `pending`，工作流会在上传 Pages
artifact 前主动阻断公开发布。

## UI 与许可

界面组件统一使用 [`animal-island-ui`](https://github.com/guokaigdg/animal-island-ui)。

### POR-8：公开发布边界

- [x] 当前用途已确认为**非商业测试项目**，可用于个人学习、评估、测试和非商业展示。
- [x] 用途负责人陈erdong已于 2026-07-26 在 [POR-8](https://linear.app/codexnoumi/issue/POR-8/p0-完成-animal-island-ui-许可与公开发布边界评估) 中确认该发布边界。
- [x] 当前 GitHub Pages 公开版本仅作为免费、非商业的产品测试，不提供收费服务、付费模板或企业商业用途。

### 第三方组件署名

GotheWord 使用由 [guokaigdg](https://github.com/guokaigdg) 创建的
[`animal-island-ui@1.2.3`](https://github.com/guokaigdg/animal-island-ui)，
该组件库采用
[Creative Commons Attribution-NonCommercial 4.0 International（CC BY-NC 4.0）](https://creativecommons.org/licenses/by-nc/4.0/)
许可。组件库源码、版权与免责声明以其
[仓库说明](https://github.com/guokaigdg/animal-island-ui#copyright-and-disclaimer)
和 [LICENSE](https://github.com/guokaigdg/animal-island-ui/blob/main/LICENSE) 为准。
本项目从 npm 包入口直接使用该组件库，未复制或修改其源码。

### Release checklist

每次公开发布前必须确认：

- [ ] 本次发布仍属于免费、非商业的测试、学习或展示用途。
- [ ] README 中保留组件库作者、源码地址和 CC BY-NC 4.0 许可声明。
- [ ] 升级或替换 `animal-island-ui` 时重新核对当前版本的许可证和署名要求。
- [ ] 若计划用于商业产品、企业项目、对外收费服务或付费模板，先停止公开部署；取得商业授权或由负责人确认替代方案后方可恢复。
- [ ] 组件不满足需求时不得在本仓库仿制；应调整设计、等待上游能力或向上游提出组件需求。
