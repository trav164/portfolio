<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="mx-auto sm:w-[500px] w-96 p-6">
	<section>
		<div class="pt-20">
			<div class="flex">
				<div class="flex flex-row gap-4">
					<img
					class="w-20 h-20 rounded"
					src="https://api.dicebear.com/5.x/big-ears-neutral/svg?seed=lewis"
					alt="avatar"
				/>
				<div class="flex flex-col justify-center">
					<h2 class="sm:text-4xl text-2xl font-poppins font-semibold text-light">Lewis Travis</h2>
					<h3 class="italic font-bold text-sm text-mid">Fullstack Web Developer</h3>
				</div>
			</div>
		</div>
	</section>

	<section class="pt-12">
		<h3 class="text-light">About</h3>

		<div class="pt-4 text-mid">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dignissimos incidunt distinctio fugit cupiditate quam itaque, vero voluptas eveniet ad quia fuga, odio labore aliquam a optio repellat recusandae. Suscipit.</div>
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
			  <span>Intern – Sheffield Forgemasters International</span>
			  <span class="text-mid">Internal NDT logging system</span>
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
			  <span>
				<a class="underline" href="http://spot-the-intro.lewistravis.co.uk">
					Spot The Intro
					<svg
					class="text-white h-4 mb-1 w-4 inline-block ml-2 underline"
  
   viewBox="0 -256 1850 1850"
   id="svg3025"
   version="1.1"
   width="100%"
   height="100%">
  <defs
     id="defs3033" />

  <g
     transform="matrix(1,0,0,-1,30.372881,1426.9492)"
     id="g3027">
    <path
       d="M 1408,608 V 288 Q 1408,169 1323.5,84.5 1239,0 1120,0 H 288 Q 169,0 84.5,84.5 0,169 0,288 v 832 Q 0,1239 84.5,1323.5 169,1408 288,1408 h 704 q 14,0 23,-9 9,-9 9,-23 v -64 q 0,-14 -9,-23 -9,-9 -23,-9 H 288 q -66,0 -113,-47 -47,-47 -47,-113 V 288 q 0,-66 47,-113 47,-47 113,-47 h 832 q 66,0 113,47 47,47 47,113 v 320 q 0,14 9,23 9,9 23,9 h 64 q 14,0 23,-9 9,-9 9,-23 z m 384,864 V 960 q 0,-26 -19,-45 -19,-19 -45,-19 -26,0 -45,19 L 1507,1091 855,439 q -10,-10 -23,-10 -13,0 -23,10 L 695,553 q -10,10 -10,23 0,13 10,23 l 652,652 -176,176 q -19,19 -19,45 0,26 19,45 19,19 45,19 h 512 q 26,0 45,-19 19,-19 19,-45 z"
       id="path3029"
       style="fill:currentColor" />
  </g>
</svg>
			  </a>

			</span>
			  <span class="text-mid">Enhancing Spot The Intro game created by Cheatwell Games by automating song searching.</span>
			  <span class="text-mid">TS • SvelteKit • TailwindCSS • Supabase • Vercel</span>
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
			  <span class="text-light">@lewistravis</span>
			</div>
		</div>
	</section>

</main>
