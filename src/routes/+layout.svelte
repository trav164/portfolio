<script>
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { initFlash } from 'sveltekit-flash-message/client';
	import { page } from '$app/stores';
	import toast, { Toaster } from 'svelte-french-toast';
	import Navbar from '$lib/Navbar.svelte';
	import Hero from '$lib/Hero.svelte';

	inject({ mode: dev ? 'development' : 'production' });
	const flash = initFlash(page);

	$: if ($flash) {
		switch ($flash.type) {
			case 'success':
				toast.success($flash.message);
				break;
			case 'error':
				toast.error($flash.message);
				break;
		}

		$flash = undefined;
	}
</script>

<Toaster />
<Navbar />
<div class="mx-auto flex w-96 flex-col gap-12 p-6 sm:w-[600px]">
	<slot />
</div>
