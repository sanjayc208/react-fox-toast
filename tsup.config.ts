// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  // sourcemap: true, //This helps in more debugging when there is error
  outDir: 'dist',
  format: ['cjs', 'esm'],
});
