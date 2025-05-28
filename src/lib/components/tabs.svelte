<script lang="ts">
	const tabs = [
		{ title: 'All', id: 0 },
		{ title: 'Active', id: 1 },
		{ title: 'Inactive', id: 2 }
	];

	let activeBtn = tabs.forEach((tab) => {
		console.log(tab.id === 1, 'now');
	});
</script>

<main
	class="dark:text-neutral900 mt-10 flex h-full w-full flex-col items-center justify-between sm:flex-row"
>
	<h2 class="dark:text-neutral900 text-4xl font-black">Extensions List</h2>
	<div class="my-6 flex items-center gap-4">
		{#each tabs as tab}
			<button
				class="border-neutral600 bg-neutral700 rounded-3xl border px-4 py-2 text-xl"
				aria-label="true">{tab.title}</button
			>
		{/each}
	</div>
</main>
