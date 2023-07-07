<script>
	import Footer from './Footer.svelte';
</script>

<div class="mx-auto flex h-screen max-w-xl flex-col items-center justify-center gap-8">
	<span class="w-full text-center text-2xl font-semibold">get in touch</span>
	<p class="-mt-6 w-full text-center font-thin">
		Drop me a line and I'll get back to you as soon as possible.
	</p>
	<input
		class="w-full rounded p-3 outline outline-2 outline-slate-300 focus:outline-black"
		type="text"
		placeholder="your name..."
	/>

	<input
		class="w-full rounded p-3 outline outline-2 outline-slate-300 focus:outline-black"
		type="email"
		placeholder="your email..."
	/>

	<textarea
		class="w-full rounded p-3 outline outline-2 outline-slate-300 focus:outline-black"
		rows="5"
		placeholder="your message..."
	/>

	<!-- <button
		class={`h-10 w-40 rounded text-slate-400 outline outline-2 outline-slate-300 ${
			isTechnical ? 'bg-black text-slate-50 hover:bg-slate-900' : 'hover:bg-slate-100'
		}`}>Submit</button
	> -->
	<button
		class="w-full rounded bg-black p-3 font-semibold tracking-wide text-slate-50 outline outline-2 outline-slate-300 hover:bg-slate-900"
		>Submit</button
	>

	<Footer />
</div>
