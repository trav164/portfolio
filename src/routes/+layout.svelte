<script>
	import '../app.css';
</script>

<main class="bg-gray-100 text-gray-700 lowercase">
	<div class="flex flex-col min-h-screen">
		<nav class="max-w-5xl mx-auto p-6 w-full flex items-center justify-between">
			<span class="text-2xl font-semibold">Lewis.</span>

			<ul class="flex flex-row gap-2 text-sm">
				<li>About</li>
				<li>Projects</li>
			</ul>
		</nav>

		<!-- Content -->
		<div class="mx-auto grow max-w-5xl px-6 flex flex-col gap-24">
			<slot />
		</div>
	</div>
</main>
