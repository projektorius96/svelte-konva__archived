<script>
    import {Group} from 'konva/lib/Group';
    export function kGroup(options){
        const {
        id,
        draggable,
        /* DEV_NOTE: more Konva.Arrow params could be added on-demand */
    } = options;
    let groupInstance = new /* Konva. */Group({
        id,
        draggable,
        /* # DEV_NOTE: should reflect callee.name */
    })
    
    return groupInstance;

    }
</script>