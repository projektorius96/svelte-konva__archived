<script>
    import {Text} from 'konva/lib/shapes/Text';
    export function kText(options){
        const {
            x,
            y,
            text,
            fontSize,
            fontFamily,
            fill,
            width,
            padding,
            align,
            /* DEV_NOTE: more Konva.Arrow params could be added on-demand */
        } = options;
        let txtInstance = new /* Konva. */Text({
            x,
            y,
            text,
            fontSize,
            fontFamily,
            fill,
            width,
            padding,
            align,
            name: "text" /* # DEV_NOTE: should reflect callee.name */
        })
        
        return txtInstance;
    }
    </script>