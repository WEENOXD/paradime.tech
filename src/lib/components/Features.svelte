<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const features = [
		{
			title: 'After-Hours Coverage',
			description:
				"We answer calls when your business is closed. Nights, weekends, holidays—whenever you're unavailable."
		},
		{
			title: 'Lead Information Capture',
			description:
				'We ask callers for their name, contact info, and what they need. You get all the details to follow up.'
		},
		{
			title: 'Email & SMS Delivery',
			description:
				'Lead details are sent to you immediately via email or text message. No login required.'
		},
		{
			title: 'Custom Questions',
			description:
				"Tell us what information you need from callers. We'll ask the questions that matter to your business."
		},
		{
			title: 'Simple Setup',
			description:
				"Forward your business calls to our number when you're away. That's it. No complex integration needed."
		},
		{
			title: 'Straightforward Pricing',
			description:
				"Pay for what you use. No long-term contracts. Cancel anytime if it's not working for you."
		}
	];
</script>

<section class="features" id="features">
	<div class="container">
		<div class="section-header" in:fade={{ duration: 600 }}>
			<h2>What We Do</h2>
			<p class="section-subtitle">A simple answering service for when you can't pick up the phone</p>
		</div>

		<div class="features-grid">
			{#each features as feature, i}
				<div
					class="feature-card"
					in:fly={{ y: 30, duration: 600, delay: 100 + i * 80, easing: quintOut }}
				>
					<h3>{feature.title}</h3>
					<p>{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.features {
		padding: 6rem 0;
		background: var(--color-background);
	}

	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.section-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	h2 {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-bottom: 1rem;
		color: var(--color-text-primary);
	}

	.section-subtitle {
		font-size: 1.125rem;
		color: var(--color-text-secondary);
		max-width: 42rem;
		margin: 0 auto;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 2rem;
	}

	.feature-card {
		padding: 2rem;
		background: var(--color-background-alt);
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border);
		transition: all 0.3s ease;
	}

	.feature-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--color-border-hover);
	}

	h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
		color: var(--color-text-primary);
	}

	p {
		font-size: 1rem;
		color: var(--color-text-secondary);
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.features {
			padding: 4rem 0;
		}

		.features-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.feature-card {
			padding: 1.5rem;
		}
	}
</style>
