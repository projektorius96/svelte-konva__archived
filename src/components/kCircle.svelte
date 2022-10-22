<script>
import Konva from 'konva';
export function Circle(options){
    /* console.log("OPTIONS", options) */ // [PASSED]
    /* console.log("props", $$props) */ // [PASSED]
    const {
        x,
        y,
        radius,
        fill,
        stroke,
        strokeWidth,
        draggable,
    } = options;
    let shapeInstance = new Konva.Circle({
            x,
            y,
            radius,
            fill,
            stroke,
            strokeWidth,
            draggable,
            // name: "circle" // # should reflect function's name
    })
    
    return shapeInstance;
}
</script>