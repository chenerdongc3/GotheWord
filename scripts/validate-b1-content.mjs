import { validateB1Content } from "../app/content/b1/build-runtime.ts";

const issues = validateB1Content();

if (issues.length) {
  console.error(`B1 content validation failed with ${issues.length} issue(s):`);
  for (const issue of issues) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log("B1 content validation passed.");
}
