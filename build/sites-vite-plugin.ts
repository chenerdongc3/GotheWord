import { access, cp, mkdir, readdir, rm } from "node:fs/promises";
import { resolve } from "node:path";
import type { Plugin } from "vite";

async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

async function removeServerStaticAssets(directory: string) {
  if (!(await exists(directory))) return;
  const entries = await readdir(directory, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const path = resolve(directory, entry.name);
      if (entry.isDirectory()) {
        await removeServerStaticAssets(path);
      } else if (!entry.name.endsWith(".js") && !entry.name.endsWith(".json")) {
        await rm(path, { force: true });
      }
    }),
  );
}

// Packages Sites metadata and migrations after Vite finishes compiling.
export function sites(): Plugin {
  let root = process.cwd();

  return {
    name: "sites",
    apply: "build",
    configResolved(config) {
      root = config.root;
    },
    async closeBundle() {
      const outputDirectory = resolve(root, "dist", ".openai");
      const hostingConfig = resolve(root, ".openai", "hosting.json");
      const drizzleSource = resolve(root, "drizzle");

      await rm(outputDirectory, { recursive: true, force: true });
      await mkdir(outputDirectory, { recursive: true });

      if (await exists(hostingConfig)) {
        await cp(hostingConfig, resolve(outputDirectory, "hosting.json"));
      }
      if (await exists(drizzleSource)) {
        await cp(drizzleSource, resolve(outputDirectory, "drizzle"), {
          recursive: true,
        });
      }

      // Static assets are served from dist/client. Keeping Vite's duplicate
      // copies under dist/server makes Workers treat images as JS modules.
      await removeServerStaticAssets(resolve(root, "dist", "server", "assets"));
      await removeServerStaticAssets(resolve(root, "dist", "server", "ssr", "assets"));
    },
  };
}
