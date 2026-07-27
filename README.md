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

## 本地运行

```bash
npm install
cp .env.example .env.local
npm run dev
```

将 `.env.local` 中的地址和 Publishable Key 替换为 Supabase 项目的实际值。
数据库结构位于 `supabase/migrations/20260726000000_create_learning_states.sql`。
免邮箱确认的注册入口位于 `supabase/functions/register/index.ts`。

打开终端显示的本地地址即可使用。

## 验证

```bash
npm run lint
npm run typecheck
npm run test:unit
npm run test:integration
npm run test:e2e
npm test
npm run test:pages
```

测试不会读取开发机的隐式 Supabase 配置：SSR 集成测试分别用显式空值和测试专用假配置构建，覆盖配置提示页与账号加载页。单元测试通过注入固定时间和确定性 RNG 验证学习调度；E2E 使用隔离的浏览器存储和网络桩，不接触生产用户数据。所有构建命令都会在出现 `FILE_NAME_CONFLICT` 时失败，CI 不会静默放过资产覆盖警告。

## 发布与回滚

1. 发布前确认 Quality gate 的 lint、typecheck、unit、integration、E2E 和 Pages build 全部通过，并检查构建日志中没有 `FILE_NAME_CONFLICT`。
2. 在预发布环境注册测试账号，设置目标，完成一轮学习和报告；重新打开 Chromium 与 WebKit，确认进度恢复，再执行到期复习和重置。
3. 发布后访问首页，确认静态资源、Supabase 登录和一次学习状态保存正常；测试数据只能写入 Supabase 测试项目或开发分支。
4. 若 smoke 失败，立即停止推广，在 GitHub Pages 中重新运行上一个成功提交的部署 workflow（或将失败提交 revert 后推送），随后重复 smoke，并记录失败提交与数据迁移影响。

## GitHub Pages

推送到 `main` 后，GitHub Actions 会构建静态版本并发布到：

<https://chenerdongc3.github.io/GotheWord/>

本地可通过 `npm run test:pages` 验证 Pages 子路径、静态资源和站点元数据。

## UI 与许可

界面组件统一使用 `animal-island-ui`。该组件库采用 CC BY-NC 4.0 许可，仅限非商业用途；商业使用前必须另行完成许可评估。
