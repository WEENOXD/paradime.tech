<svelte:head>
	<title>About - Paradime Tech</title>
	<meta name="description" content="We help small businesses never miss a lead after hours." />
</svelte:head>

<section class="page-header">
	<div class="container-narrow">
		<div class="pixel overline">ABOUT US</div>
		<h1>Built for small businesses</h1>
		<p class="lead">
			We're a small team that builds tools to help local businesses capture more leads and look
			professional online.
		</p>
	</div>
</section>

<section class="about-content">
	<div class="container-narrow">
		<h2>Why we exist</h2>
		<p>
			Every business owner knows the frustration: A potential customer calls after hours. They need
			help now. They leave a voicemail or just call your competitor instead.
		</p>
		<p>
			We built Paradime Tech to solve this problem. Our AI receptionist answers when you can't,
			captures the lead details, and texts you a summary so you can follow up first thing in the
			morning.
		</p>

		<h2>Our approach</h2>
		<p>We believe small business tech should be:</p>
		<ul>
			<li><strong>Simple to set up</strong> - We handle the technical work</li>
			<li><strong>Affordable</strong> - Custom pricing for your business, call for a quote</li>
			<li><strong>Actually useful</strong> - Built to solve real problems, not add complexity</li>
			<li><strong>Backed by humans</strong> - Real support when you need help</li>
		</ul>

		<h2>Who we serve</h2>
		<p>
			Our tools are built for businesses with 1-5 people. Plumbers, HVAC techs, contractors,
			consultants, retail shops, service providers—anyone who needs to capture leads outside
			business hours.
		</p>

		<div class="cta-box">
			<h3>Ready to get started?</h3>
			<p>Let's talk about how we can help your business.</p>
			<a href="/contact" class="btn btn-primary btn-large">Contact us</a>
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

	.about-content {
		padding: var(--space-3xl) 0;
	}

	h2 {
		margin-top: var(--space-2xl);
		margin-bottom: var(--space-md);
	}

	p {
		color: var(--color-ink-light);
		line-height: 1.7;
	}

	ul {
		margin: var(--space-lg) 0;
	}

	ul li {
		margin-bottom: var(--space-sm);
		color: var(--color-ink-light);
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
	}
</style>
