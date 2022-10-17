import App from './Konvelte--wrapper.svelte';

// @https://svelte.dev/docs#run-time-custom-element-api
const container = document.querySelector('#root')
const app = new App({
    target: container,
    props: {
        sharedTarget: container,
    }
});

export default app;