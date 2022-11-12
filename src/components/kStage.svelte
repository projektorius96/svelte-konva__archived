<script>
import {Stage}from 'konva/lib/Stage';
export function kStage(options){
    const {
        container,
        width,
        height,
    } = options;
    let stageInstance = new /* Konva. */Stage({
        container,
        width,
        height,
    })
    return stageInstance;
}
</script>