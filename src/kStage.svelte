<script>
    
    import {onMount} from 'svelte';
    import Konva from 'konva';
    import {default as Circle} from './components/kCircle.svelte';
    import {default as Layer} from './components/kLayer.svelte';
    import {KonvelteComponentRegister as Register, KonvelteComponentEnqueuer as Enqueuer} from './utils/KonvelteComponentRegister';
    
    // lexical props
    export let width = null;
    export let height = null;
    
    // lexical variables
    let isMounted = false;
    let [stage, layer] = [undefined, undefined];
    
    // lexical Registers
    let CircleInstance0 = Register(Circle); let k = 10;
    let LayerInstance0 = Register(Layer);

    $: if (isMounted) {

        stage = new Konva.Stage({
            container: $$props.props.sharedTarget,
            width: width || 960,
            height: height || 480,
        });
        stage.setAttr('height', window.innerHeight); // # FIXES HEIGHT SCALING ISSUE
        
        /* globalThis.KONVA_GLOBAL__STAGE = stage; */ // KONVA GLOBAL (DEBUGGING PURPOSES ONLY)

        layer = LayerInstance0.Layer()
        stage.add(layer);
        
        Array(k).fill(0).forEach((_, idx, _arr)=>{
            _arr[idx] = CircleInstance0.Circle({
                x: stage.width() / 2,
                y: window.innerHeight / 2,
                radius: 120,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4,
                draggable: true,
            })
            if (idx == _arr.length - 1) {
                layer.add(..._arr)
            }
        })
    
    }

    onMount(()=>{

        /* console.log("What are --Konvelte--stage dependent $$props.props?", $$props.props); */
        console.log("onMount ([pathspec].svelte)");
        isMounted = true;

    })

</script>