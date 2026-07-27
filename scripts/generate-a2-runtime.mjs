import { mkdir, readFile, writeFile } from "node:fs/promises";
import { serializeA2RuntimeModule } from "../app/content/a2/build-runtime.ts";

const target = new URL(
  "../app/content/a2/generated/a2-runtime.ts",
  import.meta.url,
);
const expected = serializeA2RuntimeModule();
const checkOnly = process.argv.includes("--check");

if (checkOnly) {
  const current = await readFile(target, "utf8").catch(() => "");
  if (current !== expected) {
    console.error(
      "A2 runtime drift detected. Run `npm run content:a2:generate` and commit the result.",
    );
    process.exitCode = 1;
  } else {
    console.log("A2 generated runtime is up to date.");
  }
} else {
  await mkdir(new URL("../app/content/a2/generated/", import.meta.url), {
    recursive: true,
  });
  await writeFile(target, expected, "utf8");
  console.log(`Generated ${target.pathname}`);
}
