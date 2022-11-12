<script>
import {Arrow} from 'konva/lib/shapes/Arrow';
export function kArrow(options){
    const {
        x,
        y,
        points,
        pointerLength,
        pointerWidth,
        fill,
        stroke,
        strokeWidth,
        draggable,
        /* DEV_NOTE: more Konva.Arrow params could be added on-demand */
    } = options;
    let shapeInstance = new /* Konva. */Arrow({
        x,
        y,
        points,
        pointerLength,
        pointerWidth,
        fill,
        stroke,
        strokeWidth,
        draggable,
        name: "arrow" /* # DEV_NOTE: should reflect callee.name */
    })
    
    return shapeInstance;
}
</script>