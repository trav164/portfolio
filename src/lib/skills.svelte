<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	let isTech = true;

	let handleChange = () => {
		isTech = !isTech;
	};

	interface SkillDetails {
		title: string;
		description: string;
		icon: string;
		dark: boolean;
	}

	const technicalSkills: SkillDetails[] = [
		{
			title: 'Frontend Development',
			description: 'I love to bring your ideas to life, coding bespoke websites from scratch.',
			icon: 'icomoon-free:html-five',
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
				'Tailoring your design with usability, and emotional impact in mind to create an experience.',
			icon: 'mdi:design',
			dark: false
		},
		{
			title: 'Databases',
			description: 'Proficiency in designing, managing, and querying data structure. ',
			icon: 'material-symbols:database-outline',
			dark: false
		},
		{
			title: 'Source Control',
			description: 'Source control allows me to efficiently track and manage my code changes.',
			icon: 'mdi:git',
			dark: false
		},
		{
			title: 'Testing',
			description: 'Testing allows me to systematically evaluate my code.',
			icon: 'mdi:bug',
			dark: false
		}
	];

	const softSkills: SkillDetails[] = [
		{
			title: 'Communication',
			description: 'Crucial in a job as it fosters understanding between parties',
			icon: 'material-symbols:chat',
			dark: true
		},
		{
			title: 'Collaboration',
			description: 'Working together with other people as a team.',
			icon: 'carbon:collaborate',
			dark: false
		},
		{
			title: 'Adaptibility',
			description: 'Adjusting to your needs quickly in an iterative process.',
			icon: 'iconoir:agile',
			dark: false
		},
		{
			title: 'Critical Thinking',
			description: 'Able to identify, analyze, and solve problems systematically.',
			icon: 'mdi:head-thinking',
			dark: false
		},
		{
			title: 'Leadership',
			description: 'Ability to inspire, manage, mentor, and lead projects.',
			icon: 'fluent-mdl2:team-favorite',
			dark: false
		},
		{
			title: 'Work Ethic',
			description: 'A strong work ethic is dedicated, motivated, and committed.',
			icon: 'icon-park-outline:battery-working-one',
			dark: false
		}
	];
</script>

<div class="flex flex-col mt-8">
	<!-- Toggle B -->
	<div class="flex items-center justify-center w-full mb-12">
		<label for="toggleB" class="flex items-center cursor-pointer">
			<!-- label -->
			<div class=" text-black font-medium mr-4">Technical Skills</div>
			<!-- toggle -->
			<div class="relative">
				<!-- input -->
				<input
					on:change={handleChange}
					value={isTech}
					type="checkbox"
					id="toggleB"
					class="sr-only"
				/>
				<!-- line -->
				<div class="block bg-black w-14 h-8 rounded-full" />
				<!-- dot -->
				<div class="dot absolute left-1 top-1 bg-[#d9ff72] w-6 h-6 rounded-full transition" />
			</div>
			<!-- label -->
			<div class="ml-4 text-black font-medium">Soft Skills</div>
		</label>
	</div>

	<div class="-mt-4">
		{#if isTech}
			<!-- Soft Skills -->
			<div in:fly={{ x: 100, duration: 500 }} class="grid grid-cols-1 md:grid-cols-3 gap-8">
				{#each technicalSkills as skill}
					<div class="p-6 rounded shadow cursor-pointer bg-black text-white">
						<div class="md:mb-12 mb-6 text-lime">
							<Icon style="font-size: 24px;" icon={skill.icon} />
						</div>

						<p class="font-semibold text-xl">{skill.title}</p>
						<p class="mt-2 align-bottom">{skill.description}</p>
					</div>
				{/each}
			</div>
		{:else}
			<!-- Technical -->
			<div in:fly={{ x: -100, duration: 500 }} class="grid grid-cols-1 md:grid-cols-3 gap-8">
				{#each softSkills as skill}
					<div class="p-6 rounded shadow cursor-pointer bg-black text-white">
						<div class="md:mb-12 mb-6 text-purple">
							<Icon style="font-size: 24px;" icon={skill.icon} />
						</div>

						<p class="font-semibold text-xl">{skill.title}</p>
						<p class="mt-2 align-bottom">{skill.description}</p>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	/* Toggle B */
	input:checked ~ .dot {
		transform: translateX(100%);
		background-color: #d0bfff;
	}
</style>
