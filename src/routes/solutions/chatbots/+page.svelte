<svelte:head>
	<title>Custom Chatbots - Paradime Tech</title>
	<meta
		name="description"
		content="AI chatbots that answer customer questions 24/7. Reduce calls and improve support."
	/>
</svelte:head>

<section class="page-header">
	<div class="container-narrow">
		<div class="pixel overline">CHATBOTS</div>
		<h1>Answer questions 24/7</h1>
		<p class="lead">
			Custom chatbots trained on your business. Answer common questions automatically and collect
			contact info from visitors.
		</p>
	</div>
</section>

<section class="solution-content">
	<div class="container-narrow">
		<h2>Stop answering the same questions</h2>
		<p>
			Most customer questions are predictable. Our chatbots handle FAQs automatically, freeing you
			up to focus on complex issues and new business.
		</p>

		<h3>What chatbots can do:</h3>
		<ul class="features-list">
			<li><strong>Answer common questions</strong> - Hours, pricing, services, locations</li>
			<li><strong>Collect contact information</strong> - Capture leads while answering questions</li>
			<li><strong>Schedule appointments</strong> - Integrate with your calendar</li>
			<li><strong>Escalate to humans</strong> - Transfer complex questions to you</li>
			<li><strong>Work everywhere</strong> - Website, Facebook Messenger, SMS</li>
		</ul>

		<h3>Perfect for:</h3>
		<div class="use-cases">
			<div class="use-case-card">
				<h4>Service businesses</h4>
				<p>Answer "How much does X cost?" and "Do you service Y area?" automatically</p>
			</div>
			<div class="use-case-card">
				<h4>Retail stores</h4>
				<p>Share hours, location, current inventory, and special offers</p>
			</div>
			<div class="use-case-card">
				<h4>Professional services</h4>
				<p>Qualify leads and schedule consultations without phone tag</p>
			</div>
		</div>

		<div class="cta-box">
			<h3>Want a custom chatbot?</h3>
			<p>Starting at $199/month + $399 setup. Includes training and updates.</p>
			<a href="/contact" class="btn btn-primary btn-large">Get started</a>
		</div>
	</div>
</section>

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

	.solution-content {
		padding: var(--space-3xl) 0;
	}

	h2 {
		margin-bottom: var(--space-md);
	}

	h3 {
		margin-top: var(--space-2xl);
		margin-bottom: var(--space-md);
		font-size: 1.25rem;
	}

	.features-list {
		list-style: none;
		margin-bottom: var(--space-xl);
	}

	.features-list li {
		padding-left: 1.5rem;
		margin-bottom: var(--space-md);
		position: relative;
	}

	.features-list li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--color-accent);
		font-weight: 700;
	}

	.use-cases {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-lg);
		margin-top: var(--space-xl);
	}

	.use-case-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		padding: var(--space-lg);
	}

	.use-case-card h4 {
		margin-bottom: var(--space-sm);
		font-size: 1.125rem;
	}

	.use-case-card p {
		margin: 0;
		color: var(--color-ink-light);
		font-size: 0.9375rem;
	}

	.cta-box {
		background: var(--color-tan);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
		margin-top: var(--space-3xl);
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 var(--space-sm) 0;
	}

	.cta-box p {
		margin-bottom: var(--space-lg);
		color: var(--color-ink-light);
	}

	@media (max-width: 768px) {
		.use-cases {
			grid-template-columns: 1fr;
		}
	}
</style>
