<script>
  import { onMount } from 'svelte'
	import { token, info } from './stores'
	import Router, { push } from 'svelte-spa-router';
	import routes from './routes';
  import { get } from 'svelte/store'

	onMount(() => {
		$token = localStorage.getItem('userToken')
		$info = localStorage.getItem('userInfo')
		console.log(get(token))
		console.log(get(info))
		if ($token) {
			push('/new')
		} else {
			push('/login')
		}
	})

</script>

<main>
	<Router {routes} />
</main>
