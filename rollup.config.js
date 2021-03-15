import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import execute from 'rollup-plugin-execute'
import { scss } from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    file: 'build/render.js',
  },
  plugins: [
    svelte({
      preprocess: [scss()],
      compilerOptions: {
        immutable: true,
        hydratable: true,
        generate: 'ssr',
      }
    }),
    css({ output: false }),
    resolve(),
    !production && execute('node build/render.js'),
  ]
};
