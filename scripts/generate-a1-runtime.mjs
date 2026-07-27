import { mkdir, readFile, writeFile } from "node:fs/promises";
import { serializeA1RuntimeModule } from "../app/content/a1/build-runtime.ts";

const target = new URL(
  "../app/content/a1/generated/a1-runtime.ts",
  import.meta.url,
);
const expected = serializeA1RuntimeModule();
const checkOnly = process.argv.includes("--check");

if (checkOnly) {
  const current = await readFile(target, "utf8").catch(() => "");
  if (current !== expected) {
    console.error(
      "A1 runtime drift detected. Run `npm run content:a1:generate` and commit the result.",
    );
    process.exitCode = 1;
  } else {
    console.log("A1 generated runtime is up to date.");
  }
} else {
  await mkdir(new URL("../app/content/a1/generated/", import.meta.url), {
    recursive: true,
  });
  await writeFile(target, expected, "utf8");
  console.log(`Generated ${target.pathname}`);
}
