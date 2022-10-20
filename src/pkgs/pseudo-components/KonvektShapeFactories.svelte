<script>
import Konva from 'konva';
export function KonvektCircle(options, stageRef = KONVA_GLOBAL__STAGE){
    /* console.log("OPTIONS", options) */ // [PASSED]
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
    shapeInstance.parent = stageRef.getLayers()[0];
    // return (
    //     new Konva.Shape({
    //     x,
    //     y,
    //     radius,
    //     fill,
    //     stroke,
    //     strokeWidth,
    //     draggable,
    //     // name: "circle" // # should reflect function's name
    //     })
    // );

    return shapeInstance;
}
</script>