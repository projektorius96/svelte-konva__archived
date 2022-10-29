<script>
import {Circle}from 'konva/lib/shapes/Circle';
export function kCircle(options){
    const {
        x,
        y,
        radius,
        fill,
        stroke,
        strokeWidth,
        draggable,
    } = options;
    let shapeInstance = new /* Konva. */Circle({
            x,
            y,
            radius,
            fill,
            stroke,
            strokeWidth,
            draggable,
            name: "circle" /* # DEV_NOTE: should reflect callee.name */
    })
    
    return shapeInstance;
}
</script>