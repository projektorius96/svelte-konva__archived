<script>
    
    import {onMount} from 'svelte';
    import Konva from 'konva';
    import {default as KonvektCircle} from './pseudo-components/KonvektShapeFactories.svelte'
    
    let isMounted = false;
    let stage, layer = [undefined, undefined];
    let KonvaCirclePrefix, KonvaCirclePrefixInstance = [undefined, undefined];

    $: if(isMounted) {

        console.log("$$props at Konvelte--stage: ", $$props.props);

    }

    $: if (stage && layer && KonvaCirclePrefix) {
        /* === */
        console.log("KonvaCirclePrefix?", KonvaCirclePrefix)
        KonvaCirclePrefixInstance = /* new  */KonvaCirclePrefix.KonvektCircle({
            props: {
                stage
            },
            x: 50,
            y: 50,
            radius: 60,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true,
        }) // as if ComponentRoot.ExportedNamedFunction.bind(ComponentRoot [defined:at^1]) 
        console.log("KonvaCirclePrefixInstance?", KonvaCirclePrefixInstance, stage, layer);
    }

    $: if (isMounted) {

    /* [at^1]: */KonvaCirclePrefix = new KonvektCircle({})
    }

    onMount(()=>{

        console.log("onMount ([pathspec.svelte])");
        isMounted = true;

    })

    stage = new Konva.Stage({
        container: /* 'container' */$$props.props.sharedTarget,
        width: 960,
        height: 480,
    });
    globalThis.KONVA_GLOBAL__STAGE = stage; // KONVA GLOBAL (DEBUGGING PURPOSES ONLY) : ON PROD SHOULD BE REMOVED

    layer = new Konva.Layer()
    stage.add(layer)

    requestAnimationFrame(()=>{
            layer.add(KonvaCirclePrefixInstance)
            layer.draw()
    })

    
    // new Konva.Stage({
    //     container: $$props.stageConfig.container,
    //     // width: $$props.stageConfig.width,
    //     // height: $$props.stageConfig.height,
    // })

</script>