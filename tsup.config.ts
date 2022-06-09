import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/emitter.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  format: ["cjs", "esm"],
  dts: true
})