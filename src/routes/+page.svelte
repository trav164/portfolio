<script lang="ts">
	import { onMount } from 'svelte';
	import { annotate, annotationGroup } from 'rough-notation';
	import avatar from '$lib/images/avatar.svg';
	import Projects from '$lib/projects.svelte';
	import type { PageData } from './$types';
	import Timeline from '$lib/timeline.svelte';
	import Skills from '$lib/skills.svelte';

	export let data: PageData;

	onMount(() => {
		const lewis = annotate(document.querySelector('#lewis'), {
			type: 'highlight',
			color: '#D9FF72',
			multiline: false,
			padding: 25
		});

		const avatar = annotate(document.querySelector('#avatar'), {
			type: 'bracket',
			color: '#D0BFFF',
			padding: 25
		});

		const softwareDeveloper = annotate(document.querySelector('#softwareDeveloper'), {
			type: 'highlight',
			color: '#D0BFFF'
		});

		const delivering = annotate(document.querySelector('#delivering'), {
			type: 'underline',
			color: '#FF7293'
		});

		const ag = annotationGroup([lewis, avatar, softwareDeveloper, delivering]);
		ag.show();
	});
</script>

<svelte:head>
	<title>Lewis Travis - Home</title>
	<meta
		name="description"
		content="A simple portfolio to learn new skills and expand my knowledge as a software developer."
	/>
</svelte:head>

<section class="flex flex-col-reverse md:flex-row justify-center gap-8 mt-24">
	<!-- INTRO -->
	<div class="flex flex-col w-full gap-8">
		<h1 class="font-bold text-5xl leading-relaxed">Hi! I'm <span id="lewis">Lewis.</span></h1>

		<p class="tracking-wider leading-relaxed text-xl -mt-4">
			I've created this simple portfolio to learn new skills and expand my knowledge as a <span
				id="softwareDeveloper">software developer</span
			>. I'm always keen to learn new technology and enjoy working in customer-oriented environments
			<span id="delivering">delivering</span> products from start to finish.
		</p>

		<div class="w-full items-center justify-center md:justify-start flex gap-4 md:mt-4 mt-8">
			<a
				class="bg-black text-gray-100 outline outline-2 outline-black px-8 py-4 rounded font-semibold text-sm hover:bg-zinc-800"
				href="https://www.linkedin.com/in/lewis-travis-43656ab5/"
				aria-label="linkedin">LinkedIn</a
			>
			<a
				class="outline outline-2 outline-gray-300 font-semibold text-sm rounded px-8 py-4 hover:bg-gray-200"
				href="https://github.com/trav164"
				aria-label="linkedin">Github</a
			>
		</div>
	</div>

	<!-- AVATAR -->
	<div class="mx-auto">
		<img id="avatar" class="md:h-96 md:w-96 hover:-rotate-6" alt="avatar" src={avatar} />
	</div>
</section>

<!-- PROJECTS -->
<section>
	<div class="flex flex-col gap-6">
		<h3 class="text-3xl font-semibold">Projects</h3>
		<p class="-mt-4 text-gray-500 italic">Just a few little side projects to keep me busy</p>
		{#each data.projects as project, i}
			<!-- Set first project as dark -->
			<Projects
				id={i}
				link={project.link}
				dark={i === 0}
				accordionOpen={i === 0}
				title={project.title}
				content={project.content}
				tech={project.tech}
			/>
		{/each}
	</div>
</section>

<section>
	<div class="flex flex-col gap-6">
		<h3 class="text-3xl font-semibold">Career</h3>
		<p class="-mt-4 text-gray-500 italic">My career thus far...</p>
	</div>
	<Timeline />
</section>

<section>
	<div class="flex flex-col gap-6">
		<h3 class="text-3xl font-semibold">Skills</h3>
		<p class="-mt-4 text-gray-500 italic">Just a few of the skills I've picked up along the way.</p>
	</div>
	<Skills />
</section>

<!-- About me -->
<section class="">
	<div class="flex flex-col gap-6">
		<h3 class="text-3xl font-semibold">About me</h3>
		<p class="-mt-4 text-gray-500 italic">What I like to get up to in my spare time</p>

		<p class="leading-loose">
			In the grand theatre of my life, golf has taken on the role of the mischievous sidekick—always
			there, never quite behaving as expected. Picture me on the green, armed with a club and an
			expression that oscillates between determination and sheer bewilderment. My swings have been
			compared to interpretative dance, with the golf ball playing the elusive partner who insists
			on a tango through the rough.
		</p>
		<p class="leading-loose">
			I've taken on the role of the aspiring bass maestro—though my instrument might argue that I'm
			more of a "bassically challenged" enthusiast.
		</p>

		<p class="leading-loose">
			So, whether I'm coaxing melodies from my bass or navigating the unpredictable dance floor of
			the golf course, one thing is for sure—I'm on a perpetual quest for laughter, rhythm, and the
			perfect swing.
		</p>
	</div>
</section>

<!-- Footer -->
<section class="flex items-center justify-center pb-12 gap-6">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="icon icon-tabler icon-tabler-mail"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="currentColor"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
			d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
		/><path d="M3 7l9 6l9 -6" /></svg
	>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="icon icon-tabler icon-tabler-brand-x"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="currentColor"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
			d="M4 4l11.733 16h4.267l-11.733 -16z"
		/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg
	>
</section>
