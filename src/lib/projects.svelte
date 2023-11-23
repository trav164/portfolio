<script>
	import { fly } from 'svelte/transition';

	let accordionOpen = false;
</script>

<div class="flex flex-col gap-6">
	<h3 class="text-3xl font-semibold">Projects</h3>
	<p class="-mt-4 text-gray-500 italic">Just a few little side projects to keep me busy</p>

	<button
		on:click={() => (accordionOpen = !accordionOpen)}
		class="bg-gray-800 p-6 mt-2 rounded z-10 flex items-center justify-between cursor-pointer {accordionOpen
			? 'rounded-b-none'
			: ''}"
	>
		<span class="text-white font-semibold text-xl">The Backyard Farm</span>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-triangle-filled text-gray-100 {accordionOpen
				? ''
				: 'rotate-180'}"
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
			in:fly={{ y: -50, duration: 500 }}
			out:fly={{ y: -50, duration: 500 }}
			class="bg-gray-600 text-white -mt-6 p-6 rounded rounded-t-none"
		>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui officia omnis dolorem. Maxime
				tempore saepe cum itaque soluta ratione quam?
			</p>
		</div>
	{/if}
</div>
