import kText from './kText.svelte';
import kLine from './kLine.svelte';
import kArrow from './kArrow.svelte';
import kCircle from './kCircle.svelte';
import kLayer from './kLayer.svelte';
import kStage from './kStage.svelte';
import kGroup from './kGroup.svelte';

export default (function SvelteKonva(){
    return {
        kText,
        kLine,
        kArrow,
        kCircle,
        kLayer,
        kStage,
        kGroup,
    }
}).call()