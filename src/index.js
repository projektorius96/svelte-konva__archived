import App from './kApp.svelte';

// For more : @https://svelte.dev/docs#run-time-custom-element-api
const container = document.querySelector('#container')
const SvelteKonva = new App({
    target: container,
    props: {
        sharedTarget: container,
    }
});

export default SvelteKonva;