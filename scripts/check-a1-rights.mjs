import { A1_MANIFEST } from "../app/content/a1/manifest.ts";

if (A1_MANIFEST.rights.sourceList !== "approved") {
  console.error(
    "Public deployment blocked: the frozen Goethe A1 source-list rights status is still pending.",
  );
  process.exitCode = 1;
} else {
  console.log("A1 source-list rights status is approved for public deployment.");
}
