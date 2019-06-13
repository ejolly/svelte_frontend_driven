import App from './App.svelte';
import router from "./router";
require("./assets/main.scss");
const app = new App({
	target: document.body,
	props: {
		router
	}
});

window.app = app;

export default app;