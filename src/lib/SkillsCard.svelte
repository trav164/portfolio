<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	export let skill: SkillDetails;
</script>

<div
	class={`flex flex-col gap-2 rounded p-6 outline outline-1 outline-slate-300 hover:outline-2 hover:outline-slate-400 md:h-72 ${
		skill.dark ? 'bg-black hover:bg-slate-900' : 'bg-none'
	}`}
>
	<div class={`${skill.dark ? 'text-slate-50' : 'text-black'}`}>
		<iconify-icon icon={skill.icon} style="font-size: 32px" />
	</div>

	<div class="flex flex-1 md:flex-shrink" />

	<span class={`text-md font-bold md:text-xl ${skill.dark ? 'text-slate-50' : 'text-black'}`}
		>{skill.title}</span
	>
	<p
		class={`hidden font-thin leading-tight md:flex ${skill.dark ? 'text-slate-200' : 'text-black'}`}
	>
		{skill.description}
	</p>
</div>

<!-- <div
	class={`flex h-auto max-w-md flex-col flex-wrap gap-2 rounded p-6 outline outline-1 outline-slate-300 hover:outline-2 hover:outline-slate-400 md:h-72 ${
		skill.dark ? 'bg-black hover:bg-slate-900' : 'bg-none'
	}`}
>
	<div class={`${skill.dark ? 'text-slate-50' : 'text-black'}`}>
		<iconify-icon icon={skill.icon} style="font-size: 32px" />
	</div>

	<div class="flex flex-1 md:flex-shrink" />

	<span class={`text-xl font-bold ${skill.dark ? 'text-slate-50' : 'text-black'}`}
		>{skill.title}</span
	>
	<p
		class={`hidden font-thin leading-tight md:flex ${skill.dark ? 'text-slate-200' : 'text-black'}`}
	>
		{skill.description}
	</p>
</div> -->
