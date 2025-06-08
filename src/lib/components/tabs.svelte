<script lang="ts">
	let { onToggle } = $props();

	// tabs array object
	let tabs = $state([
		{ name: 'All', id: 0 },
		{ name: 'Active', id: 1 },
		{ name: 'Inactive', id: 2 }
	]);

	let activeBtn: number | null = $state(tabs[0].id);

	let showActive = $state<boolean>(true);

	let handleToggle = () => {
		showActive = !showActive;
		onToggle(showActive);
	};

	// function for active btn
	let handleClick = (id: number) => {
		activeBtn = activeBtn === id ? null : id;
		onToggle(showActive, id);
	};

	// Accepting data as props from card component
</script>

<main
	class="mt-10 flex h-full w-full flex-col items-center justify-between dark:text-neutral900 sm:flex-row"
>
	<h2 class="text-4xl font-black dark:text-neutral900">Extensions List</h2>
	<div class="my-6 flex items-center gap-4">
		{#each tabs as tab}
			<button
				class={`rounded-3xl border border-neutral600 px-4 py-2 text-xl 
								${activeBtn === tab.id ? 'border-red700 bg-red700' : 'bg-neutral700'}`}
				aria-label="true"
				onclick={() => handleClick(tab.id)}>{tab.name}</button
			>
		{/each}
	</div>
</main>
