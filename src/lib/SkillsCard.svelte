<script lang="ts">
	import { fade, fly } from 'svelte/transition';

	export let skill: SkillDetails;
</script>

<div
	class={`flex h-auto max-w-md flex-col flex-wrap gap-2 rounded p-6 outline outline-1 outline-slate-300 md:h-72 ${
		skill.dark ? 'bg-black' : 'bg-none'
	}`}
>
	<div class={`${skill.dark ? 'text-slate-50' : 'text-black'}`}>
		<iconify-icon icon={skill.icon} style="font-size: 32px" />
	</div>

	<div class="flex flex-1" />

	<span class={`text-xl font-bold ${skill.dark ? 'text-slate-50' : 'text-black'}`}
		>{skill.title}</span
	>
	<p class={`font-thin leading-tight ${skill.dark ? 'text-slate-200' : 'text-black'}`}>
		{skill.description}
	</p>
</div>
