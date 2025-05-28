import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const stored = browser ? localStorage.getItem('theme') : null;
export const theme = writable<'light' | 'dark'>(stored as 'light' | 'dark');

if (browser) {
	theme.subscribe((value) => {
		const root = document.documentElement;
		if (value === 'dark') {
			root.classList.add('dark');
		} else {
			root.classList.remove('dark');
		}
		localStorage.setItem('theme', value);
	});
}
