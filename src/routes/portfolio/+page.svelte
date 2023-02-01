<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- 	<img
		class="w-24 h-24 rounded-full shadow-xl animate-bounce transition-all duration-1000 ease-in-out cursor-pointer"
		src="https://api.dicebear.com/5.x/big-ears-neutral/svg?seed=lewis"
		alt="avatar"
	/> -->

<main>
	<section class="mx-auto sm:w-1/2">
		<div class="text-light p-10 pt-20">
			<div class="flex flex-col items-center">
				<img
					class="w-20 h-20 rounded-full animate-bounce transition-all duration-1000"
					src="https://api.dicebear.com/5.x/big-ears-neutral/svg?seed=lewis"
					alt="avatar"
				/>
				<h2 class="text-4xl font-poppins font-semibold text-light">Lewis Travis</h2>
				<h3 class="italic flex font-bold text-sm text-brand">Full stack web developer.</h3>
			</div>
			<p class="pt-4 text-mid text-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis commodi velit tempore quos
				quod ex, iure error nesciunt voluptatibus repudiandae?
			</p>
		</div>
	</section>

	<section class="block mx-auto sm:w-1/2">
		<div class="text-light p-10">
			<div class="flex flex-col items-center">
				<h2 class="font-bold text-brand italic">about.</h2>
			</div>
			<p class="pt-4 text-mid text-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis commodi velit tempore quos
				quod ex, iure error nesciunt voluptatibus repudiandae?
			</p>
		</div>
	</section>
</main>
