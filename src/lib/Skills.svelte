<script lang="ts">
	import SkillsCard from './SkillsCard.svelte';

	const technicalSkills: SkillDetails[] = [
		{
			title: 'Frontend Development',
			description: 'I love to bring your ideas to life, coding bespoke websites from scratch.',
			icon: 'material-symbols:html',
			dark: true
		},
		{
			title: 'API Development',
			description: 'Creating robust APIs to meet the needs of any of your projects.',
			icon: 'material-symbols:api',
			dark: false
		}
	];
</script>

<div class="flex h-screen flex-col items-center justify-center gap-16">
	<div class="flex flex-row gap-6">
		<button class="h-10 w-40 rounded bg-black text-slate-50 outline outline-2 outline-slate-300"
			>Technical Skills</button
		>

		<button class="h-10 w-40 rounded text-slate-400 outline outline-2 outline-slate-300"
			>Soft Skills</button
		>
	</div>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
		{#each technicalSkills as skill}
			<SkillsCard {skill} />
		{/each}
	</div>
</div>
