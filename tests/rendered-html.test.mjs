import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the GotheWord onboarding experience", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>GotheWord · 德语记忆花园<\/title>/i);
  assert.match(html, /把德语，慢慢种进记忆里/);
  assert.match(html, /每天 10 个 · 推荐/);
  assert.match(html, /开始我的德语旅程/);
  assert.match(html, /property="og:image"/);
  assert.match(html, /\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("keeps the learning rules and UI ownership explicit", async () => {
  const [app, learning, words, page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/GotheWordApp.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/learning.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/words.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(packageJson, /"animal-island-ui"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(layout, /import "animal-island-ui\/style"/);
  assert.match(layout, /lang="zh-CN"/);
  assert.match(page, /<GotheWordApp \/>/);
  assert.doesNotMatch(app, /<(?:button|input|select|progress)\b/);

  assert.match(learning, /1:\s*3/);
  assert.match(learning, /2:\s*7/);
  assert.match(learning, /3:\s*14/);
  assert.match(learning, /4:\s*30/);
  assert.match(learning, /5:\s*60/);
  assert.match(learning, /const offset = 3 \+ Math\.floor\(Math\.random\(\) \* 3\)/);
  assert.match(app, /session\.mode === "review" \? 2 : 3/);
  assert.match(app, /previous\.reviewMistakes \+ 1/);
  assert.match(app, /totalAnswers: previous\.totalAnswers \+ 1/);
  assert.match(app, /nextReviewAt: addLocalDays\(now, 1\)/);
  assert.match(app, /Date\.now\(\) - lastActivityRef\.current >= 30_000/);

  assert.equal((words.match(/\n    id: "/g) ?? []).length, 24);
  assert.equal((words.match(/\n    examples: \[/g) ?? []).length, 24);
  assert.equal((words.match(/\{ de: "/g) ?? []).length, 72);

  await assert.rejects(access(new URL("../app/_sites-preview", templateRoot)));
});
