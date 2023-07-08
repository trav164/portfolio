<script lang="ts">
	import { fade } from 'svelte/transition';
	import SkillsCard from './SkillsCard.svelte';

	let isTechnical = true;

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
		},
		{
			title: 'UX',
			description:
				'Tailoring your design with usability, and emotional impact in mind to create a meaningful and enjoyable experience.',
			icon: 'mdi:design',
			dark: false
		},
		{
			title: 'Databases',
			description:
				'Proficiency in designing, managing, and querying data structures to efficiently store, retrieve, and manipulate information for various applications and systems.',
			icon: 'material-symbols:database-outline',
			dark: false
		},
		{
			title: 'Source Control',
			description:
				'Source control allows me to efficiently track and manage my code changes, ensuring version control, history tracking, and seamless collaboration with other developers.',
			icon: 'material-symbols:database-outline',
			dark: false
		},
		{
			title: 'Testing',
			description:
				'Testing allows me to systematically evaluate my code, ensuring its quality, reliability, and functionality meet the desired standards and requirements.',
			icon: 'mdi:bug',
			dark: false
		}
	];

	const softSkills: SkillDetails[] = [
		{
			title: 'Communication',
			description:
				'Effective communication is crucial in a job as it fosters understanding between parties',
			icon: 'material-symbols:chat',
			dark: true
		},
		{
			title: 'Collaboration',
			description: 'Working together with other people as a team to achieve a common goal.',
			icon: 'carbon:collaborate',
			dark: false
		},
		{
			title: 'Adaptibility',
			description:
				'Adjusting to your needs quickly in an iterative process to reach our goal sooner.',
			icon: 'iconoir:agile',
			dark: false
		},
		{
			title: 'Critical Thinking',
			description:
				'Able to identify, analyze, and solve problems systematically instead of relying on intuition and instinct.',
			icon: 'mdi:head-thinking',
			dark: false
		},
		{
			title: 'Leadership',
			description:
				'Ability to inspire people, manage conflicts, give clear feedback, mentor subordinates, and lead projects.',
			icon: 'fluent-mdl2:team-favorite',
			dark: false
		},
		{
			title: 'Work Ethic',
			description:
				'A strong work ethic is dedicated, motivated, and committed to their roles and takes pleasure from achieving success.',
			icon: 'icon-park-outline:battery-working-one',
			dark: false
		}
	];
</script>

<div class="flex h-screen flex-col items-center justify-center gap-16">
	<div class="flex flex-row gap-6">
		<button
			class={`h-10 w-40 rounded text-slate-400 outline outline-2 outline-slate-300 ${
				isTechnical ? 'bg-black text-slate-50 hover:bg-slate-900' : 'hover:bg-slate-100'
			}`}
			on:click|preventDefault={() => (isTechnical = true)}>Technical Skills</button
		>

		<button
			class={`h-10 w-40 rounded text-slate-400 outline outline-2 outline-slate-300 ${
				!isTechnical ? 'bg-black text-slate-50 hover:bg-slate-900' : 'hover:bg-slate-100'
			}`}
			on:click|preventDefault={() => (isTechnical = false)}>Soft Skills</button
		>
	</div>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
		{#if isTechnical}
			{#each technicalSkills as skill}
				<!-- <div in:fade={{ delay: 500 }} out:fade> -->
				<SkillsCard {skill} />
				<!-- </div> -->
			{/each}
		{:else}
			{#each softSkills as skill}
				<!-- <div in:fade={{ delay: 500 }} out:fade> -->
				<SkillsCard {skill} />
				<!-- </div> -->
			{/each}
		{/if}
	</div>
</div>
