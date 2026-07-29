import { mkdir, readFile, writeFile } from "node:fs/promises";
import { serializeB1RuntimeModule } from "../app/content/b1/build-runtime.ts";

const target = new URL(
  "../app/content/b1/generated/b1-runtime.ts",
  import.meta.url,
);
const expected = serializeB1RuntimeModule();
const checkOnly = process.argv.includes("--check");

if (checkOnly) {
  const current = await readFile(target, "utf8").catch(() => "");
  if (current !== expected) {
    console.error(
      "B1 runtime drift detected. Run `npm run content:b1:generate` and commit the result.",
    );
    process.exitCode = 1;
  } else {
    console.log("B1 generated runtime is up to date.");
  }
} else {
  await mkdir(new URL("../app/content/b1/generated/", import.meta.url), {
    recursive: true,
  });
  await writeFile(target, expected, "utf8");
  console.log(`Generated ${target.pathname}`);
}
