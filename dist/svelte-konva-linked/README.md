## Some explanation of linking process:
    
    === ./svelte-konva-linked === is technically a temporary directory which is defined within rollup.config.mjs (_unless would change in the future_) : once rolluped (bundled) the directory./svelte-konva-linked should contain === index.js === as the output of the aforementioned rollup.config.mjs process via invoked command :
    
``` -c ./rollup.config.mjs # it considers the command was invoked at root of the library , in this case, svelte-konva```

    the NPM LINKed <name> parameter name corresponds to name property value on package.json , in this case, defined within === ./svelte-konva-linked === directory

## NPM LINK yourself (steps-to-follow):

> DEV_NOTE: as the library (i.e. svelte-konva) itself is far away from wrapping all Konva.js features, I do share this manual linking recipe, as I see no reason to publish this "production-NOT-ready" library to public npmjs registery whatsoever ...

1.0) `cd svelte-konva && rollup -c ./rollup.config.mjs` # ready-to-use config itself is shared within the branch <br>
2.0) `cd ./svelte-konva-linked && npm link` : name.value is automatically taken from ./package.json –> same value will be used importing e.g. `import SvelteKonva from '<name.value>'` ; <br> 
3.1) `cd ../ # to get back to root i.e. svelte-konva (or your project root pathspec) ` <br>
3.2) `npm link <name.value>` <br>
5) `npm run dev:serv` (_unless customized otherwise within root package.json)