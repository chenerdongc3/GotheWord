import { validateA1Content } from "../app/content/a1/build-runtime.ts";

const issues = validateA1Content();

if (issues.length) {
  console.error(`A1 content validation failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log("A1 content validation passed.");
}
