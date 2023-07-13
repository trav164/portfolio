<script lang="ts">
	import lewistravis from '$lib/assets/lewis-travis.svg';
	import avatar from '$lib/assets/avatar.svg';
</script>

<div class="flex flex-col items-center justify-center gap-2">
	<img alt="avatar" class="h-44 w-44 md:h-64 md:w-64" src={avatar} />
	<img id="logo" alt="lewis travis text" class="" src={lewistravis} />

	<p class="text-center text-sm text-slate-600 sm:text-base">
		I'm a skilled web developer specializing in JavaScript, HTML, and Tailwind CSS. My expertise in
		these technologies enables me to build dynamic and optimized web applications that deliver
		exceptional user experiences.
	</p>

	<div class="mt-12 animate-bounce rounded text-slate-400">
		<iconify-icon flip="vertical" icon="ri:arrow-up-line" style="font-size: 40px;" />
	</div>
</div>
