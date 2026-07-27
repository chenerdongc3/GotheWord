import {
  brotliCompressSync,
  gzipSync,
} from "node:zlib";
import {
  readdir,
  readFile,
  stat,
  writeFile,
} from "node:fs/promises";
import { extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { buildCoverageReport } from "../app/content/a1/build-runtime.ts";

const clientRoot = fileURLToPath(new URL("../dist/client/", import.meta.url));
const runtimeUrl = new URL(
  "../app/content/a1/generated/a1-runtime.ts",
  import.meta.url,
);
const reportUrl = new URL(
  "../app/content/a1/coverage-report.json",
  import.meta.url,
);
const manifestPath = join(clientRoot, ".vite", "manifest.json");
const sentinel = "a1-alpha-0001";

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const paths = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) paths.push(...(await walk(path)));
    else paths.push(path);
  }
  return paths;
}

const files = await walk(clientRoot);
const jsFiles = files.filter((file) => extname(file) === ".js");
const initialAssetPaths = new Set();
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const rootEntry = manifest["app/GotheWordRoot.tsx"];
const appEntry = manifest["app/GotheWordApp.tsx"];

if (
  !rootEntry ||
  !appEntry?.isDynamicEntry ||
  !rootEntry.dynamicImports?.includes("app/GotheWordApp.tsx")
) {
  console.error(
    "Vite manifest does not place GotheWordApp in the authenticated dynamic graph.",
  );
  process.exit(1);
}

function collectStaticImports(key) {
  const entry = manifest[key];
  if (!entry) return;
  const assetPath = join(clientRoot, entry.file);
  if (initialAssetPaths.has(assetPath)) return;
  initialAssetPaths.add(assetPath);
  for (const importedKey of entry.imports ?? []) collectStaticImports(importedKey);
}
collectStaticImports("app/GotheWordRoot.tsx");

const runtimeChunks = [];
let initialHtmlIncludesRuntime = false;
for (const file of jsFiles) {
  const source = await readFile(file);
  if (!source.includes(Buffer.from(sentinel))) continue;
  const info = await stat(file);
  runtimeChunks.push({
    file: relative(clientRoot, file),
    bytes: info.size,
    gzipBytes: gzipSync(source).byteLength,
    brotliBytes: brotliCompressSync(source).byteLength,
  });
  if (initialAssetPaths.has(file)) initialHtmlIncludesRuntime = true;
}

if (!runtimeChunks.length) {
  console.error("No production chunk contains the A1 runtime sentinel.");
  process.exit(1);
}
if (initialHtmlIncludesRuntime) {
  console.error("The login/configuration initial scripts contain the A1 runtime.");
  process.exit(1);
}

const runtime = await readFile(runtimeUrl);
const report = buildCoverageReport({
  generatedRuntimeBytes: runtime.byteLength,
  gzipBytes: gzipSync(runtime).byteLength,
  brotliBytes: brotliCompressSync(runtime).byteLength,
  chunks: runtimeChunks,
  initialHtmlIncludesRuntime,
});
await writeFile(reportUrl, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(
  `A1 runtime is isolated to ${runtimeChunks.length} authenticated-app chunk(s).`,
);
