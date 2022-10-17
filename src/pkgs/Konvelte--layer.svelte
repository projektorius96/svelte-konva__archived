<script>
    
    import {onMount} from 'svelte';
    import Konva from 'konva';
    
    let isMounted = false;

    $: if(isMounted) {

        console.log("--Konvelte--layer $$props: ", $$props);

    }

    onMount(()=>{

        console.log("onMount ([pathspec.svelte])");
        isMounted = true;

    })
    
    new Konva.Layer()

</script>