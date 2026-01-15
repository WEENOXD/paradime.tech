<section class="how-it-works">
	<div class="container-narrow">
		<h2>How it works</h2>
		<div class="steps">
			<div class="step">
				<div class="step-number pixel">01</div>
				<h3>We learn your business</h3>
				<p>
					Quick call to understand how you answer phones, what questions customers ask, and how you
					want leads handled.
				</p>
			</div>

			<div class="step">
				<div class="step-number pixel">02</div>
				<h3>We install & train the AI</h3>
				<p>
					We configure the receptionist to sound like your business, capture the right info, and
					forward leads how you want them.
				</p>
			</div>

			<div class="step">
				<div class="step-number pixel">03</div>
				<h3>You get every lead</h3>
				<p>
					After hours calls are answered professionally. You get a text summary within seconds.
					Never miss an opportunity again.
				</p>
			</div>
		</div>
	</div>
</section>

<style>
	.how-it-works {
		background: var(--color-paper);
	}

	h2 {
		text-align: center;
		margin-bottom: var(--space-2xl);
	}

	.steps {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-xl);
	}

	.step {
		text-align: center;
	}

	.step-number {
		display: inline-block;
		font-size: 2rem;
		color: var(--color-accent);
		margin-bottom: var(--space-md);
	}

	.step h3 {
		margin-bottom: var(--space-sm);
		font-size: 1.25rem;
	}

	.step p {
		margin: 0;
		color: var(--color-ink-light);
		font-size: 0.9375rem;
	}

	@media (max-width: 768px) {
		.steps {
			grid-template-columns: 1fr;
			gap: var(--space-2xl);
		}
	}
</style>
