import { B1_MANIFEST } from "../app/content/b1/manifest.ts";

if (B1_MANIFEST.rights.sourceList !== "approved") {
  console.error(
    "Public deployment blocked: the frozen Goethe B1 source-list rights status is still pending.",
  );
  process.exitCode = 1;
} else {
  console.log("B1 source-list rights status is approved for public deployment.");
}
