<script lang="ts">
	import { ASCII_BG } from '$lib/ascii';
	import TerminalProofCard from './TerminalProofCard.svelte';
</script>

<section class="hero">
	<pre class="ascii-bg" aria-hidden="true">{ASCII_BG}</pre>

	<div class="container">
		<div class="hero-content">
			<div class="hero-text">
				<div class="pixel overline">SYSTEM: AFTER-HOURS COVERAGE</div>
				<h1>Never miss a lead after hours.</h1>
				<p class="subhead">
					We install an after-hours AI receptionist, modern websites, and helpful chatbots—built for
					1–5 person businesses.
				</p>

				<div class="cta-group">
					<a href="/contact" class="btn btn-primary btn-large">Book a Demo</a>
					<a href="tel:+17072923201" class="btn btn-secondary btn-large">Call/Text: +1-707-292-3201</a>
				</div>
			</div>

			<div class="hero-proof">
				<TerminalProofCard />
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		padding: var(--space-3xl) 0;
		min-height: 85vh;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	.ascii-bg {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-family: monospace;
		font-size: 0.75rem;
		line-height: 1.2;
		color: var(--color-ink);
		opacity: 0.04;
		white-space: pre;
		pointer-events: none;
		z-index: 0;
	}

	.hero-content {
		position: relative;
		z-index: 1;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--space-2xl);
		align-items: center;
	}

	.overline {
		display: inline-block;
		margin-bottom: var(--space-sm);
		color: var(--color-accent);
	}

	h1 {
		margin-bottom: var(--space-md);
	}

	.subhead {
		font-size: 1.125rem;
		color: var(--color-ink-light);
		margin-bottom: var(--space-xl);
		max-width: 540px;
	}

	.cta-group {
		display: flex;
		gap: var(--space-md);
		flex-wrap: wrap;
	}

	@media (max-width: 968px) {
		.hero {
			min-height: auto;
			padding: var(--space-2xl) 0;
		}

		.hero-content {
			grid-template-columns: 1fr;
			gap: var(--space-xl);
		}

		.cta-group {
			flex-direction: column;
		}

		.cta-group .btn {
			width: 100%;
		}
	}
</style>
