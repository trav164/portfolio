<script lang="ts">
	import { annotate, annotationGroup } from 'rough-notation';
	import { onMount } from 'svelte';

	onMount(() => {
		const step1 = annotate(document.querySelector('#step1'), {
			type: 'box',
			color: '#FF7293',
			multiline: false,
			padding: 5
		});

		const step2 = annotate(document.querySelector('#step2'), {
			type: 'underline',
			color: '#D0BFFF',
			multiline: false,
			padding: 5
		});
		const step3 = annotate(document.querySelector('#step3'), {
			type: 'underline',
			color: '#D0BFFF',
			multiline: false,
			padding: 5
		});

		const step4 = annotate(document.querySelector('#step4'), {
			type: 'underline',
			color: '#D0BFFF',
			multiline: false,
			padding: 5
		});

		annotationGroup([step1, step2, step3, step4]).show();
	});
</script>

<div class="mt-6">
	<!-- Item #1 -->
	<div class="relative pl-8 sm:pl-32 py-6 group">
		<!-- Purple label -->
		<div class="font-caveat font-bold text-2xl mb-1 sm:mb-0">CGI Inc</div>
		<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
		<div
			class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-zinc-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
		>
			<time
				id="step1"
				class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-black rounded-full"
				>Present</time
			>
			<div class="text-xl text-zinc-500">Software Developer</div>
		</div>
		<!-- Content -->
		<div class="leading-loose">
			Earned two promotions and currently serving as the Frontend Lead in an agile team. My primary
			duties involve spearheading the team in frontend development utilizing Angular, Tailwind,
			Playwright and Jasmine for testing. Driven by a passion for design, I've expanded my
			involvement in user experience, routinely crafting mockups with Figma to offer clients a
			glimpse into the rationale behind the application's aesthetics. Additionally, I extend
			mentorship to junior members and newcomers to the company.
		</div>
	</div>

	<!-- ITEM 2 -->
	<div class="relative pl-8 sm:pl-32 py-6 group">
		<!-- Purple label -->
		<div class="font-caveat font-bold text-2xl mb-1 sm:mb-0">CGI Inc</div>
		<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
		<div
			class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-zinc-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
		>
			<time
				id="step2"
				class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-zinc-600 rounded-full"
				>2019</time
			>
			<div class="text-xl text-zinc-500">Junior Software Developer</div>
		</div>
		<!-- Content -->
		<div class="leading-loose">
			Participated in multiple projects, accumulating extensive commercial experience to enhance my
			developer toolkit. This involved working with technologies such as NodeJS, SQL, Mongo, and
			Docker, contributing to the creation of a middleware integration layer bridging two APIs.
		</div>
	</div>

	<!-- ITEM 3 -->
	<div class="relative pl-8 sm:pl-32 py-6 group">
		<!-- Purple label -->
		<div class="font-caveat font-bold text-2xl mb-1 sm:mb-0">
			Sheffield Forgemasters International
		</div>
		<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
		<div
			class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-zinc-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
		>
			<time
				id="step3"
				class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-zinc-600 rounded-full"
				>2018-2019</time
			>
			<div class="text-xl text-zinc-500">Internship</div>
		</div>
		<!-- Content -->
	</div>

	<!-- ITEM 4 -->
	<div class="relative pl-8 sm:pl-32 py-6 group">
		<!-- Purple label -->
		<div class="font-caveat font-bold text-2xl mb-1 sm:mb-0">Nottingham Trent University</div>
		<!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) -->
		<div
			class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-zinc-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
		>
			<time
				id="step4"
				class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-zinc-600 rounded-full"
				>2015-2019</time
			>
			<div class="text-xl text-zinc-500">Computer Systems (Forensics & Security)</div>
		</div>
		<!-- Content -->
	</div>
</div>
