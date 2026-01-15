<script lang="ts">
	import TerminalProofCard from '$lib/components/TerminalProofCard.svelte';
</script>

<svelte:head>
	<title>AI Receptionist - Paradime Tech</title>
	<meta
		name="description"
		content="Never miss another after-hours call. AI receptionist captures leads and texts you summaries instantly."
	/>
</svelte:head>

<section class="page-header">
	<div class="container-narrow">
		<div class="pixel overline">AI RECEPTIONIST</div>
		<h1>Never miss an after-hours call</h1>
		<p class="lead">
			Your AI receptionist answers calls when you're closed or busy, captures lead details, and
			texts you a clean summary instantly.
		</p>
	</div>
</section>

<section class="solution-content">
	<div class="container">
		<div class="content-grid">
			<div class="content-text">
				<h2>How it works</h2>
				<p>
					When a customer calls after hours, our AI receptionist answers professionally and gathers
					all the information you need to follow up effectively.
				</p>

				<h3>What the AI captures:</h3>
				<ul>
					<li>Customer name and contact information</li>
					<li>What they need help with</li>
					<li>Location and urgency level</li>
					<li>Best time to follow up</li>
				</ul>

				<p>
					Within seconds of the call ending, you receive a text message with all the details,
					formatted and ready for you to follow up.
				</p>

				<h3>Optional features:</h3>
				<ul>
					<li><strong>Calendar integration</strong> - Let customers book appointments directly</li>
					<li><strong>Call transfer</strong> - Forward urgent calls to your emergency line</li>
					<li><strong>Custom questions</strong> - Ask industry-specific qualifying questions</li>
				</ul>

				<div class="cta-box">
					<h3>Ready to get started?</h3>
					<p>Setup takes just a few days. Month-to-month plans available.</p>
					<a href="/contact" class="btn btn-primary btn-large">Book a demo</a>
				</div>
			</div>

			<div class="content-visual">
				<TerminalProofCard />
			</div>
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

	.content-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-3xl);
		align-items: start;
	}

	.content-text h2 {
		margin-bottom: var(--space-md);
	}

	.content-text h3 {
		margin-top: var(--space-xl);
		margin-bottom: var(--space-md);
		font-size: 1.25rem;
	}

	.content-text ul {
		margin-bottom: var(--space-lg);
	}

	.content-text li {
		margin-bottom: var(--space-sm);
		color: var(--color-ink-light);
	}

	.cta-box {
		background: var(--color-tan);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
		margin-top: var(--space-2xl);
		text-align: center;
	}

	.cta-box h3 {
		margin: 0 0 var(--space-sm) 0;
	}

	.cta-box p {
		margin-bottom: var(--space-lg);
		color: var(--color-ink-light);
	}

	@media (max-width: 968px) {
		.content-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
