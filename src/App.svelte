<script>
    import {onMount} from 'svelte'
    /* import {default as svelte_konva} from 'svelte-konva'; *//* <= when it is NPM LINKed we would use this instead ; [^1] */
    import {default as svelte_konva} from './_index.js'; /* as if from 'svelte-konva' *//* [^1] */
    const {SvelteKonva: {kStage, kLayer, kText}, ComponentLinker} = svelte_konva;

    // constants
    const verticalScrollbarWidth = (document.body.clientWidth - window.innerWidth);
    const fullViewportWidth = (document.body.clientWidth - verticalScrollbarWidth);
    const fullViewportHeight = window.innerHeight;

    // local variables
    let stage = undefined;
    let layer = undefined;
    let textShape = undefined;

    $: if (stage && layer && textShape) {
        console.log("stage=?", stage)
        console.log("layer=?", layer)
        stage.setAttr('height', fullViewportHeight); // # FIXES HEIGHT SCALING ISSUE
        stage.setAttr('width', fullViewportWidth); // # MAKES SURE VIEWPORT WIDTH EXCLUDES VERTICAL SCROLLBAR WIDTH
        stage.add(layer.add(textShape))
    }
    
    onMount(()=>{
        stage = /* temp */ComponentLinker(kStage, $$props.sharedTarget, {
            container: $$props.sharedTarget || document.body,
            width: 960,
            height: 480,
        })
        layer = ComponentLinker(kLayer, $$props.sharedTarget, {})
        textShape = ComponentLinker(kText, $$props.sharedTarget, {
            x: fullViewportWidth / 2 * 0.75,
            y: fullViewportHeight / 2,
            text: "SVELTE-KONVA",
            fontSize: 64,
            fontFamily: 'Calibri',
            fill: 'red',
            width: 400,
            padding: 0,
            align: 'center',
        })
    })

</script>

<style>
    /* @import '../dist/styles/index.css' */
</style>