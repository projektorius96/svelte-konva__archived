<Stage props={$$props} width={1000} height={500} /><!-- Register the Stage -->

<script>

    import svelte, {onMount} from 'svelte';
    import Stage from './kStage.svelte'

    // lexical variables
    let isMounted;
    
    // TIP : this is top-level useEffect-like reactive statement
    $: if (isMounted) {

        console.log("--KonvelteApp $$props: ", $$props)

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
    
    @import './styles/index.css';
    
</style>

