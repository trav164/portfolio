<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="flex bg-dark justify-center">
	<div class="w-1/2 h-screen mt-24 mb-24">
		<!-- HEADER -->
		<div class="block sm:flex sm:text-center sm:justify-center">
			<img
				class="w-24 h-24 rounded-full shadow-xl animate-bounce transition-all duration-1000 ease-in-out cursor-pointer"
				src="https://api.dicebear.com/5.x/big-ears-neutral/svg?seed=lewis"
				alt="avatar"
			/>
			<div class="block mt-4 ml-4">
				<h1 class="font-bebas text-3xl text-brand">Lewis Travis</h1>
				<p class="block italic font-bold -mt-1 text-mid">Full Stack Web Developer</p>
				<a href="https://www.lewistravis.co.uk" class="block text-mid underline hover:text-brand"
					>profile</a
				>
			</div>
		</div>

		<!-- ABOUT -->
		<div class="flex flex-row mt-6">
			<div class="block mt-4 ml-4">
				<h1 class="text-brand">about</h1>
				<p class="block text-light">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sint quasi iusto
					alias explicabo necessitatibus? Veniam, tempora maiores eum facere dolorem, animi at
					perspiciatis suscipit adipisci alias optio, ipsum quae.
				</p>
			</div>
		</div>

		<!-- EXPERIENCE -->
		<div class="flex flex-row mt-6">
			<div class="block mt-4 ml-4">
				<h1 class="text-brand">experience</h1>
				<p class="block text-light">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sint quasi iusto
					alias explicabo necessitatibus? Veniam, tempora maiores eum facere dolorem, animi at
					perspiciatis suscipit adipisci alias optio, ipsum quae.
				</p>
			</div>
		</div>
	</div>
</div>
