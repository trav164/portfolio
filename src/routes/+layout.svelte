<script>
	import '../app.css';
</script>

<main
	class="flex h-[100vh] items-center justify-center bg-gray-100 md:px-32 lg:px-64 px-8 text-black py-12 mt-24 md:mt-0"
>
	<div class="md:w-[1200px] flex flex-col gap-24">
		<slot />
	</div>
</main>
