import App from './App.svelte';

// @https://svelte.dev/docs#run-time-custom-element-api
const app = new App({
    target: document.querySelector('#container'),
});

export default app;