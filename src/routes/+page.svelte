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

<main class="mx-auto flex w-96 flex-col gap-12 p-6 sm:w-[600px]">
	<section>
		<div class="pt-20">
			<div class="flex justify-end">
				<Theme />
			</div>
			<div class="flex">
				<div class="flex flex-row gap-4 py-2">
					<img
						class="h-20 w-20 rounded-full hover:animate-spin"
						src="https://api.dicebear.com/5.x/big-ears-neutral/svg?seed=lewis"
						alt="avatar"
					/>
					<div class="flex flex-col justify-center">
						<h1 class="text-2xl font-bold text-brand sm:text-4xl">
							Lewis Travis
							<span class="flex text-sm font-bold italic text-dark dark:text-mid"
								>Fullstack Web Developer</span
							>
						</h1>
					</div>
				</div>
			</div>
			<div class="flex flex-col transition-all duration-500 hover:contrast-125">
				<a href="/contact">
					<button
						class="w-full justify-center rounded bg-brand px-4 py-2 font-semibold text-light shadow-lg outline outline-2 outline-brand hover:bg-brandLighter"
						>Get in touch</button
					>
				</a>
			</div>
		</div>
	</section>

	<section class="">
		<h3 class="font-semibold text-dark dark:text-light">Hi, I'm Lewis</h3>
		<hr class="my-3 h-1 w-12 rounded border-none bg-gradient-to-r from-indigo-400 to-brand" />
		<div class="text-dark dark:text-mid">
			I've created this simple portfolio to learn new skills and expand my knowledge as a software
			developer. I'm always keen to learn new technology and enjoy working in customer-oriented
			environments delivering products from start to finish.
		</div>
	</section>

	<section class="">
		<h3 class="font-semibold text-dark dark:text-light">Work Experience</h3>
		<hr class="my-3 h-1 w-12 rounded border-none bg-gradient-to-r from-indigo-400 to-brand" />

		<div class="flex gap-4 text-sm leading-6 text-dark dark:text-light">
			<div class="w-32 text-dark dark:text-light">2019 - present</div>
			<div class="flex w-full flex-col">
				<span class="font-semibold text-dark dark:text-light">Software Engineer – CGI</span>

				<span class="text-dark dark:text-mid"
					>Worked on several projects, focused mainly on front-end development. Currently working as
					a lead front-end software developer using Angular in tandem with the technical lead whilst
					also upskilling in backend technologies in order become a more well-rounded developer.
				</span>
				<span class="pt-2 italic text-brand dark:text-mid"
					>TS • Angular • NGRX • React • .NET • MongoDB • Material
				</span>
			</div>
		</div>

		<div class="mt-6 flex gap-4 text-sm leading-6 text-light">
			<div class="w-32 text-dark dark:text-light">2017 - 2018</div>
			<div class="flex w-full flex-col">
				<span class="font-semibold text-dark dark:text-light"
					>Intern – Sheffield Forgemasters International</span
				>
				<span class="text-dark dark:text-mid">Internal NDT logging system</span>
				<span class="pt-2 italic text-brand dark:text-mid">Agile • VB • Python • Node</span>
			</div>
		</div>
	</section>

	<section class="">
		<h3 class="font-semibold text-dark dark:text-light">Side Projects</h3>
		<hr class="my-3 h-1 w-12 rounded border-none bg-gradient-to-r from-indigo-400 to-brand" />

		<div class="flex gap-4 text-sm leading-6 text-light">
			<div class="w-32 text-dark dark:text-light">Ongoing</div>
			<div class="flex w-full flex-col">
				<span class="font-semibold text-dark dark:text-light">Tales of The Backyard Farm</span>
				<span class="text-dark dark:text-mid">
					An author and publishing house creating and distributing childrens books. I was tasked
					with re-designing and implementing a whole new site to match the feel of the books as well
					as incorporating mechanisms for the business to sell and distribute their material.
				</span>
				<span class="pt-2 italic text-brand dark:text-mid"
					>TS • SvelteKit • Tailwind • Stripe
				</span>
			</div>
		</div>

		<div class="mt-6 flex gap-4 text-sm leading-6 text-light">
			<div class="w-32 text-dark dark:text-light">2023</div>
			<div class="flex w-full flex-col">
				<span>
					<a
						class="font-semibold text-dark underline dark:text-light"
						href="http://password.lewistravis.co.uk"
					>
						Password Generator
						<svg
							class="-ml-1 mb-1 inline-block h-4 text-dark dark:text-light"
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
					>A simple password generator with custom parameters inspired by a challenge on Frontend
					Mentor. This project was a collaboration with <a href="https://twitter.com/amritnagi"
						><span class="text-dark underline dark:text-white">Amrit Nagi</span> over lunch.</a
					>
				</span>
				<span class="pt-2 italic text-brand dark:text-mid">TS • SvelteKit • Tailwind • Vercel</span>
			</div>
		</div>

		<div class="mt-6 flex gap-4 text-sm leading-6 text-light">
			<div class="w-32 text-dark dark:text-light">2022</div>
			<div class="flex w-full flex-col">
				<span>
					<a
						class="font-semibold text-dark underline dark:text-light"
						href="http://spot-the-intro.lewistravis.co.uk"
					>
						Spot The Intro
						<svg
							class="-ml-1 mb-1 inline-block h-4 text-dark dark:text-light"
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
				<span class="pt-2 italic text-brand dark:text-mid"
					>TS • SvelteKit • Tailwind • Cloudflare Workers • Supabase • Vercel</span
				>
			</div>
		</div>
	</section>

	<section class="">
		<h3 class="font-semibold text-dark dark:text-light">
			Buzzwords (Skills) <span class="text-xs italic text-brand dark:text-mid">🏆 Key Skills</span>
		</h3>
		<hr class="my-3 h-1 w-12 rounded border-none bg-gradient-to-r from-indigo-400 to-brand" />

		<div class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
			{#each keySkills as skill}
				<div
					class="cursor-auto gap-2 rounded-full px-2 py-2 text-center text-sm font-semibold text-dark outline outline-2 outline-brand dark:text-light"
				>
					🏆 {skill}
				</div>
			{/each}
			{#each skills as skill}
				<div
					class="cursor-auto rounded-full bg-opacity-40 px-4 py-2 text-center text-sm font-semibold text-dark outline outline-2 outline-slate-500 dark:text-light"
				>
					{skill}
				</div>
			{/each}
		</div>
	</section>

	<section class="">
		<h3 class="font-semibold text-dark dark:text-light">Socials</h3>
		<hr class="my-3 h-1 w-12 rounded border-none bg-gradient-to-r from-indigo-400 to-brand" />

		<div class="flex gap-4 text-sm leading-6 text-light">
			<div class="w-32 text-dark dark:text-mid">Github</div>
			<div class="flex w-full flex-col">
				<span class="text-brand underline"><a href="https://github.com/trav164">@trav164</a></span>
			</div>
		</div>

		<div class="mt-6 flex gap-4 text-sm leading-6 text-light">
			<div class="w-32 text-dark dark:text-mid">LinkedIn</div>
			<div class="flex w-full flex-col">
				<span class="text-brand underline"
					><a href="https://www.linkedin.com/in/lewis-travis-43656ab5/">Lewis Travis</a></span
				>
			</div>
		</div>
	</section>
</main>
