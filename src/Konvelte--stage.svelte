<script>
    
    import {onMount} from 'svelte';
    import Konva from 'konva';
    import {default as KonvelteCircle} from './components/Konvelte--circle.svelte'
    
    let isMounted = false;
    let stage, layer = [undefined, undefined];
    let KonvelteComponentRegister, KonvelteComponentRegisterInstance = [undefined, undefined];

    $: if(isMounted) {

        console.log("--Konvelte--stage dependent $$props.props: ", $$props.props);

    }

    $: if (stage && layer && KonvelteComponentRegister) {

        console.log("stage && layer && KonvelteComponentRegister?", stage, layer, KonvelteComponentRegister)
        
    }

    $: if (isMounted) {
    
        KonvelteComponentRegister = new KonvelteCircle(/* {
            target: $$props.props.sharedTarget,
        }*//* : just pass empty object to inherit target property from the parent */ {}); // register Konvelte component 1/2) step
        KonvelteComponentRegisterInstance = KonvelteComponentRegister.KonvelteCircle({
            /*  
            
            props: {
                stage // pass the stage via dedicated props attribute as if <KonvelteCircle props={stage} />
            }, 
            
            */
                x: stage.width() / 2,
                y: window.innerHeight / 2,
                radius: 120,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4,
                draggable: true,
        }) // enqueue the Konvelte component 2/2) step
        
        // CRUCIAL BLOCK : PLEASE DO NOT FORGET TO INVOKE requestAnimationFrame as follows 
        requestAnimationFrame(()=>{
            layer.add(KonvelteComponentRegisterInstance)
            layer.draw()
        })

        stage.setAttr('height', window.innerHeight); // # FIXES HEIGHT SCALING
    
    }

    onMount(()=>{

        console.log("onMount ([pathspec].svelte)");
        isMounted = true;

    })

    stage = new Konva.Stage({
        container: /* 'container' */$$props.props.sharedTarget,
        width: 960,
        height: 480,
    });
    globalThis.KONVA_GLOBAL__STAGE = stage; // KONVA GLOBAL (DEBUGGING PURPOSES ONLY) : ON PROD SHOULD BE REMOVED

    layer = new Konva.Layer();
    stage.add(layer);

</script>