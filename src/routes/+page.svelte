<script lang="ts">
	import { onMount } from 'svelte';
	import { annotate, annotationGroup } from 'rough-notation';
	import avatar from '$lib/images/avatar.svg';

	onMount(() => {
		const name = annotate(document.querySelector('#name'), {
			type: 'highlight',
			color: '#D0BFFF',
			multiline: false,
			padding: 25
		});

		const avatar = annotate(document.querySelector('#avatar'), {
			type: 'bracket',
			color: '#D0BFFF',
			padding: 25
		});

		const simple = annotate(document.querySelector('#simple'), { type: 'underline' });

		const ag = annotationGroup([avatar, name, simple]);
		// ag.show();
	});
</script>

<svelte:head>
	<title>Lewis Travis - Home</title>
	<meta
		name="description"
		content="A simple portfolio to learn new skills and expand my knowledge as a software developer."
	/>
</svelte:head>

<section class="flex flex-col-reverse md:flex-row justify-center gap-8 w-full">
	<div class="w-full flex flex-col gap-8">
		<h1 class="font-semibold text-5xl leading-normal">
			Hi! I'm <span id="name" class="text-gray-800">Lewis</span>.
		</h1>
		<p class="tracking-wider leading-relaxed text-xl">
			I've created this <span id="simple">simple</span> portfolio to learn new skills and expand my knowledge
			as a software developer. I'm always keen to learn new technology and enjoy working in customer-oriented
			environments delivering products from start to finish.
		</p>

		<div class="w-full items-center justify-center md:justify-start flex gap-4">
			<a
				class="bg-gray-900 text-gray-100 px-8 py-4 rounded font-semibold text-sm hover:bg-gray-800"
				href="#"
				aria-label="linkedin">LinkedIn</a
			>
			<a
				class="outline outline-2 outline-gray-300 font-semibold text-sm rounded px-8 py-4 hover:bg-gray-200"
				href="#"
				aria-label="linkedin">Github</a
			>
		</div>
	</div>
	<div id="avatar" class="w-full hidden sm:flex items-center justify-center">
		<img class="md:h-96 md:w-96" alt="avatar" src={avatar} />
	</div>
</section>

<div class="">
	<h3 class="text-xl font-semibold">Projects</h3>
</div>
