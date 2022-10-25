<script>
  import { onMount } from 'svelte'
	import { token, info } from './stores'
	import Router, { push } from 'svelte-spa-router';
	import routes from './routes';
  import { get } from 'svelte/store'

	onMount(() => {
		$token = localStorage.getItem('userToken')
		$info = localStorage.getItem('userInfo')
		if ($token) {
			push('/home')
		} else {
			push('/login')
		}
	})

</script>

<main>
	<div style="width: var(--container); margin-left: calc(calc(100% - var(--container)) / 2);">
		<Router {routes} />
	</div>
</main>

<style>
	:root {
		--magenta: #EF39A8;

		--sans-serif: sans-serif;
		--serif: Times;

		--container: 100%;
	}

	@media screen and (min-width: 576px) {
		:root {
			--container: 70%;
		}
	}

	@media screen and (min-width: 768px) {
		:root {
			--container: 60%;
		}
	}

	@media screen and (min-width: 992px) {
		:root {
			--container: 50%;
		}
	}
</style>