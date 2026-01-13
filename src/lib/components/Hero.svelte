<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
</script>

<section class="hero">
	<div class="container">
		<div class="hero-content" in:fade={{ duration: 600, delay: 200 }}>
			<h1 in:fly={{ y: 20, duration: 600, delay: 500, easing: quintOut }}>
				After-Hours Phone Answering<br />
				for Local Businesses
			</h1>

			<p class="hero-subtitle" in:fly={{ y: 20, duration: 600, delay: 600, easing: quintOut }}>
				Stop missing calls when you're closed or busy. Let's talk about how an answering service
				can capture more leads for your business.
			</p>

			<div class="cta-group" in:fly={{ y: 20, duration: 600, delay: 700, easing: quintOut }}>
				<a href="tel:7072923201" class="btn btn-primary">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path
							d="M18.333 14.1v2.5a1.667 1.667 0 0 1-1.816 1.667 16.5 16.5 0 0 1-7.192-2.559 16.25 16.25 0 0 1-5-5 16.5 16.5 0 0 1-2.558-7.225A1.667 1.667 0 0 1 3.425 1.667h2.5a1.667 1.667 0 0 1 1.666 1.433c.106.8.302 1.586.584 2.342a1.667 1.667 0 0 1-.375 1.758l-1.058 1.058a13.333 13.333 0 0 0 5 5l1.058-1.058a1.667 1.667 0 0 1 1.758-.375c.756.282 1.542.478 2.342.584a1.667 1.667 0 0 1 1.433 1.691z"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<span>Call (707) 292-3201</span>
				</a>
				<a href="mailto:josephgannonai@gmail.com?subject=Schedule%20Meeting%20-%20Paradime" class="btn btn-secondary">
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none">
						<path
							d="M3.333 3.333h13.334c.916 0 1.666.75 1.666 1.667v10c0 .917-.75 1.667-1.666 1.667H3.333c-.916 0-1.666-.75-1.666-1.667V5c0-.917.75-1.667 1.666-1.667z"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M18.333 5L10 10.833 1.667 5"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<span>Email to Schedule</span>
				</a>
			</div>

			<p class="contact-note" in:fade={{ duration: 600, delay: 900 }}>
				Quick 15-minute call to see if this fits your business
			</p>
		</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		padding: 8rem 0 6rem;
		background: var(--color-primary);
		margin-top: 4.5rem;
		overflow: hidden;
	}

	.hero::before {
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

	.hero-content {
		max-width: 48rem;
		margin: 0 auto;
		text-align: center;
	}

	h1 {
		font-size: clamp(2.5rem, 5vw, 4rem);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.02em;
		color: #ffffff;
		margin-bottom: 1.5rem;
	}

	.hero-subtitle {
		font-size: clamp(1.125rem, 2vw, 1.375rem);
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 2.5rem;
		font-weight: 400;
	}

	.cta-group {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 1.5rem;
	}

	.btn {
		display: inline-flex;
		align-items: center;
		gap: 0.625rem;
		padding: 1.125rem 2rem;
		font-size: 1.0625rem;
		font-weight: 600;
		border-radius: var(--radius-md);
		text-decoration: none;
		transition: all 0.3s ease;
		cursor: pointer;
		border: none;
	}

	.btn-primary {
		background: var(--color-accent);
		color: #ffffff;
		box-shadow: 0 4px 14px rgba(8, 145, 178, 0.4);
	}

	.btn-primary:hover {
		background: var(--color-accent-hover);
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(8, 145, 178, 0.5);
	}

	.btn-secondary {
		background: rgba(255, 255, 255, 0.15);
		color: #ffffff;
		border: 2px solid rgba(255, 255, 255, 0.4);
		backdrop-filter: blur(10px);
	}

	.btn-secondary:hover {
		background: rgba(255, 255, 255, 0.25);
		border-color: rgba(255, 255, 255, 0.6);
	}

	.contact-note {
		font-size: 0.9375rem;
		color: rgba(255, 255, 255, 0.8);
		font-style: italic;
	}

	@media (max-width: 768px) {
		.hero {
			padding: 6rem 0 4rem;
		}

		.cta-group {
			flex-direction: column;
			align-items: stretch;
		}

		.btn {
			justify-content: center;
		}
	}
</style>
