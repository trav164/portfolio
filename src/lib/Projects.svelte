<script lang="ts">
	const projects = [
		{
			title: 'Tales of The Backyard Farm',
			description:
				'An author and publishing house creating and distributing childrens books. I was tasked with re-designing and implementing a whole new site to match the feel of the books as well as incorporating mechanisms for the business to sell and distribute their material.',
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
		},
		{
			title: 'Portfolio',
			description:
				'An author and publishing house creating and distributing childrens books. I was tasked with re-designing and implementing a whole new site to match the feel of the books as well as incorporating mechanisms for the business to sell and distribute their material.',
			technologies: ['TS', 'SvelteKit', 'TailwindCSS', 'SendGrid', 'Vercel'],
			url: 'https://lewistravis.co.uk/'
		}
	];
</script>

<div class="flex h-screen flex-col items-center justify-center gap-16">
	{#each projects as project}
		<div
			class={`flex h-56 max-h-72 w-full flex-col gap-4 rounded p-6 outline outline-1 outline-slate-300 ${
				project.highlight ? 'bg-black text-slate-50' : ''
			}`}
		>
			<a href={project.url} class="flex flex-row items-center gap-2 hover:underline">
				<span class="text-2xl font-bold">{project.title}</span>
				<iconify-icon icon="mdi:open-in-new" style="font-size: 24px" />
			</a>

			<p class="flex flex-1">{project.description}</p>

			<ul
				class={`flex flex-row items-center gap-3 ${
					!project.highlight ? 'text-slate-500' : 'text-slate-200'
				}`}
			>
				{#each project.technologies as tech, i}
					<li class="text-sm">{tech}</li>
					{#if i !== tech.length - 1}
						#
					{/if}
				{/each}
			</ul>
		</div>
	{/each}
</div>
