import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';

export default {
    // ...
    input: {
        index: 'src/index.ts',
        comic: 'src/comic.ts'
    },
    output: {
        dir: 'dist',
        format: 'es',
        sourcemap: true
    },
    plugins: [
        typescript(),
        copy({
            targets: [
                {src: 'src/*.html', dest: 'dist'},
                {src: 'src/styles.css', dest: 'dist'}
            ]
        })
    ],

};