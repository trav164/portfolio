<script lang="ts">
	import Contact from '$lib/Contact.svelte';
	import Hero from '$lib/Hero.svelte';
	import Projects from '$lib/Projects.svelte';
	import Skills from '$lib/Skills.svelte';
	import { onMount } from 'svelte';
	import { currentPage } from '../page';

	currentPage.subscribe((value: string) => {
		// reset current page just in case you scroll it won't let you click back to the same section
		// currentPage.set('');
		if (!value) return;
		let el = document.querySelector(value);

		if (!el) return;

		el.scrollIntoView({
			block: 'center',
			behavior: 'smooth'
		});
	});

	onMount(() => {
		currentPage.set('#home');
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

	<section id="contact">
		<Contact />
	</section>
</main>

<style>
	section {
		min-height: 100vh;
		height: auto;
	}
</style>
