<script>
import Konva from 'konva';
export function KonvektCircle(options){
    /* console.log("OPTIONS", options) */ // [PASSED]
    console.log("props", $$props) // [PASSED]
    const {
        x,
        y,
        radius,
        fill,
        stroke,
        strokeWidth,
        draggable,
    } = options;
    let shapeInstance = new Konva.Shape({
            x,
            y,
            radius,
            fill,
            stroke,
            strokeWidth,
            draggable,
            // name: "circle" // # should reflect function's name
    })
    
    // shapeInstance.parent.children.push(shapeInstance)
    // shapeInstance.parent.draw()

    return shapeInstance;
}
</script>