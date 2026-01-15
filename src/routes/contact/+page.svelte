<svelte:head>
	<title>Contact - Paradime Tech</title>
	<meta
		name="description"
		content="Get in touch to learn how we can help your business never miss a lead."
	/>
</svelte:head>

<section class="page-header">
	<div class="container-narrow">
		<div class="pixel overline">GET IN TOUCH</div>
		<h1>Let's talk</h1>
		<p class="lead">
			Ready to never miss a lead again? Give us a call or send an email.
		</p>
	</div>
</section>

<section class="contact-info">
	<div class="container-narrow">
		<div class="info-grid">
			<div class="info-card">
				<div class="pixel info-label">PHONE</div>
				<p><a href="tel:+17072923201">+1-707-292-3201</a></p>
				<p class="info-note">Call or text anytime</p>
			</div>

			<div class="info-card">
				<div class="pixel info-label">EMAIL</div>
				<p><a href="mailto:josephgannonai@gmail.com">josephgannonai@gmail.com</a></p>
				<p class="info-note">We respond within 24 hours</p>
			</div>

			<div class="info-card">
				<div class="pixel info-label">HOURS</div>
				<p>Monday - Friday</p>
				<p class="info-note">9 AM - 6 PM PST</p>
			</div>
		</div>
	</div>
</section>

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

	.contact-info {
		padding: var(--space-3xl) 0;
		background: var(--color-paper);
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-lg);
	}

	.info-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		padding: var(--space-lg);
		text-align: center;
	}

	.info-label {
		color: var(--color-accent);
		margin-bottom: var(--space-sm);
		font-size: 0.6875rem;
	}

	.info-card p {
		margin-bottom: 0.25rem;
		font-weight: 500;
	}

	.info-card a {
		color: var(--color-ink);
	}

	.info-card a:hover {
		color: var(--color-accent);
	}

	.info-note {
		font-size: 0.875rem;
		color: var(--color-ink-light);
		font-weight: normal;
	}

	@media (max-width: 768px) {
		.info-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
