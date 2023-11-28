<script lang="ts">
	import { fly } from 'svelte/transition';

	export let accordionOpen = false;

	export let id: number;
	export let title: string;
	export let content: string;
	export let tech: string[];
	export let link: string;
	export let dark: boolean;

	import { onMount } from 'svelte';
	import { annotate } from 'rough-notation';
	import Icon from '@iconify/svelte';

	onMount(() => {
		const tech = annotate(document.querySelector('#tech'), {
			type: 'box',
			color: '#D9FF72',
			padding: 10
		});

		// Delay drawing of this part until hero has finished
		setTimeout(() => {
			tech.show();
		}, 2000);
	});
</script>

<button
	on:click={() => (accordionOpen = !accordionOpen)}
	class="p-6 mt-2 rounded z-10 flex items-center justify-between cursor-pointer shadow
    {dark ? 'bg-black hover:bg-zinc-800' : 'bg-white hover:bg-gray-200'}
    {accordionOpen ? 'rounded-b-none' : ''}"
>
	<a
		href={link}
		class="{dark ? 'text-white' : ''} font-semibold text-xl flex items-center gap-2 hover:underline"
		>{title} <Icon style="font-size: 16px;" icon="mdi:open-in-new" /></a
	>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="icon icon-tabler icon-tabler-triangle-filled
        {dark ? 'text-white' : ''} {accordionOpen ? '' : 'rotate-180'}"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		stroke-width="2"
		stroke="currentColor"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
		><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
			d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z"
			stroke-width="0"
			fill="currentColor"
		/></svg
	>
</button>

{#if accordionOpen}
	<div
		in:fly|global={{ y: -50, duration: 500 }}
		out:fly|global={{ y: -50, duration: 500 }}
		class="{dark ? 'bg-white' : 'bg-gray-200 text-gray-800'} -mt-6 p-6 rounded rounded-t-none"
	>
		<p class="leading-loose">
			{content}
		</p>

		<ul id="tech" class="flex flex-wrap gap-4 mt-6 font-semibold">
			{#each tech as t}
				<li>{t}</li>
			{/each}
		</ul>
	</div>
{/if}
