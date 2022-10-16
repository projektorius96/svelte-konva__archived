<script>
    
    import {onMount} from 'svelte';
    import Konva from 'konva';
    
    let isMounted = false;

    $: if(isMounted) {
        console.log("onMount ([pathspec.svelte])")
        console.log(stage)
    }

    onMount(()=>{
        isMounted = true;
    })
    
    var stage = new Konva.Stage({
        container: document.body
    })


</script>