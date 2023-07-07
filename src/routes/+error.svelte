<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="bg-light dark:bg-dark h-screen">
	<div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
		<div class="mx-auto max-w-xl text-center">
			<h1 class="text-brand text-3xl font-extrabold sm:text-7xl">
				{$page.status}
				<strong class="text-mid dark:text-mid mt-4 font-extrabold italic sm:block sm:text-4xl">
					Well, this is embarrassing.
				</strong>
			</h1>

			<div class="mt-8 flex flex-wrap justify-center gap-4">
				<a
					class="bg-brand text-light text-md block w-full rounded px-12 py-3 font-semibold shadow hover:contrast-125 focus:outline-none focus:ring sm:w-auto"
					href="/"
				>
					Home
				</a>
			</div>
		</div>
	</div>
</main>
