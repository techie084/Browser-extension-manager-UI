<script lang="ts">
	import { fly } from 'svelte/transition';
	import { theme } from '$lib/theme.svelte';
	import { get } from 'svelte/store';

	const toggleTheme = () => {
		theme.set(get(theme) === 'dark' ? 'light' : 'dark');
	};
</script>

<nav
	class="bg-neutral800 dark:bg-neutral100 flex h-full w-full items-center justify-between rounded-xl px-4 py-2.5 shadow-md"
>
	<img src="logo.svg" alt="logo-svg" />

	<button
		class="bg-neutral700 flex cursor-pointer gap-2 rounded-xl p-4"
		aria-label="toggle theme"
		onclick={toggleTheme}
	>
		{#if get(theme) === 'dark'}
			<img in:fly={{ y: -10 }} src="icon-moon.svg" alt="icon-moon-svg" />
		{:else}
			<img in:fly={{ y: 10 }} src="icon-sun.svg" alt="icon-sun-svg" />
		{/if}
	</button>
</nav>

<!-- <style>
	* {
		display: flex;
		gap: 0.5rem;
	}
</style> -->
