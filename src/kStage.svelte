<script>
    
    import {onMount} from 'svelte';
    import {Stage} from 'konva/lib/Stage';
    import {default as Circle} from './components/kCircle.svelte';
    import {default as Layer} from './components/kLayer.svelte';
    import {KonvelteComponentEnqueuer as Enqueuer} from './utils/KonvelteComponentRegister';
    
    // lexical props
    export let width = null;
    export let height = null;
    
    // lexical variables
    let isMounted = false;
    let stage = undefined;
    let k = 10; // KTH-tuple of Konva.Shape(s)

    // lexical Registers
    let LayerInstance1 = Enqueuer(Layer);
    $: if(stage && LayerInstance1) {

        stage.add(LayerInstance1);

        Array(k).fill(0).forEach((_, idx, _arr)=>{
            
            _arr[idx] = Enqueuer(Circle, {
                x: stage.width() / 2,
                y: window.innerHeight / 2,
                radius: 120,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4,
                draggable: true,
            })
            if (idx == _arr.length - 1) {
                LayerInstance1.add(..._arr)
            }

        })

        globalThis.LayerInstance1 = LayerInstance1; /* <= DEBUGGING PURPOSE ONLY *//* LayerInstance1.destroy() */// [PASSED]

    }

    $: if (isMounted) {

        stage = new /* Konva. */Stage({
            container: $$props.props.sharedTarget,
            width: width || 960,
            height: height || 480,
        });
        stage.setAttr('height', window.innerHeight); // # FIXES HEIGHT SCALING ISSUE
        
        /* globalThis.KONVA_GLOBAL__STAGE = stage; */ // KONVA GLOBAL (DEBUGGING PURPOSES ONLY)

    }

    onMount(()=>{

        console.log("$$props.props at [pathspec].svelte", $$props.props);
        console.log("onMount at [pathspec].svelte");
        isMounted = true;

    })

</script>