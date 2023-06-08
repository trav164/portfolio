<script lang="ts">
	import Theme from '../lib/Theme.svelte';

	const keySkills: string[] = ['Typescript', 'Angular', 'Svelte', 'Tailwind', 'UX'];
	const skills: string[] = [
		'.NET',
		'React',
		'Node',
		'Docker',
		'Azure',
		'Supabase',
		'MongoDB',
		'Postgres'
	];
</script>

<svelte:head>
	<title>Lewis Travis - Home</title>
	<meta
		name="description"
		content="A simple portfolio to learn new skills and expand my knowledge as a software developer."
	/>
</svelte:head>

<main class="mx-auto sm:w-[600px] w-96 p-6 flex flex-col gap-12">
	<section>
		<div class="pt-20">
			<div class="flex justify-end">
				<Theme />
			</div>
			<div class="flex">
				<div class="flex flex-row gap-4 py-2">
					<img
						class="w-20 h-20 rounded-full hover:animate-spin"
						src="https://api.dicebear.com/5.x/big-ears-neutral/svg?seed=lewis"
						alt="avatar"
					/>
					<div class="flex flex-col justify-center">
						<h1 class="sm:text-4xl text-2xl font-bold text-brand">
							Lewis Travis
							<span class="flex italic font-bold text-sm text-dark dark:text-mid"
								>Fullstack Web Developer</span
							>
						</h1>
					</div>
				</div>
			</div>
			<div class="flex flex-col hover:contrast-125 transition-all duration-500">
				<a href="/contact">
					<button
						class="shadow-lg justify-center py-2 px-4 w-full outline outline-2 outline-brand hover:bg-brandLighter bg-brand text-light font-semibold rounded"
						>Get in touch</button
					>
				</a>
			</div>
		</div>
	</section>

	<section class="">
		<h3 class="text-dark dark:text-light font-semibold">Hi, I'm Lewis</h3>
		<hr class="border-none w-12 h-1 rounded bg-gradient-to-r from-indigo-400 to-brand my-3" />
		<div class="text-dark dark:text-mid">
			I've created this simple portfolio to learn new skills and expand my knowledge as a software
			developer. I'm always keen to learn new technology and enjoy working in customer-oriented
			environments delivering products from start to finish.
		</div>
	</section>

	<section class="">
		<h3 class="text-dark dark:text-light font-semibold">Work Experience</h3>
		<hr class="border-none w-12 h-1 rounded bg-gradient-to-r from-indigo-400 to-brand my-3" />

		<div class="flex gap-4 text-dark dark:text-light text-sm leading-6">
			<div class="text-dark dark:text-light w-32">2019 - present</div>
			<div class="flex flex-col w-full">
				<span class="font-semibold text-dark dark:text-light">Software Engineer – CGI</span>

				<span class="text-dark dark:text-mid"
					>Worked on several projects, focused mainly on front-end development. Currently working as
					a lead front-end software developer using Angular in tandem with the technical lead whilst
					also upskilling in backend technologies in order become a more well-rounded developer.
				</span>
				<span class="text-brand dark:text-mid pt-2 italic"
					>TS • Angular • NGRX • React • .NET • MongoDB • Material
				</span>
			</div>
		</div>

		<div class="mt-6 flex gap-4 text-light text-sm leading-6">
			<div class="text-dark dark:text-light w-32">2017 - 2018</div>
			<div class="flex flex-col w-full">
				<span class="font-semibold text-dark dark:text-light"
					>Intern – Sheffield Forgemasters International</span
				>
				<span class="text-dark dark:text-mid">Internal NDT logging system</span>
				<span class="text-brand dark:text-mid pt-2 italic">Agile • VB • Python • Node</span>
			</div>
		</div>
	</section>

	<section class="">
		<h3 class="text-dark dark:text-light font-semibold">Side Projects</h3>
		<hr class="border-none w-12 h-1 rounded bg-gradient-to-r from-indigo-400 to-brand my-3" />

		<div class="flex gap-4 text-light text-sm leading-6">
			<div class="text-dark dark:text-light w-32">Ongoing</div>
			<div class="flex flex-col w-full">
				<span class="font-semibold text-dark dark:text-light">Tales of The Backyard Farm</span>
				<span class="text-dark dark:text-mid">
					An author and publishing house creating and distributing childrens books. I was tasked
					with re-designing and implementing a whole new site to match the feel of the books as well
					as incorporating mechanisms for the business to sell and distribute their material.
				</span>
				<span class="text-brand dark:text-mid pt-2 italic"
					>TS • SvelteKit • Tailwind • Stripe
				</span>
			</div>
		</div>

		<div class="mt-6 flex gap-4 text-light text-sm leading-6">
			<div class="text-dark dark:text-light w-32">2022</div>
			<div class="flex flex-col w-full">
				<span class="font-semibold text-dark dark:text-light">Portfolio</span>
				<span class="text-dark dark:text-mid"
					>A simple portfolio site to showcase some of my skills inspired by <a
						href="https://bonhomme.lol/"
						><span class="text-dark dark:text-white underline">Maxime Bonhomme</span>.</a
					>
				</span>
				<span class="text-brand dark:text-mid pt-2 italic">TS • SvelteKit • Tailwind </span>
			</div>
		</div>

		<div class="mt-6 flex gap-4 text-light text-sm leading-6">
			<div class="text-dark dark:text-light w-32">2022</div>
			<div class="flex flex-col w-full">
				<span>
					<a
						class="underline font-semibold text-dark dark:text-light"
						href="http://spot-the-intro.lewistravis.co.uk"
					>
						Spot The Intro
						<svg
							class="inline-block h-4 -ml-1 mb-1 text-dark dark:text-light"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline
								points="15 3 21 3 21 9"
							/><line x1="10" y1="14" x2="21" y2="3" /></svg
						>
					</a>
				</span>
				<span class="text-dark dark:text-mid"
					>Enhancing Spot The Intro game created by Cheatwell Games by automating song searching.</span
				>
				<span class="text-brand dark:text-mid pt-2 italic"
					>TS • SvelteKit • Tailwind • Cloudflare Workers • Supabase • Vercel</span
				>
			</div>
		</div>
	</section>

	<section class="">
		<h3 class="text-dark dark:text-light font-semibold">
			Buzzwords (Skills) <span class="text-brand dark:text-mid italic text-xs">🏆 Key Skills</span>
		</h3>
		<hr class="border-none w-12 h-1 rounded bg-gradient-to-r from-indigo-400 to-brand my-3" />

		<div class="grid grid-cols-2 md:grid-cols-3 mt-6 gap-4">
			{#each keySkills as skill}
				<div
					class="py-2 px-2 text-center gap-2 rounded-full outline outline-2 outline-brand dark:text-light text-dark font-semibold text-sm cursor-auto"
				>
					🏆 {skill}
				</div>
			{/each}
			{#each skills as skill}
				<div
					class="py-2 px-4 text-center outline outline-2 outline-slate-500 rounded-full bg-opacity-40 dark:text-light text-dark font-semibold text-sm cursor-auto"
				>
					{skill}
				</div>
			{/each}
		</div>
	</section>

	<section class="">
		<h3 class="text-dark dark:text-light font-semibold">Socials</h3>
		<hr class="border-none w-12 h-1 rounded bg-gradient-to-r from-indigo-400 to-brand my-3" />

		<div class="flex gap-4 text-light text-sm leading-6">
			<div class="text-dark dark:text-mid w-32">Github</div>
			<div class="flex flex-col w-full">
				<span class="text-brand underline"><a href="https://github.com/trav164">@trav164</a></span>
			</div>
		</div>

		<div class="mt-6 flex gap-4 text-light text-sm leading-6">
			<div class="text-dark dark:text-mid w-32">LinkedIn</div>
			<div class="flex flex-col w-full">
				<span class="text-brand underline"
					><a href="https://www.linkedin.com/in/lewis-travis-43656ab5/">Lewis Travis</a></span
				>
			</div>
		</div>
	</section>
</main>
