import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../dist/client/", import.meta.url);

test("exports a GitHub Pages-ready static site", async () => {
  const [html, release] = await Promise.all([
    readFile(new URL("index.html", outputRoot), "utf8"),
    readFile(new URL("release.json", outputRoot), "utf8"),
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
    /<link rel="icon" href="https:\/\/chenerdongc3\.github\.io\/GotheWord\/favicon\.svg"/,
  );
  assert.doesNotMatch(html, /(?:src|href)="\/assets\//);

  const releaseMetadata = JSON.parse(release);
  assert.equal(releaseMetadata.app_version, "0.1.0");
  assert.equal(releaseMetadata.analytics_schema_version, 1);
  assert.equal(releaseMetadata.state_schema_version, 2);
  assert.doesNotMatch(release, /phc_|token|password|secret/i);
});
