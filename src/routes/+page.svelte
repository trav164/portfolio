<script lang="ts">
	import Hero from '$lib/Hero.svelte';
	import { currentPage } from '../page';

	currentPage.subscribe((value) => {
		if (!value) return;
		const el = document.querySelector(value);
		if (!el) return;
		el.scrollIntoView({
			block: 'start',
			behavior: 'smooth'
		});
	});
</script>

<main class="">
	<section id="home" class="mt-48">
		<Hero />
	</section>

	<section id="skills">
		<h2>Skills</h2>
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
