import App from './App.svelte';

// @https://svelte.dev/docs#run-time-custom-element-api
const container = document.querySelector('#container')
const app = new App({
    target: container,
    props: {
        sharedTarget: container,
    }
});

export default app;