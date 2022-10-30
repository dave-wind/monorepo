import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import { babel } from '@rollup/plugin-babel'

const commonConfig = {
  input: 'index.ts',
  external: ['react', 'react-dom'],
  plugins: [
    typescript(),
    resolve({
      extensions: ['.tsx', '.ts', '.js']
    }),
    postcss({}),
    babel({
      babelrc: false,
      exclude: '**/node_modules/**',
      presets: ['@babel/preset-react', '@babel/preset-env'],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-syntax-object-rest-spread',
        '@babel/plugin-transform-react-jsx',
        [
          '@babel/plugin-transform-runtime',
          {
            absoluteRuntime: false,
            corejs: false,
            helpers: false,
            regenerator: false,
            useESModules: false
          }
        ]
      ]
    }),
    commonjs()
  ]
}

export default commonConfig
