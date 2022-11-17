import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
    
export default {
        input: 'src/index.js',
        output: [
            { 
                file: './dist/svelte-konva-linked/index.js',
                format: 'esm' 
            },
        ],
        plugins: [
            svelte(),
            resolve()
        ],
};