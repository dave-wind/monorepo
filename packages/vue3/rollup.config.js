import { defineConfig } from 'rollup'
import commonConfig from './rollup.common.js'
import { name } from './package.json'

export default defineConfig([
  {
    ...commonConfig,
    input: 'components/index.ts',
    output: [
      {
        name: 'neopark-vue',
        file: './dist/components/index.js',
        format: 'umd',
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      },
      {
        name,
        file: './es/components/index.js',
        format: 'es'
      },
      {
        name,
        file: './lib/components/index.cjs',
        format: 'commonjs'
      }
    ]
  }
])
