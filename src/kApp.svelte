<Stage props={$$props} container={null} width={1000} height={500} /><!-- Statically Enqueued Stage -->

<script>

    import svelte, {onMount} from 'svelte';
    import Stage from './kStage.svelte';

    // lexical variables
    let isMounted = false;
    
    // TIP : this is top-level useEffect-like reactive statement
    $: if (isMounted) {

        console.log("$$props at [pathspec].svelte: ", $$props.sharedTarget)// [PASSED]

    }

    onMount(()=>{
        
        isMounted = true;
        console.log("onMount at [pathspec].svelte");

        // - in case of onDestroy internal call, do (return) the following :
        return (()=>{
            console.log("onDestroy at [pathspec].svelte");
        })

    })

</script>

<style>
    
    @import './styles/index.css'; /* # DEV_NOTE: pathspec is relative from ./dist or any other directory wherein index.html should exist */
    
</style>

