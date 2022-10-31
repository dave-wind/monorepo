import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import { babel } from '@rollup/plugin-babel'
import vue from 'rollup-plugin-vue'

const commonConfig = {
  external: ['vue'],
  plugins: [
    vue(),
    typescript(),
    resolve({
      extensions: ['.ts', '.js', '.vue']
    }),
    postcss({}),
    commonjs(),
    babel({
      presets: ['@babel/preset-env'],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-syntax-object-rest-spread',
        [
          '@babel/plugin-transform-runtime',
          {
            absoluteRuntime: false,
            corejs: false,
            helpers: false,
            regenerator: true,
            useESModules: false
          }
        ]
      ],
      babelrc: false,
      extensions: ['.js', '.ts', '.tsx', '.jsx', '.vue']
    })
  ]
}

export default commonConfig
