<script>
	import '../app.css';
</script>

<main
	class="flex h-[100vh] items-center justify-center bg-avatar bg-opacity-20 md:px-32 lg:px-64 px-8 text-black py-12 md:mt-0"
>
	<div class="max-w-6xl flex flex-col gap-24">
		<slot />
	</div>
</main>
