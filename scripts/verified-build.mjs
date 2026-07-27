import { spawn } from "node:child_process";

const executable = process.platform === "win32" ? "vinext.cmd" : "vinext";
const child = spawn(executable, ["build"], {
  env: {
    ...process.env,
    WRANGLER_LOG_PATH: ".wrangler/wrangler.log",
  },
  shell: process.platform === "win32",
  stdio: ["inherit", "pipe", "pipe"],
});

let output = "";
for (const stream of [child.stdout, child.stderr]) {
  stream.on("data", (chunk) => {
    const text = chunk.toString();
    output += text;
    (stream === child.stdout ? process.stdout : process.stderr).write(chunk);
  });
}

const exitCode = await new Promise((resolve, reject) => {
  child.on("error", reject);
  child.on("close", (code) => resolve(code ?? 1));
});

if (/FILE_NAME_CONFLICT/i.test(output)) {
  console.error("\nBuild rejected: asset FILE_NAME_CONFLICT warning detected.");
  process.exitCode = 1;
} else {
  process.exitCode = exitCode;
}
