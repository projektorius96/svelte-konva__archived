<!-- <TestBox /> -->

<script>

    import svelte, {onMount} from 'svelte';
    import TestBox from './tests/Konvelte--konva-core.svelte';

    let isMounted = false;
    $: if (isMounted) {
        // TIP : this is top-level useEffect-like reactive statement
        //  ===
        new TestBox({
            target: $$props.target,
        })
    }

    onMount(()=>{
        isMounted = true;
        console.log("onMount ([pathspec].svelte)");
        // ===
        // this would be returned on component being destroyed, this lets avoid explicit onDestroy() call , for more please refer to :
        // @https://stackoverflow.com/questions/62126621/how-to-call-destroy-on-a-component-from-inside-the-component
        return (()=>{
            console.log("onDestroy ([pathspec].svelte)");
        }) 
    })

</script>

<style>
    
    @import './styles/index.css';
    
</style>

