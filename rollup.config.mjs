import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
//This plugin prevents packages listed in peerDependencies from being bundled with our component library
import peerDepsExternal from "rollup-plugin-peer-deps-external";

//efficiently bundles third party dependencies we've installed and use in node_modules
import resolve from "@rollup/plugin-node-resolve";

// //enables transpilation into CommonJS (CJS) format
import commonjs from "@rollup/plugin-commonjs";

import packageJson from "./package.json" assert { type: "json" };

export default {
  input: "./index.js",
  output: {
    file: packageJson.module,
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
  ],
  external: ["react", "react-dom"],
};
