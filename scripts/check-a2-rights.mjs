import { A2_MANIFEST } from "../app/content/a2/manifest.ts";

if (A2_MANIFEST.rights.sourceList !== "approved") {
  console.error(
    "Public deployment blocked: the frozen Goethe A2 source-list rights status is still pending.",
  );
  process.exitCode = 1;
} else {
  console.log("A2 source-list rights status is approved for public deployment.");
}
