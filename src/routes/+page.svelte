<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import Projects from '$lib/Projects.svelte';
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

		// reset current page just in case you scroll it won't let you click back to the same section
		currentPage.set('');
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
		<Projects />
	</section>
</main>

<style>
	section {
		min-height: 100vh;
	}
</style>
