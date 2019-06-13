<script>
import { onMount } from 'svelte'
export let router
// Adding !!svelte-loader! prefix to the import until svelte-easyroute-webpack issues a fix. Otherwise we have to remove exclude: /node_modules from webpack.config.js to get svelte compilation working
import RouterLink from '!!svelte-loader!svelte-easyroute-webpack/RouterLink.svelte'

onMount(()=> {
	router.createOutlet()
})
</script>

<style>
</style>

<div id="router-outlet">
	<RouterLink to="/" text={"Home"} />
	<RouterLink to="/about" text={"About"} />
</div>
