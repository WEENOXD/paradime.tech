<script lang="ts">
	import type { LayoutData } from './$types';
	import '$lib/styles/global.css';

	let { children, data } = $props<{ children: any; data?: LayoutData }>();

	// Add fonts-loaded class once fonts are loaded
	if (typeof window !== 'undefined') {
		document.fonts.ready.then(() => {
			document.documentElement.classList.add('fonts-loaded');
		});
	}
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{@render children()}

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
			'Ubuntu', 'Cantarell', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(::selection) {
		background-color: #667eea;
		color: #ffffff;
	}
</style>
