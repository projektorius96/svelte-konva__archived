<script>
    
    import {onMount} from 'svelte';
    import Konva from 'konva';
    import {default as KonvektCircle} from './pseudo-components/KonvektShapeFactories.svelte'
    
    let isMounted = false;
    let stage, layer = [undefined, undefined];
    let KonvaCirclePrefix, KonvaCirclePrefixInstance = [undefined, undefined];

    $: if(isMounted) {

        /* console.log("$$props at Konvelte--stage: ", $$props); */

    }

    $: if (/* stage && layer &&  */KonvaCirclePrefix) {
        /* === */
        console.log("KonvaCirclePrefix?", KonvaCirclePrefix)
        KonvaCirclePrefixInstance = new KonvaCirclePrefix.KonvektCircle(KonvaCirclePrefix) // as if ComponentRoot.ExportedNamedFunction.bind(ComponentRoot [defined:at^1]) 
        console.log("KonvaCirclePrefixInstance?", KonvaCirclePrefixInstance);
    }

    $: if (isMounted) {

    stage = new Konva.Stage({
        container: 'container',
        width: 960,
        height: 480,
    });

    layer = new Konva.Layer()

    globalThis.KONVA_GLOBAL__STAGE = stage; // KONVA GLOBAL (DEBUGGING PURPOSES ONLY) : ON PROD SHOULD BE REMOVED
        
    /* [at^1]: */KonvaCirclePrefix = new KonvektCircle({
            x: stage.getAttr('width') / 2,
            y: window.innerHeight / 2,
            radius: 60,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true,
        }, stage /* === set as KONVA_GLOBAL__STAGE within KonvektShapeFactories.svelte exported function */)
    }

    onMount(()=>{

        console.log("onMount ([pathspec.svelte])");
        isMounted = true;

    })
    
    // new Konva.Stage({
    //     container: $$props.stageConfig.container,
    //     // width: $$props.stageConfig.width,
    //     // height: $$props.stageConfig.height,
    // })

</script>