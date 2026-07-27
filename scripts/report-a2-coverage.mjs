import { brotliCompressSync, gzipSync } from "node:zlib";
import { readFile, writeFile } from "node:fs/promises";
import { buildA2CoverageReport } from "../app/content/a2/build-runtime.ts";

const runtimeUrl = new URL(
  "../app/content/a2/generated/a2-runtime.ts",
  import.meta.url,
);
const reportUrl = new URL(
  "../app/content/a2/coverage-report.json",
  import.meta.url,
);
const runtime = await readFile(runtimeUrl);
const report = buildA2CoverageReport({
  generatedRuntimeBytes: runtime.byteLength,
  gzipBytes: gzipSync(runtime).byteLength,
  brotliBytes: brotliCompressSync(runtime).byteLength,
});

await writeFile(reportUrl, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(`Wrote ${reportUrl.pathname}`);
