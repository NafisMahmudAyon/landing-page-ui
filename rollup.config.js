import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import postcss from "rollup-plugin-postcss";

export default defineConfig({
	input: "src/index.ts",
	output: {
		file: "dist/index.js",
		format: "esm",
		name: "ui-typescript",
	},
	external: ["react", "react-dom"],
	plugins: [
		typescript({
			tsconfig: "./tsconfig.json",
		}),
		postcss(),
		// nodeResolve(),
		// commonjs()
	],
});