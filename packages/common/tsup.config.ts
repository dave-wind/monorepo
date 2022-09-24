import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['utils/index.ts','types/index.ts'],
    clean: true,
    dts: true, // 生成 .d.ts
    outDir: 'dist',
    format: ['cjs', 'esm']
})