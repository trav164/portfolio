<script lang="ts">
	import { currentPage } from '../page';

	const scrollToPage = (scrollTo: string) => {
		if (!scrollTo) return;
		currentPage.set(scrollTo);
	};

	const navItems = [
		{
			name: 'home',
			id: '#home', // section id,
			icon: 'material-symbols:home'
		},
		{
			name: 'skills',
			id: '#skills',
			icon: 'material-symbols:ambient-screen'
		},
		{
			name: 'timeline',
			id: '#timeline',
			icon: 'material-symbols:timeline'
		},
		{
			name: 'projects',
			id: '#projects',
			icon: 'icon-park-outline:list'
		},

		// {
		// 	name: 'about',
		// 	id: '#about'
		// },
		{
			name: 'contact',
			id: '#contact',
			icon: 'mdi:at'
		}
	];
</script>

<nav
	class="fixed flex w-full flex-row items-center justify-center gap-8 bg-slate-50 py-6 font-bricolage text-xl text-slate-600 md:gap-4"
>
	{#each navItems as item}
		<a
			class={`custom-hover ${
				$currentPage === item.id
					? 'font-bold text-black underline underline-offset-4'
					: 'font-light text-slate-400 '
			}`}
			href={`#/${item.id}`}
			on:click={() => scrollToPage(item.id)}
		>
			<div class="flex flex-row items-center justify-center gap-1">
				<div class="flex items-center justify-center md:hidden">
					<iconify-icon icon={item.icon} style="font-size: 32px" />
				</div>
				<div class="hidden md:flex">
					{item.name}
				</div>
			</div>
		</a>
	{/each}
</nav>
