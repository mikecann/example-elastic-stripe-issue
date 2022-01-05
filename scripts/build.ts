import { build } from "esbuild";
import { nativeNodeModulesPlugin } from "./native-node-module";
import { externalPlugin } from "./external";

async function bootstrap() {
  const external: string[] = [
    // Exclude dependencies, e.g. `lodash`, `lodash/get`
    //...deps.map((dep) => new RegExp(`^${dep}($|\\/|\\\\)`)),
    //...(options.external || []),
  ];

  await build({
    entryPoints: ["./src/index.ts"],
    bundle: true,
    outdir: `dist`,
    sourcemap: "external",
    platform: "node",
    target: [`node14`],
    external: [],
    plugins: [
      nativeNodeModulesPlugin(),
      externalPlugin({
        external,
        noExternal: [],
        skipNodeModulesBundle: undefined,
        tsconfigResolvePaths: undefined,
      }),
    ],
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
