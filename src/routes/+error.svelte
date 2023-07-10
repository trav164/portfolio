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
					class="flex h-10 w-40 items-center justify-center rounded bg-black font-semibold text-slate-50 outline outline-2 outline-slate-300"
					href="/"
				>
					Home
				</a>
			</div>
		</div>
	</div>
</main>
