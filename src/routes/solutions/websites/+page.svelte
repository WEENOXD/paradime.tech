<svelte:head>
	<title>Modern Websites - Paradime Tech</title>
	<meta
		name="description"
		content="Fast, mobile-friendly websites built for small businesses. SEO optimized and easy to update."
	/>
</svelte:head>

<section class="page-header">
	<div class="container-narrow">
		<div class="pixel overline">WEBSITES</div>
		<h1>Look professional online</h1>
		<p class="lead">
			Clean, fast websites that work on every device. Built to convert visitors into customers and
			rank well on Google.
		</p>
	</div>
</section>

<section class="solution-content">
	<div class="container-narrow">
		<h2>What you get</h2>
		<p>
			Your website is your digital storefront. We build sites that load fast, look great on phones,
			and make it easy for customers to contact you.
		</p>

		<h3>Included features:</h3>
		<ul class="features-list">
			<li><strong>Mobile-responsive design</strong> - Looks perfect on any screen size</li>
			<li><strong>Lightning-fast loading</strong> - Hosted on modern infrastructure</li>
			<li><strong>SEO optimized</strong> - Structured for search engines from day one</li>
			<li><strong>Contact forms</strong> - Let customers reach you easily</li>
			<li><strong>Google My Business integration</strong> - Connect all your online presence</li>
			<li><strong>Easy updates</strong> - We handle changes when you need them</li>
		</ul>

		<h3>Our process:</h3>
		<div class="process-steps">
			<div class="process-step">
				<div class="step-number pixel">01</div>
				<h4>Discovery call</h4>
				<p>We learn about your business, target customers, and goals.</p>
			</div>
			<div class="process-step">
				<div class="step-number pixel">02</div>
				<h4>Design & build</h4>
				<p>We create your site and share a preview for your feedback.</p>
			</div>
			<div class="process-step">
				<div class="step-number pixel">03</div>
				<h4>Launch & support</h4>
				<p>We publish your site and provide ongoing updates as needed.</p>
			</div>
		</div>

		<div class="cta-box">
			<h3>Ready for a professional website?</h3>
			<p>Custom builds start at $999. Hosting and updates included for the first year.</p>
			<a href="/contact" class="btn btn-primary btn-large">Request a quote</a>
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

	.process-steps {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-lg);
		margin-top: var(--space-xl);
	}

	.process-step {
		text-align: center;
	}

	.step-number {
		font-size: 1.5rem;
		color: var(--color-accent);
		margin-bottom: var(--space-sm);
	}

	.process-step h4 {
		margin-bottom: var(--space-xs);
	}

	.process-step p {
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
		.process-steps {
			grid-template-columns: 1fr;
		}
	}
</style>
