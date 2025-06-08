<script lang="ts">
	let { filterId, toggle } = $props();

	// card array objects
	let cards = $state([
		{
			id: 0,
			title: 'DevLens',
			description: 'Quickly inspect page layout and visualize element boundaries.',
			image: 'logo-devlens.svg'
		},
		{
			id: 1,
			title: 'StyleSpy',
			description: 'Instantly analyze and copy CSS from any webpage element.',
			image: 'logo-style-spy.svg'
		},
		{
			id: 2,
			title: 'SpeedBoost',
			description: 'Optimize browser resource usage to accelerate page loading.',
			image: 'logo-speed-boost.svg'
		},
		{
			id: 3,
			title: 'JSONWizard',
			description: 'Format, validate, and prettifiesJSON response in-browser.',
			image: 'logo-json-wizard.svg'
		},
		{
			id: 4,
			title: 'TabMaster Pro',
			description: 'Organizes browser tabs in groups and sessions.',
			image: 'logo-tab-master-pro.svg'
		},
		{
			id: 5,
			title: 'ViewportBuddy',
			description: 'Simulates various screen resolution directly within the browser.',
			image: 'logo-viewport-buddy.svg'
		},
		{
			id: 6,
			title: 'Markup Notes',
			description:
				'enables annotation and nots directly onto webpages for collaborative debugging.',
			image: 'logo-markup-notes.svg'
		},
		{
			id: 7,
			title: 'GridGuides',
			description: 'Overlay customizable grids and alignment guides on any webpage.',
			image: 'logo-grid-guides.svg'
		},
		{
			id: 8,
			title: 'Palette Picker',
			description: 'Instantly extract color palettes from any webpage.',
			image: 'logo-palette-picker.svg'
		},
		{
			id: 9,
			title: 'LinkChecker',
			description: 'Scans and highlight broken links on any page.',
			image: 'logo-link-checker.svg'
		},
		{
			id: 10,
			title: 'DOM Script',
			description: 'Capture and export DOM structures quickly.',
			image: 'logo-dom-snapshot.svg'
		},
		{
			id: 11,
			title: 'ConsolePlus',
			description: 'enhanced developer console with advanced filtering and logging.',
			image: 'logo-console-plus.svg'
		}
	]);

	// toggle state for toggle switch
	let checked = $state<boolean>(false);

	// Remove single card function
	const removeCard = (id: number) => {
		cards = cards.filter((card) => card.id !== id);
	};

	// Add another functionality for adding back the removed card
	// let filterTabs = (id: number) => {
	// 	cards = cards.filter((card) => card.id !== id);
	// };

	let filterCards = $derived(
		cards.filter((card) => {
			if (!toggle) return true;
			return card.id === filterId;
		})
	);
</script>

<section
	class="flex h-full w-full flex-col items-center gap-4 border-neutral700 dark:text-neutral900 sm:grid sm:grid-cols-2 lg:grid-cols-3"
>
	{#each cards as card}
		<div
			class="flex h-full w-full flex-col items-center justify-between gap-3 rounded-xl bg-neutral800 p-6 shadow-md dark:bg-neutral100"
		>
			<div class="flex items-start gap-3">
				<img src={card.image} alt={card.image} />
				<div class="">
					<h2 class="font-bold">{card.title}</h2>
					<p>{card.description}</p>
				</div>
			</div>
			<div class="mt-6 flex w-full justify-between">
				<button
					class="rounded-3xl border border-neutral600 px-4 py-2"
					aria-label="true"
					onclick={() => removeCard(card.id)}>Remove</button
				>
				<!-- toggle Switch button -->
				<label class="relative h-8 w-14 cursor-pointer rounded-full bg-neutral700">
					<input type="checkbox" class="peer sr-only" bind:checked />
					<span
						class="h-full w-full rounded-full bg-neutral600 transition-colors duration-300 peer-checked:bg-red500"
					></span>
					<span
						class={`absolute right-1 top-1 h-6 w-6 rounded-full bg-neutral0 shadow-md transition-all duration-300 ${'peer-checked:-translate-x-6 peer-active:w-12 peer-checked:peer-active:translate-x-2'}`}
					></span>
				</label>
			</div>
		</div>
	{/each}
</section>
<!-- site cookies -->
<!-- 🍪 We use cookies to analyze website traffic and help improve our visitor experience -->
