import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../dist/client/", import.meta.url);

test("exports a GitHub Pages-ready static site", async () => {
  const [html] = await Promise.all([
    readFile(new URL("index.html", outputRoot), "utf8"),
    access(new URL("404.html", outputRoot)),
    access(new URL(".nojekyll", outputRoot)),
    access(new URL("og.png", outputRoot)),
  ]);

  assert.match(html, /<title>GotheWord · 德语记忆花园<\/title>/i);
  assert.match(html, /(?:src|href)="\/GotheWord\/assets\//);
  assert.match(html, /https:\/\/chenerdongc3\.github\.io\/GotheWord\/og\.png/);
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/chenerdongc3\.github\.io\/GotheWord"/,
  );
  assert.match(
    html,
    /<link rel="icon" href="https:\/\/chenerdongc3\.github\.io\/GotheWord\/og\.png"/,
  );
  assert.doesNotMatch(html, /(?:src|href)="\/assets\//);
});
