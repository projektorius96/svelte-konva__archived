<script>
    
    import {onMount} from 'svelte';
    import Konva from 'konva';
    import {default as KonvelteCircle} from './components/Konvelte--circle.svelte'
    import {KonvelteComponentRegister as Register} from './utils/KonvelteComponentRegister'
    
    let isMounted = false;
    let [stage, layer] = [undefined, undefined];
    let {_this} = Register(KonvelteCircle); let k = 10;

    $: if (isMounted) {

        stage = new Konva.Stage({
            container: /* 'container' */$$props.props.sharedTarget,
            width: 960,
            height: 480,
        });
        stage.setAttr('height', window.innerHeight); // # FIXES HEIGHT SCALING ISSUE
        globalThis.KONVA_GLOBAL__STAGE = stage; // KONVA GLOBAL (DEBUGGING PURPOSES ONLY)

        layer = new Konva.Layer();
        stage.add(layer);
        
        // A) SINGLE SHAPE (ONE CIRCLE) : DUE TO LIMITED APPLICABILITY I WILL REMOVE THIS CASE A) WITHIN NEXT COUPLE OF COMMITS
        // layer.add(_this.KonvelteCircle({
        //         x: stage.width() / 2,
        //         y: window.innerHeight / 2,
        //         radius: 120,
        //         fill: 'red',
        //         stroke: 'black',
        //         strokeWidth: 4,
        //         draggable: true,
        // }))
        
        // B) MULTIPLE K_TH-TUPLE OF SHAPES (i.e. CIRCLES)
        Array(k).fill(0).forEach((_, idx, _arr)=>{
            _arr[idx] = _this.KonvelteCircle({
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