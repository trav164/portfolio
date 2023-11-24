<script lang="ts">
	let isSoft = false;

	let handleChange = () => {
		isSoft = !isSoft;
	};
</script>

<div class="flex flex-col mt-8">
	<!-- Toggle B -->
	<div class="flex items-center justify-center w-full mb-12">
		<label for="toggleB" class="flex items-center cursor-pointer">
			<!-- label -->
			<div class=" text-black font-medium mr-4">Technical Skills</div>
			<!-- toggle -->
			<div class="relative">
				<!-- input -->
				<input
					on:change={handleChange}
					value={isSoft}
					type="checkbox"
					id="toggleB"
					class="sr-only"
				/>
				<!-- line -->
				<div class="block bg-black w-14 h-8 rounded-full" />
				<!-- dot -->
				<div class="dot absolute left-1 top-1 bg-[#d9ff72] w-6 h-6 rounded-full transition" />
			</div>
			<!-- label -->
			<div class="ml-4 text-black font-medium">Soft Skills</div>
		</label>
	</div>

	<div class="grid grid-cols-2 md:grid-cols-3 gap-4 -mt-4">
		{#if isSoft}
			<div class="p-6 bg-zinc-200 rounded outline outline-2 outline-zinc-300">
				<p class="font-semibold">Title</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="p-6 bg-zinc-200 rounded outline outline-2 outline-zinc-300">
				<p class="font-semibold">Title</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="p-6 bg-zinc-200 rounded outline outline-2 outline-zinc-300">
				<p class="font-semibold">Title</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="p-6 bg-zinc-200 rounded outline outline-2 outline-zinc-300">
				<p class="font-semibold">Title</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="p-6 bg-zinc-200 rounded outline outline-2 outline-zinc-300">
				<p class="font-semibold">Title</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="p-6 bg-zinc-200 rounded outline outline-2 outline-zinc-300">
				<p class="font-semibold">Title</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
		{:else}
			<div class="p-6 bg-emerald-200 rounded outline outline-2 outline-zinc-300">
				<p class="font-semibold">Title</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="p-6 bg-emerald-200 rounded outline outline-2 outline-zinc-300">
				<p class="font-semibold">Title</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="p-6 bg-emerald-200 rounded outline outline-2 outline-zinc-300">
				<p class="font-semibold">Title</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="p-6 bg-emerald-200 rounded outline outline-2 outline-zinc-300">
				<p class="font-semibold">Title</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="p-6 bg-emerald-200 rounded outline outline-2 outline-zinc-300">
				<p class="font-semibold">Title</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<div class="p-6 bg-emerald-200 rounded outline outline-2 outline-zinc-300">
				<p class="font-semibold">Title</p>
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
		{/if}
	</div>
</div>

<style>
	/* Toggle B */
	input:checked ~ .dot {
		transform: translateX(100%);
		background-color: #d9ff72;
	}
</style>
