<script>
    
    import {onMount} from 'svelte';
    import Konva from 'konva';
    
    let isMounted = false;

    $: if(isMounted) {

        console.log("--Konvelte--wrapper $$props: ", $$props);

    }

    onMount(()=>{

        console.log("onMount ([pathspec.svelte])");
        isMounted = true;

    })
    
    new Konva.Stage({
        container: $$props.stageConfig.container,
        width: $$props.stageConfig.width,
        height: $$props.stageConfig.height,
    })

</script>