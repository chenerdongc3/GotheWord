import { validateA2Content } from "../app/content/a2/build-runtime.ts";

const issues = validateA2Content();

if (issues.length) {
  console.error(`A2 content validation failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log("A2 content validation passed.");
}
