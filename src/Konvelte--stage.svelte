<script>
    
    import {onMount} from 'svelte';
    import Konva from 'konva';
    import {default as KonvelteCircle} from './components/Konvelte--circle.svelte'
    
    let isMounted = false;
    let k = 10;
    let [stage, layer] = [undefined, undefined];
    let [KonvelteComponentRegister, KonvelteComponentRegisterInstance] = [undefined, Array(k).fill(0)];

    $: if(isMounted) {

        console.log("--Konvelte--stage dependent $$props.props: ", $$props.props);

    }

    $: if (stage && layer && KonvelteComponentRegister) {

        console.log("stage && layer && KonvelteComponentRegister?", stage, layer, KonvelteComponentRegister)
        
    }

    $: if (isMounted) {
    
        KonvelteComponentRegister = new KonvelteCircle(/* {
            target: $$props.props.sharedTarget,
        }*//* NOTE : instead, just pass empty object to inherit target property from the parent, i.e.: */{}); // 1/4) register Konvelte component step  
        KonvelteComponentRegisterInstance.forEach((val, idx, _arr)=>{
            _arr[idx] = new KonvelteComponentRegister.KonvelteCircle({
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
            }) // 2/4) enqueue the Konvelte component
            layer.add(_arr[idx])
        })
        
        // ANNOT : THIS MAY BE REMOVED WITHIN A COUPLE OF UPCOMING COMMITS 
        // // CRUCIAL_LINE : PLEASE DO NOT FORGET TO INVOKE requestAnimationFrame : 
        // requestAnimationFrame(()=>{
        //     /* layer.add(KonvelteComponentRegisterInstance) */// 3/4)
        //     /* layer.draw() */ 4/4)
        // })

        stage.setAttr('height', window.innerHeight); // # FIXES HEIGHT SCALING ISSUE
    
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
    globalThis.KONVA_GLOBAL__STAGE = stage; // KONVA GLOBAL (DEBUGGING PURPOSES ONLY)

    layer = new Konva.Layer();
    stage.add(layer);

</script>