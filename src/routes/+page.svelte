<script lang="ts">
	import Contact from '$lib/Contact.svelte';
	import Hero from '$lib/Hero.svelte';
	import Projects from '$lib/Projects.svelte';
	import Skills from '$lib/Skills.svelte';
	import { onMount } from 'svelte';
	import { currentPage } from '../page';
	import Timeline from '$lib/Timeline.svelte';

	currentPage.subscribe((value: string) => {
		// reset current page just in case you scroll it won't let you click back to the same section
		// currentPage.set('');
		if (!value) return;
		let el = document.querySelector(value);

		if (!el) return;

		let position: ScrollLogicalPosition = 'start';

		if (window.innerWidth < 800) {
			position = 'start';
		}

		el.scrollIntoView({
			block: position,
			behavior: 'smooth'
		});
	});

	onMount(() => {
		currentPage.set('#home');
	});
</script>

<svelte:head>
	<link href="https://fonts.cdnfonts.com/css/bricolage-grotesque" rel="stylesheet" />
</svelte:head>

<div
	class="snap flex h-screen w-screen snap-y snap-mandatory flex-col overflow-scroll overflow-x-hidden scroll-smooth"
>
	<div class="mx-auto flex w-80 flex-col gap-12 p-6 md:w-[700px]">
		<section id="home" class="flex h-screen snap-start items-center justify-center pt-36">
			<Hero />
		</section>

		<section id="skills" class="flex h-screen snap-start items-center justify-center">
			<Skills />
		</section>

		<section id="timeline" class="flex h-screen snap-start items-center justify-center">
			<Timeline />
		</section>

		<section id="projects" class="flex h-screen snap-start items-center justify-center">
			<Projects />
		</section>

		<section id="contact" class="flex h-screen snap-start items-center justify-center">
			<Contact />
		</section>

		<!-- <section id="skills" class="flex h-screen snap-start items-center justify-center bg-blue-500">
			<div class="p-6 text-9xl">2</div>
		</section> -->
	</div>
</div>

<!-- <main class="flex flex-col space-y-96 md:space-y-0">
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
	}
</style> -->
