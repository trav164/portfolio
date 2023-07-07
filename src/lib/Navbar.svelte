<script lang="ts">
	import { currentPage } from '../page';

	const scrollToPage = (scrollTo: string) => {
		if (!scrollTo) return;
		currentPage.set(scrollTo);
	};
</script>

<div
	class="fixed flex w-full items-center justify-center gap-6 bg-slate-50 py-6 font-bricolage text-xl text-slate-600"
>
	<h1 class="text-black">{$currentPage}</h1>
	<a class="font-bold text-black" href="/" on:click|preventDefault={() => scrollToPage('#home')}
		>home</a
	>
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a href="#" on:click|preventDefault={() => scrollToPage('#skills')}>skills</a>
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a href="#" on:click|preventDefault={() => scrollToPage('#projects')}>projects</a>
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a href="#" on:click|preventDefault={() => scrollToPage('#about')}>about</a>
	<!-- svelte-ignore a11y-invalid-attribute -->
	<a href="#" on:click|preventDefault={() => scrollToPage('#contact')}>contact</a>
</div>
