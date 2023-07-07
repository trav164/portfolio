<script lang="ts">
	export let skill: SkillDetails;
</script>

<div
	class={`flex flex-col gap-2 rounded p-6 outline outline-1 outline-slate-300 ${
		skill.dark ? 'bg-black' : 'bg-none'
	}`}
>
	<div class={`${skill.dark ? 'text-slate-50' : 'text-black'}`}>
		<iconify-icon icon={skill.icon} style="font-size: 64px" />
	</div>

	<div class="flex flex-1 py-4" />

	<span class={`text-xl font-bold ${skill.dark ? 'text-slate-50' : 'text-black'}`}
		>{skill.title}</span
	>
	<p
		class={`font-thin leading-tight text-slate-600 ${skill.dark ? 'text-slate-200' : 'text-black'}`}
	>
		{skill.description}
	</p>
</div>
