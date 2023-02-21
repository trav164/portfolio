<script lang="ts">
	// added this to stop typescript beefing.
	interface FormData {
		data: {
			name: string;
			email: string;
			message: string;
		};
		errors: {
			name: string;
			email: string;
			message: string;
		};
	}
	export let form: FormData;
</script>

<div class="mx-auto sm:w-[600px] w-96 p-6">
	<h1 class="text-6xl font-bold text-brand text-center mt-12">Contact</h1>
	<p class="text-lg mt-2 text-mid text-center mb-12">
		Drop me a line and I'll get back to you as soon as possible.
	</p>
	<form method="POST" action="?/submit">
		<div class="mb-4">
			<label class="label text-white text-left block mb-2" for="name">
				<span class="label-text"> Name </span>
			</label>
			<input
				class="shadow bg-dark border border-brand rounded w-full py-2 px-3 text-mid leading-tight focus:outline-none focus:shadow-outline"
				name="name"
				type="text"
				placeholder="Name"
				value={form?.data.name ?? ''}
			/>
			<label class="label text-white text-left block mt-2" for="name">
				{#if form?.errors?.name}
					<span class="label text-red-600 text-sm">
						{form?.errors?.name[0]}
					</span>
				{/if}
			</label>
		</div>

		<div class="mb-4">
			<label class="label text-white text-left block mb-2" for="email">
				<span class="label-text"> Email </span>
			</label>
			<input
				class="shadow bg-dark border border-brand rounded w-full py-2 px-3 text-mid leading-tight focus:outline-none focus:shadow-outline"
				name="email"
				type="text"
				placeholder="Email"
				value={form?.data.email ?? ''}
			/>

			<label class="label text-white text-left block mt-2" for="email">
				{#if form?.errors?.email}
					<span class="label text-red-600 text-sm">
						{form?.errors?.email[0]}
					</span>
				{/if}
			</label>
		</div>

		<div class="mb-4">
			<label class="label text-white text-left block mb-2" for="email">
				<span class="label-text"> Message </span>
			</label>

			<textarea
				class="shadow bg-dark border border-brand rounded w-full py-2 px-3 text-mid leading-tight focus:outline-none focus:shadow-outline"
				name="message"
				rows="6"
				placeholder="Drop me a line"
				value={form?.data.message ?? ''}
			/>

			<label class="label text-white text-left block" for="message">
				{#if form?.errors?.message}
					<span class="label text-red-600 text-sm">
						{form?.errors?.message[0]}
					</span>
				{/if}
			</label>
		</div>

		<div class="flex flex-col gap-4 items-center justify-between">
			<button
				class="bg-brand text-light hover:scale-105 duration-300 tranistion-all ease-in-out w-full font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
				type="submit"
			>
				Submit
			</button>

			<a href="/" class="text-mid font-bold w-full text-center py-2 px-4 rounded ">Cancel</a>
		</div>
	</form>
</div>
