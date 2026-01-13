<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const steps = [
		{
			number: 1,
			title: 'Forward Your Calls',
			description:
				"Set up call forwarding from your business line to our number when you're unavailable. Most phones support this natively."
		},
		{
			number: 2,
			title: 'We Answer',
			description:
				'When someone calls, we answer professionally and ask them for their information and what they need help with.'
		},
		{
			number: 3,
			title: 'Information Collected',
			description:
				'We gather the details you specified: name, contact info, service interest, timeline, budget—whatever matters to your business.'
		},
		{
			number: 4,
			title: 'Lead Delivered',
			description:
				'You receive the complete lead details via email or SMS immediately. No dashboard login required.'
		}
	];
</script>

<section class="how-it-works" id="how-it-works">
	<div class="container">
		<div class="section-header" in:fade={{ duration: 600 }}>
			<h2>How It Works</h2>
			<p class="section-subtitle">Simple setup, automatic lead capture</p>
		</div>

		<div class="steps-container">
			{#each steps as step, i}
				<div class="step" in:fly={{ y: 30, duration: 600, delay: 100 + i * 100, easing: quintOut }}>
					<div class="step-number">{step.number}</div>
					<div class="step-content">
						<h3>{step.title}</h3>
						<p>{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.how-it-works {
		padding: 6rem 0;
		background: var(--color-background-alt);
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

	.steps-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		max-width: 70rem;
		margin: 0 auto;
	}

	.step {
		text-align: center;
		padding: 2rem;
		background: var(--color-background);
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border);
		transition: all 0.3s ease;
	}

	.step:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--color-border-hover);
	}

	.step-number {
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		background: var(--color-accent);
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: 700;
		margin: 0 auto 1.5rem;
	}

	.step-content h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
		color: var(--color-text-primary);
	}

	.step-content p {
		font-size: 1rem;
		color: var(--color-text-secondary);
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.how-it-works {
			padding: 4rem 0;
		}

		.steps-container {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.step {
			padding: 1.5rem;
		}
	}
</style>
