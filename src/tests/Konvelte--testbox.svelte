<script>
    
    import {onMount} from 'svelte';
    import Konva from 'konva';

    let isMounted;
    $: if (isMounted) {
            stage.setAttr('height', document.getElementById('root').clientHeight);
    } 

    onMount(()=>{
        console.log("onMount ([pathspec].svelte)");
        isMounted = true;
    })
    
    // create a stage
    var stage = new Konva.Stage({
        container: 'root',
        width: 960,
        height: 480,
    });
    globalThis.KONVA_GLOBAL__STAGE = stage // KONVA GLOBALS (DEBUGGING PURPOSES ONLY)
    var circle = new Konva.Circle({
        x: stage.getAttr('width') / 2,
        y: window.innerHeight / 2,
        radius: 60,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true,
        name: "circle"
    });

    var circle2 = new Konva.Circle({
        x: stage.getAttr('width') / 2,
        y: window.innerHeight / 2,
        radius: 30,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true,
        name: "circle"
    });

    var circle3 = new Konva.Circle({
        x: stage.getAttr('width') / 2,
        y: window.innerHeight / 2,
        radius: 15,
        fill: 'orange',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true,
        name: "circle"
    });

    // create a layer
    var layer = new Konva.Layer();

    // add some shapes to the layer
    layer.add(circle, circle2, circle3);

    // add the layer to the stage
    stage.add(layer);

</script>

