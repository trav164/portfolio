<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Skills from '$lib/Skills.svelte';
	import { currentPage } from '../page';

	currentPage.subscribe((value: string) => {
		if (!value) return;
		const el = document.querySelector(value);
		if (!el) return;

		el.scrollIntoView({
			block: 'center',
			behavior: 'smooth'
		});
	});
</script>

<main class="">
	<section id="home" class="">
		<Hero />
	</section>

	<section id="skills">
		<Skills />
	</section>

	<section id="projects">
		<h2>Projects</h2>
	</section>
</main>

<style>
	section {
		min-height: 100vh;
	}
</style>
