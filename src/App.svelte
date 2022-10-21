
<Stage props={$$props}/> <!-- Stage Instance -->

<script>

    import svelte, {onMount} from 'svelte';
    import Stage from './pkgs/Konvelte--stage.svelte'

    let isMounted;
    
    // TIP : this is top-level useEffect-like reactive statement
    $: if (isMounted) {

        console.log("--App $$props: ", $$props)

    }

    onMount(()=>{
        
        isMounted = true;
        console.log("onMount ([pathspec].svelte)");
        
        // - in case of onDestroy internal call, do (return) the following :
        return (()=>{
            console.log("onDestroy ([pathspec].svelte)");
        })

    })

</script>

<style>
    
    @import './styles/index.css';
    
</style>

