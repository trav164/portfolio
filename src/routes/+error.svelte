<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="bg-dark h-screen">
	<div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
		<div class="mx-auto max-w-xl text-center">
			<h1 class="text-3xl font-extrabold sm:text-7xl text-brand">
				{$page.status}
				<strong class="mt-4 font-extrabold text-mid sm:block sm:text-4xl italic">
					Well, this is embarrassing.
				</strong>
			</h1>

			<p class="mt-4 sm:text-xl sm:leading-relaxed text-mid">
				{$page.error?.message}
			</p>

			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<a
					class="block w-full rounded bg-brand text-light px-12 py-3 text-sm font-medium shadow hover:contrast-125 focus:outline-none focus:ring sm:w-auto"
					href="/"
				>
					Home
				</a>
			</div>
		</div>
	</div>
</main>
