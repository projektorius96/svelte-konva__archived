import App from './Konvelte-wrapper.svelte';

// @https://svelte.dev/docs#run-time-custom-element-api
const app = new App({
    target: document.querySelector('#root'),
});

export default app;