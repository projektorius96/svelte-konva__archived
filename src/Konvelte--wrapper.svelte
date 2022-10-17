<!-- <SandBox /> -->
<!-- <Stage/> -->

<script>

    import svelte, {onMount} from 'svelte';
    // === TESTING COMPONENTS [START]:
        import SandBox from './tests/Konvelte--konva-core__sandbox.svelte';
    // === TESTING COMPONENTS [END]:
    import Stage from './pkgs/Konvelte--stage.svelte';
    let isMounted = false;
    let stageInstance = undefined;

    // NEXT_GOAL:
    // $: if (stageInstance) {
    //     /* stageInstance.add(layerInstance) */
    // }
    
    // TIP : this is top-level useEffect-like reactive statement
    $: if (isMounted) {

        console.log("--App $$props: ", $$props)
        // ===
            // new TestBox({
            //     target: $$props.sharedTarget,
            // });
        // ===
        stageInstance = new Stage({
            target: $$props.sharedTarget,
            props: {
                stageConfig: {
                    container: $$props.sharedTarget,
                    width: 960,
                    height: 480,
                }, 
            }
        })
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

