import { brotliCompressSync, gzipSync } from "node:zlib";
import { readFile, writeFile } from "node:fs/promises";
import { buildCoverageReport } from "../app/content/a1/build-runtime.ts";

const runtimeUrl = new URL(
  "../app/content/a1/generated/a1-runtime.ts",
  import.meta.url,
);
const reportUrl = new URL(
  "../app/content/a1/coverage-report.json",
  import.meta.url,
);
const runtime = await readFile(runtimeUrl);
const report = buildCoverageReport({
  generatedRuntimeBytes: runtime.byteLength,
  gzipBytes: gzipSync(runtime).byteLength,
  brotliBytes: brotliCompressSync(runtime).byteLength,
});

await writeFile(reportUrl, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(`Wrote ${reportUrl.pathname}`);
