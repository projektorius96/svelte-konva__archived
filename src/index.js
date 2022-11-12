import App from './App.svelte';

// @https://svelte.dev/docs#run-time-custom-element-api
const sharedTarget = document.querySelector('#container')
const app = new App({
    target: document.querySelector('#container'),
    props: {
        sharedTarget,
    }
});

export default app;