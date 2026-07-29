import { brotliCompressSync, gzipSync } from "node:zlib";
import { readFile, writeFile } from "node:fs/promises";
import { buildB1CoverageReport } from "../app/content/b1/build-runtime.ts";

const runtimeUrl = new URL(
  "../app/content/b1/generated/b1-runtime.ts",
  import.meta.url,
);
const reportUrl = new URL(
  "../app/content/b1/coverage-report.json",
  import.meta.url,
);
const runtime = await readFile(runtimeUrl);
const report = buildB1CoverageReport({
  generatedRuntimeBytes: runtime.byteLength,
  gzipBytes: gzipSync(runtime).byteLength,
  brotliBytes: brotliCompressSync(runtime).byteLength,
});

await writeFile(reportUrl, `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(`Wrote ${reportUrl.pathname}`);
