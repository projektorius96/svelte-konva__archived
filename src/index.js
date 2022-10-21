import Konvelte from './Konvelte--app.svelte';

// @https://svelte.dev/docs#run-time-custom-element-api
const container = document.querySelector('#container')
const svelte_konva = new Konvelte({
    target: container,
    props: {
        sharedTarget: container,
    }
});

export default svelte_konva;