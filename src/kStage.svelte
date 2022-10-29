<script>
    
    import {onMount} from 'svelte';
    import {Stage} from 'konva/lib/Stage';
    import {default as kCircle} from './components/kCircle.svelte';
    import {default as kLayer} from './components/kLayer.svelte';
    import {KonvelteComponentEnqueuer as Enqueuer} from './utils/KonvelteComponentRegister';
    
    // constants
    const verticalScrollbarWidth = (document.body.clientWidth - window.innerWidth);
    const fullViewportWidth = (document.body.clientWidth - verticalScrollbarWidth);
    const fullViewportHeight = window.innerHeight;
    
    // lexical props
    export let width = undefined;
    export let height = undefined;
    export let container = null;
    
    // lexical variables
    let isMounted = false;
    let theStage = undefined;
    let k = 10; // KTH-tuple of Konva.Shape(s)

    // lexical Registers
    let LayerInstance1 = Enqueuer(kLayer);
    globalThis.LayerInstance1 = LayerInstance1;/* <= (DEBUGGING PURPOSES ONLY) *//* LayerInstance1.destroy() */// [PASSED]
    $: if(theStage && LayerInstance1) {

    // JS_native_label_signatureCOLON
    LayerInstance1: 
    (        theStage.add(LayerInstance1) && Array(k).fill(0).forEach((_, idx, _arr)=>{
            
            _arr[idx] = Enqueuer(kCircle, {
                x: theStage.width() / 2,
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

    // ===

    LayerInstanceXth: 
    (        
        true && true /* <= Your SvelteKonva (Konvelte) custom logic goes herein..; 
        please refer to LayerInstance1 as for an example how to register (enqueue) components..;
        
        === TIP: Registering (Enqueueing) is recommended as it makes codebase less verbose ! 

                            \m.m/ ENJOY THE CODING WITH SVELTE&KONVA \m.m/

        */
    )

    // ===

    }

    $: if (isMounted && Stage) {

        theStage = new /* Konva. */Stage({
            container: $$props.props.sharedTarget || container || document.body,
            width: width /* <= from props */ || 960 /* <= DEFAULTS */,
            height: height /* <= from props */ || 480 /* <= DEFAULTS */,
        });
        theStage.setAttr('height', fullViewportHeight); // # FIXES HEIGHT SCALING ISSUE
        theStage.setAttr('width', fullViewportWidth); // # MAKES SURE VIEWPORT WIDTH EXCLUDES VERTICAL SCROLLBAR WIDTH
        /* globalThis.KONVA_GLOBAL__STAGE = theStage; *//* <= (DEBUGGING PURPOSES ONLY) *//* KONVA_GLOBAL__STAGE.getLayers() */// [PASSED]

    }

    onMount(()=>{

        console.log("$$props.props at [pathspec].svelte", $$props.props.sharedTarget);
        console.log("onMount at [pathspec].svelte");
        isMounted = true;

    })

</script>