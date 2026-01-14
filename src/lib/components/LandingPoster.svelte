<script lang="ts">
	import { USA_LEFT, USA_RIGHT } from '$lib/assets/ascii';
</script>

<div class="poster-page">
	<div class="stage">
		<!-- ASCII Art Background Maps -->
		<pre class="ascii-map ascii-left">{USA_LEFT}</pre>
		<pre class="ascii-map ascii-right">{USA_RIGHT}</pre>

		<!-- Center Content -->
		<div class="center-content">
			<!-- Pasted Label Strip -->
			<div class="label-strip">
				<p class="tagline">bringing technology to businesses</p>
				<h1 class="headline">ALL ACROSS AMERICA</h1>
				<div class="divider"></div>
			</div>

			<!-- Dashed CTA Button -->
			<button class="cta-button">look FORWARD!</button>
		</div>

		<!-- Bottom Handwritten Note -->
		<p class="bottom-note">
			Scroll to see how our products will bring your business to the future
		</p>
	</div>
</div>

<style>
	/* Page Container */
	.poster-page {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: clamp(16px, 4vw, 56px);
		background: #f5f1ea;
	}

	/* Stage Container */
	.stage {
		max-width: 1200px;
		width: 100%;
		min-height: 78vh;
		position: relative;
	}

	/* ASCII Art Maps */
	.ascii-map {
		position: absolute;
		bottom: 0;
		margin: 0;
		padding: 0;
		font-family: ui-monospace, 'SFMono-Regular', 'SF Mono', Menlo, Consolas, 'Liberation Mono',
			monospace;
		line-height: 1.05;
		white-space: pre;
		color: #111;
		opacity: 0.9;
		font-size: clamp(6px, 0.8vw, 10px);
		z-index: 1;
		pointer-events: none;
	}

	.ascii-left {
		left: 0;
		text-align: left;
	}

	.ascii-right {
		right: 0;
		text-align: right;
	}

	/* Center Content Block */
	.center-content {
		position: absolute;
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: clamp(18px, 2vw, 26px);
	}

	/* Pasted Label Strip */
	.label-strip {
		background: #fbfaf7;
		border: 1px solid rgba(0, 0, 0, 0.18);
		border-radius: 8px;
		padding: clamp(14px, 1.5vw, 18px) clamp(22px, 2.5vw, 30px);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		text-align: left;
	}

	/* Tagline */
	.tagline {
		margin: 0 0 clamp(4px, 0.6vw, 8px) 0;
		font-family: system-ui, -apple-system, 'Helvetica Neue', Arial, sans-serif;
		font-size: clamp(12px, 1.2vw, 16px);
		letter-spacing: 0.04em;
		color: #111;
		text-transform: lowercase;
	}

	/* Headline */
	.headline {
		margin: 0;
		font-family: Impact, Haettenschweiler, 'Arial Black', 'Anton', sans-serif;
		font-size: clamp(34px, 4.5vw, 64px);
		font-weight: 900;
		line-height: 1;
		letter-spacing: 0.02em;
		color: #111;
		text-transform: uppercase;
	}

	/* Divider Line */
	.divider {
		height: 1px;
		background: rgba(0, 0, 0, 0.22);
		margin-top: clamp(10px, 1.2vw, 14px);
	}

	/* CTA Button (Dashed) */
	.cta-button {
		border: 2px dashed rgba(0, 0, 0, 0.35);
		border-radius: 999px;
		background: transparent;
		padding: 10px 18px;
		font-family: 'YeezyHand', cursive;
		font-size: clamp(14px, 1.4vw, 18px);
		color: #111;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.cta-button:hover {
		background: rgba(0, 0, 0, 0.04);
		transform: translateY(-1px);
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
	}

	/* Bottom Handwritten Note */
	.bottom-note {
		position: absolute;
		left: 50%;
		bottom: clamp(18px, 4vw, 44px);
		transform: translateX(-50%) rotate(-0.5deg);
		font-family: 'YeezyHand', cursive;
		font-size: clamp(12px, 1.3vw, 16px);
		color: #111;
		text-align: center;
		margin: 0;
		max-width: 90%;
		z-index: 10;
	}

	/* Responsive Adjustments */
	@media (max-width: 520px) {
		.label-strip {
			padding: 12px 18px;
		}

		.ascii-map {
			font-size: clamp(5px, 0.7vw, 8px);
			bottom: clamp(12px, 3vw, 24px);
		}

		.bottom-note {
			bottom: clamp(14px, 3vw, 32px);
			font-size: 11px;
		}
	}
</style>
