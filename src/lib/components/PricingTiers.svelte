<script lang="ts">
	const tiers = [
		{
			name: 'Starter',
			price: '$149',
			setup: '$299',
			description: 'Perfect for testing the waters',
			features: [
				'After-hours call answering',
				'Text summaries to one number',
				'Basic lead capture',
				'Email support',
				'Month-to-month'
			],
			cta: 'Get started',
			popular: false
		},
		{
			name: 'Growth',
			price: '$299',
			setup: '$499',
			description: 'For businesses ready to scale',
			features: [
				'Everything in Starter',
				'Calendar integration',
				'Appointment scheduling',
				'Multi-number forwarding',
				'Call transfer option',
				'Priority support'
			],
			cta: 'Get started',
			popular: true
		},
		{
			name: 'Never Miss a Lead',
			price: '$499',
			setup: '$699',
			description: 'Complete coverage solution',
			features: [
				'Everything in Growth',
				'24/7 call answering (business hours too)',
				'Custom AI training',
				'Advanced routing',
				'Dedicated account manager',
				'Custom integrations'
			],
			cta: 'Contact us',
			popular: false
		}
	];
</script>

<section class="pricing">
	<div class="container">
		<h2>Simple, transparent pricing</h2>
		<p class="pricing-subtitle">No hidden fees. Cancel anytime with 30 days notice.</p>

		<div class="pricing-grid">
			{#each tiers as tier}
				<div class="card pricing-card" class:popular={tier.popular}>
					{#if tier.popular}
						<div class="popular-badge pixel">MOST POPULAR</div>
					{/if}
					<h3>{tier.name}</h3>
					<p class="tier-description">{tier.description}</p>
					<div class="pricing-amount">
						<span class="price">{tier.price}</span>
						<span class="period">/month</span>
					</div>
					<p class="setup-fee pixel">Setup: {tier.setup}</p>

					<ul class="features-list">
						{#each tier.features as feature}
							<li>{feature}</li>
						{/each}
					</ul>

					<a
						href="/contact"
						class="btn"
						class:btn-primary={tier.popular}
						class:btn-secondary={!tier.popular}
					>
						{tier.cta}
					</a>
				</div>
			{/each}
		</div>

		<div class="add-ons">
			<h3>Add-ons</h3>
			<div class="add-ons-grid">
				<div class="add-on-item">
					<strong>Additional phone numbers</strong>
					<span>+$49/month each</span>
				</div>
				<div class="add-on-item">
					<strong>Website build</strong>
					<span>From $999 one-time</span>
				</div>
				<div class="add-on-item">
					<strong>Custom chatbot</strong>
					<span>$199/month + $399 setup</span>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.pricing {
		background: var(--color-paper);
	}

	h2 {
		text-align: center;
		margin-bottom: var(--space-sm);
	}

	.pricing-subtitle {
		text-align: center;
		color: var(--color-ink-light);
		margin-bottom: var(--space-2xl);
	}

	.pricing-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-lg);
		margin-bottom: var(--space-3xl);
	}

	.pricing-card {
		position: relative;
		display: flex;
		flex-direction: column;
		padding: var(--space-xl);
	}

	.pricing-card.popular {
		border-color: var(--color-accent);
		border-width: 2px;
		box-shadow: var(--shadow-lg);
	}

	.popular-badge {
		position: absolute;
		top: -12px;
		left: 50%;
		transform: translateX(-50%);
		background: var(--color-accent);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius-sm);
		font-size: 0.6875rem;
	}

	.pricing-card h3 {
		margin-bottom: var(--space-xs);
		font-size: 1.5rem;
	}

	.tier-description {
		color: var(--color-ink-light);
		font-size: 0.875rem;
		margin-bottom: var(--space-lg);
	}

	.pricing-amount {
		margin-bottom: var(--space-xs);
	}

	.price {
		font-size: 2.5rem;
		font-weight: 700;
	}

	.period {
		color: var(--color-ink-light);
		font-size: 1rem;
	}

	.setup-fee {
		color: var(--color-ink-light);
		font-size: 0.75rem;
		margin-bottom: var(--space-lg);
	}

	.features-list {
		list-style: none;
		margin-bottom: var(--space-lg);
		flex-grow: 1;
	}

	.features-list li {
		padding-left: 1.5rem;
		margin-bottom: var(--space-sm);
		position: relative;
		font-size: 0.9375rem;
	}

	.features-list li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--color-accent);
		font-weight: 700;
	}

	.add-ons {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
	}

	.add-ons h3 {
		text-align: center;
		margin-bottom: var(--space-lg);
	}

	.add-ons-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-lg);
	}

	.add-on-item {
		display: flex;
		flex-direction: column;
		gap: var(--space-xs);
		padding: var(--space-md);
		background: var(--color-paper);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
	}

	.add-on-item strong {
		font-weight: 500;
	}

	.add-on-item span {
		color: var(--color-accent);
		font-weight: 500;
		font-size: 0.9375rem;
	}

	@media (max-width: 968px) {
		.pricing-grid {
			grid-template-columns: 1fr;
		}

		.add-ons-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
