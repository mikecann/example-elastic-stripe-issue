import { build } from "esbuild";

async function bootstrap() {
  await build({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    outdir: `dist`,
    sourcemap: "external",
    platform: "node",
    target: [`node14`],
    external: ["elastic-apm-node"],
  });
}

bootstrap()
  .then(() => {
    process.exit(0);
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
