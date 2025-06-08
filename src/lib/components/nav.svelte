<script lang="ts">
	import { fly } from 'svelte/transition';
	import { theme } from '$lib/theme.svelte';
	import { get } from 'svelte/store';

	const toggleTheme = () => {
		theme.set(get(theme) === 'dark' ? 'light' : 'dark');
	};
</script>

<nav
	class="flex h-full w-full items-center justify-between rounded-xl bg-neutral800 px-4 py-2.5 shadow-md dark:bg-neutral100"
>
	<img src="logo.svg" alt="logo-svg" />

	<button
		class="flex cursor-pointer gap-2 rounded-xl bg-neutral700 p-4"
		aria-label="toggle theme"
		onclick={toggleTheme}
	>
		{#if get(theme) === 'light'}
			<img in:fly={{ y: 10 }} src="icon-sun.svg" alt="icon-sun-svg" />
		{:else}
			<img in:fly={{ y: -10 }} src="icon-moon.svg" alt="icon-moon-svg" />
		{/if}
	</button>
</nav>

<!-- <style>
	* {
		display: flex;
		gap: 0.5rem;
	}
</style> -->
