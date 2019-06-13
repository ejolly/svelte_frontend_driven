<script>
import { onMount } from 'svelte'
export let router
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
