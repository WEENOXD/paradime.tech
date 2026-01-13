<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<section class="cta" id="contact">
	<div class="container">
		<div class="cta-content" in:fade={{ duration: 600 }}>
			<h2 in:fly={{ y: 20, duration: 600, delay: 200, easing: quintOut }}>
				Let's Discuss Your Business
			</h2>
			<p class="cta-subtitle" in:fly={{ y: 20, duration: 600, delay: 300, easing: quintOut }}>
				Schedule a quick call to see if an after-hours answering service makes sense for you. No
				pressure, just a conversation.
			</p>

			<div class="contact-methods" in:fade={{ duration: 600, delay: 400 }}>
				<a href="tel:7072923201" class="contact-method primary">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
						<path
							d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<div>
						<div class="contact-label">Call Now</div>
						<div class="contact-value">(707) 292-3201</div>
					</div>
				</a>

				<a href="mailto:josephgannonai@gmail.com?subject=Schedule%20Meeting%20-%20Paradime&body=Hi%2C%0A%0AI'd%20like%20to%20schedule%20a%20meeting%20to%20discuss%20after-hours%20answering%20services.%0A%0ABest%20time%20to%20call%3A%0AYour%20business%3A%0A%0AThanks!" class="contact-method">
					<svg width="28" height="28" viewBox="0 0 24 24" fill="none">
						<path
							d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M22 6l-10 7L2 6"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<div>
						<div class="contact-label">Email to Schedule</div>
						<div class="contact-value">josephgannonai@gmail.com</div>
					</div>
				</a>
			</div>

			<p class="meeting-note" in:fade={{ duration: 600, delay: 600 }}>
				I'll call you back within 24 hours to schedule a time that works for you
			</p>
		</div>
	</div>
</section>

<style>
	.cta {
		padding: 6rem 0;
		background: var(--color-primary);
		position: relative;
		overflow: hidden;
	}

	.cta::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
		opacity: 0.95;
	}

	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 2rem;
		position: relative;
		z-index: 10;
	}

	.cta-content {
		max-width: 48rem;
		margin: 0 auto;
		text-align: center;
	}

	h2 {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		margin-bottom: 1rem;
		color: #ffffff;
	}

	.cta-subtitle {
		font-size: 1.25rem;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 3rem;
		line-height: 1.6;
	}

	.contact-methods {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		max-width: 36rem;
		margin: 0 auto 2rem;
	}

	.contact-method {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		padding: 1.5rem 2rem;
		background: rgba(255, 255, 255, 0.1);
		border: 2px solid rgba(255, 255, 255, 0.2);
		border-radius: var(--radius-lg);
		color: #ffffff;
		text-decoration: none;
		transition: all 0.3s ease;
		backdrop-filter: blur(10px);
		text-align: left;
	}

	.contact-method.primary {
		background: var(--color-accent);
		border-color: var(--color-accent);
		box-shadow: 0 4px 14px rgba(8, 145, 178, 0.4);
	}

	.contact-method.primary:hover {
		background: var(--color-accent-hover);
		border-color: var(--color-accent-hover);
		transform: translateY(-3px);
		box-shadow: 0 6px 20px rgba(8, 145, 178, 0.5);
	}

	.contact-method:not(.primary):hover {
		background: rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.4);
		transform: translateY(-2px);
	}

	.contact-method svg {
		flex-shrink: 0;
	}

	.contact-label {
		font-size: 0.875rem;
		opacity: 0.9;
		margin-bottom: 0.25rem;
		font-weight: 500;
	}

	.contact-value {
		font-size: 1.25rem;
		font-weight: 700;
		letter-spacing: -0.01em;
	}

	.meeting-note {
		font-size: 0.9375rem;
		color: rgba(255, 255, 255, 0.8);
		font-style: italic;
	}

	@media (max-width: 768px) {
		.cta {
			padding: 4rem 0;
		}

		.contact-method {
			padding: 1.25rem 1.5rem;
		}

		.contact-value {
			font-size: 1.0625rem;
		}
	}
</style>
