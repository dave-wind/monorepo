import { defineConfig } from 'rollup'
import commonConfig from './rollup.common.js'
import { name } from './package.json'

export default defineConfig([
  {
    ...commonConfig,
    input: 'components/index.ts',
    output: [
      {
        name,
        file: './dist/components/index.js',
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
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
  },
  {
    ...commonConfig,
    input: 'hooks/index.ts',
    output: [
      {
        name: 'neopark-react',
        file: './dist/hooks/index.js',
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
      {
        name,
        file: './es/hooks/index.js',
        format: 'es'
      },
      {
        name,
        file: './lib/hooks/index.cjs',
        format: 'commonjs'
      }
    ]
  }
])
