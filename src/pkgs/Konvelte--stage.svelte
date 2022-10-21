<script>
    
    import {onMount} from 'svelte';
    import Konva from 'konva';
    import {default as KonvelteCircle} from './components/Konvelte--circle.svelte'
    
    let isMounted = false;
    let stage, layer = [undefined, undefined];
    let KonvaCirclePrefix, KonvaCirclePrefixInstance = [undefined, undefined];

    $: if(isMounted) {

        console.log("--Konvelte--stage $$props: ", $$props.props);

    }

    $: if (stage && layer && KonvaCirclePrefix) {
        
        console.log("KonvaCirclePrefix?", KonvaCirclePrefix)
        
        KonvaCirclePrefixInstance = KonvaCirclePrefix.KonvelteCircle({
            props: {
                stage
            },
                x: stage.width() / 2,
                y: window.innerHeight / 2,
                radius: 120,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4,
                draggable: true,
        })
        console.log("KonvaCirclePrefixInstance?, stage, layer", KonvaCirclePrefixInstance, stage, layer);
        
        // CRUCIAL BLOCK : PLEASE DO NOT FORGET TO INVOKE requestAnimationFrame as follows 
        requestAnimationFrame(()=>{
            layer.add(KonvaCirclePrefixInstance)
            layer.draw()
        })
        
    }

    $: if (isMounted) {
    
        KonvaCirclePrefix = new KonvelteCircle({})

        stage.setAttr('height', window.innerHeight); // # FIXES HEIGHT SCALING
    
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

</script>