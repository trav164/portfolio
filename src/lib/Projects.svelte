<script lang="ts">
	const projects = [
		{
			title: 'Tales of The Backyard Farm',
			description:
				"An author and publishing house creating and distributing childrens books. I've new site to match the feel of the books and implemented a payment system.",
			technologies: ['TS', 'SvelteKit', 'TailwindCSS', 'SendGrid', 'Stripe', 'Vercel'],
			url: 'https://tales-of-a-backyard-farm.vercel.app/',
			highlight: true
		},
		{
			title: 'Spot The Intro',
			description:
				'Enhancing Spot The Intro game created by Cheatwell Games by automating song searching.',
			technologies: ['TS', 'SvelteKit', 'TailwindCSS', 'Cloudflare Workers', 'Supabase'],
			url: 'https://spot-the-intro.lewistravis.co.uk/'
		}
	];
</script>

<div class="flex flex-col items-center justify-center gap-4">
	{#each projects as project}
		<div
			class={`flex w-full flex-col gap-4 rounded p-6 outline outline-1 outline-slate-300 hover:outline-2 hover:outline-slate-400 md:h-56 ${
				project.highlight ? 'bg-black text-slate-50 hover:bg-slate-900' : ''
			}`}
		>
			<div class="flex items-center gap-2">
				<span class="text-xl font-bold md:text-2xl"
					><a class="hover:underline" href={project.url}>{project.title} </a></span
				>
				<iconify-icon icon="mdi:open-in-new" style="font-size: 24px" />
			</div>

			<p class="flex flex-1">{project.description}</p>

			<ul
				class={`flex flex-wrap items-center gap-3 md:flex-row  ${
					!project.highlight ? 'text-slate-500' : 'text-slate-200'
				}`}
			>
				{#each project.technologies as tech, i}
					<li class="flex flex-col text-sm md:text-sm">
						{i == project.technologies.length - 1 ? tech : `${tech} ●`}
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
