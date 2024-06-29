import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.min.js',
      format: 'iife',
      name: 'IndexBundle'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      terser(),
      copy({
        targets: [
          { src: 'src/index.html', dest: 'dist' },
          { src: 'src/styles.css', dest: 'dist' }
        ]
      })
    ]
  },
  {
    input: 'src/comic.ts',
    output: {
      file: 'dist/comic.min.js',
      format: 'iife',
      name: 'ComicBundle'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      terser(),
      copy({
        targets: [
          { src: 'src/comic.html', dest: 'dist' }
        ]
      })
    ]
  }
];
