<script lang="ts">
	import type { ActionData, PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';

	export let data: PageData;

	const { form, errors, enhance } = superForm(data.form, {
		taintedMessage: 'Are you sure you want to leave?'
	});
</script>

<svelte:head>
	<title>Lewis Travis - Contact</title>
	<meta
		name="description"
		content="A simple contact page which users can use to contact me about anything that might be related from the website."
	/>
</svelte:head>

<div class="mx-auto sm:w-[600px] w-96 p-6">
	<h1 class="text-6xl font-bold text-brand text-center mt-12">Contact</h1>
	<p class="text-lg mt-2 text-dark dark:text-mid text-center mb-12">
		Drop me a line and I'll get back to you as soon as possible.
	</p>
	<form use:enhance method="POST" action="?/submit">
		<div class="mb-4">
			<label class="label text-dark dark:text-white text-left block mb-2" for="name">
				<span class="label-text"> Name </span>
			</label>
			<input
				class="shadow-lg bg-light dark:bg-dark border border-brand rounded w-full py-2 px-3 text-dark dark:text-mid leading-tight focus:outline-none focus:shadow-outline focus:ring focus:ring-brand"
				name="name"
				type="text"
				placeholder="Name"
			/>
			{#if $errors.name}
				<small class="text-red-500 font-semibold">{$errors.name}</small>
			{/if}
		</div>

		<div class="mb-4">
			<label class="label text-dark dark:text-white text-left block mb-2" for="email">
				<span class="label-text"> Email </span>
			</label>
			<input
				class="shadow-lg bg-light dark:bg-dark border border-brand rounded w-full py-2 px-3 text-dark dark:text-mid leading-tight focus:outline-none focus:shadow-outline focus:ring focus:ring-brand"
				name="email"
				type="text"
				placeholder="Email"
			/>

			{#if $errors.email}
				<small class="text-red-500 font-semibold">{$errors.email}</small>
			{/if}
		</div>

		<div class="mb-4">
			<label class="label text-dark dark:text-white text-left block mb-2" for="email">
				<span class="label-text"> Message </span>
			</label>

			<textarea
				class="shadow-lg bg-light dark:bg-dark border border-brand rounded w-full py-2 px-3 text-dark dark:text-mid leading-tight focus:outline-none focus:shadow-outline focus:ring focus:ring-brand"
				name="message"
				rows="6"
				placeholder="Drop me a line"
			/>

			{#if $errors.message}
				<small class="text-red-500 font-semibold">{$errors.message}</small>
			{/if}
		</div>

		<div class="flex flex-col gap-4 items-center justify-between">
			<button
				class="bg-brand shadow-lg text-light outline outline-2 outline-brand w-full font-semibold py-2 px-4 rounded focus:outline-none mx-auto hover:bg-brandLighter"
				type="submit"
			>
				Submit
			</button>

			<a
				href="/"
				class="text-dark dark:text-mid font-bold w-full outline outline-2 outline-slate-200 dark:outline-slate-700 dark:hover:bg-darkLighter hover:bg-slate-100 text-center py-2 px-4 rounded focus:outline-none focus:ring focus:ring-brand"
				>Cancel</a
			>
		</div>
	</form>
</div>
