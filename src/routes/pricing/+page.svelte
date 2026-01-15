<script lang="ts">
	import PricingTiers from '$lib/components/PricingTiers.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
</script>

<svelte:head>
	<title>Pricing - Paradime Tech</title>
	<meta
		name="description"
		content="Simple, transparent pricing for AI receptionist, websites, and chatbots. No hidden fees."
	/>
</svelte:head>

<section class="page-header">
	<div class="container-narrow">
		<div class="pixel overline">PRICING</div>
		<h1>Choose your plan</h1>
		<p class="lead">
			No long-term contracts. Month-to-month available. All plans include human support and can be
			canceled with 30 days notice.
		</p>
	</div>
</section>

<PricingTiers />
<FAQ />

<style>
	.page-header {
		padding: var(--space-3xl) 0 var(--space-2xl);
		text-align: center;
		background: var(--color-surface);
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
