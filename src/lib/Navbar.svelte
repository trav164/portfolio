<script lang="ts">
	import { fly } from 'svelte/transition';
	import { currentPage } from '../page';

	const scrollToPage = (scrollTo: string) => {
		if (!scrollTo) return;
		currentPage.set(scrollTo);
	};

	const navItems = [
		{
			name: 'home',
			id: '#home' // section id
		},
		{
			name: 'skills',
			id: '#skills'
		},
		{
			name: 'projects',
			id: '#projects'
		},
		// {
		// 	name: 'about',
		// 	id: '#about'
		// },
		{
			name: 'contact',
			id: '#contact'
		}
	];
</script>

<nav
	class="fixed flex w-full items-center justify-center gap-6 bg-slate-50 py-6 font-bricolage text-xl text-slate-600"
>
	{#each navItems as item}
		<a
			class={`custom-hover ${
				$currentPage === item.id
					? 'font-bold text-black underline underline-offset-4'
					: 'font-light text-slate-400 '
			}`}
			href={`#/${item.id}`}
			on:click={() => scrollToPage(item.id)}>{item.name}</a
		>
	{/each}
</nav>
