<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- 	<img
		class="w-24 h-24 rounded-full shadow-xl animate-bounce transition-all duration-1000 ease-in-out cursor-pointer"
		src="https://api.dicebear.com/5.x/big-ears-neutral/svg?seed=lewis"
		alt="avatar"
	/> -->

<main class="mx-auto sm:w-[500px] w-96 p-6">
	<section>
		<div class="pt-20">
			<div class="flex p-6">
				<div class="flex flex-row gap-4">
					<img
					class="w-20 h-20 rounded-full"
					src="https://api.dicebear.com/5.x/big-ears-neutral/svg?seed=lewis"
					alt="avatar"
				/>
				<div class="flex flex-col justify-center">
					<h2 class="sm:text-4xl text-2xl font-poppins font-semibold text-brand">Lewis Travis</h2>
					<h3 class="italic font-bold text-sm text-mid">Full stack web developer.</h3>
				</div>
			</div>
		</div>
	</section>

	<section class="pt-12">
		<h3 class="text-light">About</h3>

		<div class="text-mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dignissimos incidunt distinctio fugit cupiditate quam itaque, vero voluptas eveniet ad quia fuga, odio labore aliquam a optio repellat recusandae. Suscipit.</div>
	</section>

	
	<section class="pt-12">
		<h3 class="text-light">Work Experience</h3>

		<div class="pt-6 flex gap-4 text-light text-sm leading-6">
			<div class="text-brand">2019 - present</div>
			<div class="flex flex-col">
			  <span>Software Engineer – CGI</span>
			  <span class="text-mid">Various Projects</span>
			  <span class="text-mid">TS • Angular • .NET • MongoDb • Material</span>
			</div>
		</div>

		<div class="pt-6 flex gap-4 text-light text-sm leading-6">
			<div class="text-brand">2019 - present</div>
			<div class="flex flex-col">
			  <span>Software Engineer – CGI</span>
			  <span class="text-mid">Various Projects</span>
			  <span class="text-mid">TS • Angular • .NET • MongoDb • Material</span>
			</div>
		</div>

		<div class="pt-6 flex gap-4 text-light text-sm leading-6">
			<div class="text-brand">2019 - present</div>
			<div class="flex flex-col">
			  <span>Software Engineer – CGI</span>
			  <span class="text-mid">Various Projects</span>
			  <span class="text-mid">TS • Angular • .NET • MongoDb • Material</span>
			</div>
		</div>
	</section>

	<section class="pt-12">
		<h3 class="text-light">Side Projects</h3>

		<div class="pt-6 flex gap-4 text-light text-sm leading-6">
			<div class="text-brand">Ongoing</div>
			<div class="flex flex-col">
			  <span>Portfolio</span>
			  <span class="text-mid">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, tenetur?</span>
			  <span class="text-mid">TS • SvelteKit • TailwindCSS • Supabase • Vercel</span>
			</div>
		</div>

		<div class="pt-6 flex gap-4 text-light text-sm leading-6">
			<div class="text-brand">2022</div>
			<div class="flex flex-col">
			  <span>Spot The Intro Automated</span>
			  <span class="text-mid">Various Projects</span>
			  <span class="text-mid">TS • Angular • .NET • MongoDb • Material</span>
			</div>
		</div>
	</section>

	
	<section class="pt-12">
		<h3 class="text-light">Links</h3>

		<div class="pt-6 flex gap-4 text-light text-sm leading-6">
			<div class="text-mid">Github</div>
			<div class="flex flex-col">
			  <span class="text-light">@trav164</span>
			</div>
		</div>

		<div class="pt-6 flex gap-4 text-light text-sm leading-6">
			<div class="text-mid">LinkedIn</div>
			<div class="flex flex-col">
			  <span class="text-light">@trav164</span>
			</div>
		</div>

		<div class="pt-6 flex gap-4 text-light text-sm leading-6">
			<div class="text-mid">Twitter</div>
			<div class="flex flex-col">
			  <span class="text-light">@trav164</span>
			</div>
		</div>
	</section>

</main>
