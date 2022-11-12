<script>
import {Line} from 'konva/lib/shapes/Line';
export function kLine(options){
    const {
        x,
        y,
        points,
        stroke,
        strokeWidth,
        lineCap,
        lineJoin,
        /* DEV_NOTE: more Konva.Line params could be added on-demand */
    } = options;
    let shapeInstance = new /* Konva. */Line({
        x,
        y,
        points,
        stroke,
        strokeWidth,
        lineCap,
        lineJoin,
        name: "line" /* # DEV_NOTE: should reflect callee.name */
    })
    
    return shapeInstance;
}
</script>