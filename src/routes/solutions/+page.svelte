<script lang="ts">
	import Solutions from '$lib/components/Solutions.svelte';
</script>

<svelte:head>
	<title>Our Solutions - Paradime Tech</title>
	<meta
		name="description"
		content="AI receptionist, websites, and chatbots built for small businesses."
	/>
</svelte:head>

<section class="page-header">
	<div class="container-narrow">
		<div class="pixel overline">SOLUTIONS OVERVIEW</div>
		<h1>Everything you need to grow</h1>
		<p class="lead">
			We build tools that help small businesses capture more leads, look professional online, and
			support customers 24/7.
		</p>
	</div>
</section>

<Solutions />

<style>
	.page-header {
		padding: var(--space-3xl) 0 var(--space-2xl);
		text-align: center;
	}

	.overline {
		color: var(--color-accent);
		margin-bottom: var(--space-sm);
	}

	.lead {
		font-size: 1.125rem;
		color: var(--color-ink-light);
		margin: 0;
		max-width: 640px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
