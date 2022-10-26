<script>
    
    import {onMount} from 'svelte';
    import {Stage} from 'konva/lib/Stage';
    import {default as kCircle} from './components/kCircle.svelte';
    import {default as kLayer} from './components/kLayer.svelte';
    import {KonvelteComponentEnqueuer as Enqueuer} from './utils/KonvelteComponentRegister';
    
    // lexical props
    export let width = null;
    export let height = null;
    
    // lexical variables
    let isMounted = false;
    let stage = undefined;
    let k = 10; // KTH-tuple of Konva.Shape(s)

    // lexical Registers
    let LayerInstance1 = Enqueuer(kLayer);
    globalThis.LayerInstance1 = LayerInstance1; /* <= (DEBUGGING PURPOSES ONLY) *//* LayerInstance1.destroy() */// [PASSED]
    $: if(stage && LayerInstance1) {

    LayerInstance1: 
    (        stage.add(LayerInstance1) && Array(k).fill(0).forEach((_, idx, _arr)=>{
            
            _arr[idx] = Enqueuer(kCircle, {
                x: stage.width() / 2,
                y: window.innerHeight / 2,
                radius: 120,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4,
                draggable: true,
            })
                // at the very last index (idx) provide me with completely filled up array (_arr)
                if (idx == _arr.length - 1) {
                    LayerInstance1.add(..._arr);
                }
        })
        
    )

    }

    $: if (isMounted) {

        stage = new /* Konva. */Stage({
            container: $$props.props.sharedTarget,
            width: width || 960,
            height: height || 480,
        });
        stage.setAttr('height', window.innerHeight); // # FIXES HEIGHT SCALING ISSUE
        
        /* globalThis.KONVA_GLOBAL__STAGE = stage; *//* <= (DEBUGGING PURPOSES ONLY) *//* KONVA_GLOBAL__STAGE.getLayers() */// [PASSED]

    }

    onMount(()=>{

        console.log("$$props.props at [pathspec].svelte", $$props.props);
        console.log("onMount at [pathspec].svelte");
        isMounted = true;

    })

</script>