<script lang="ts">
	let scrolled = $state(false);

	if (typeof window !== 'undefined') {
		$effect(() => {
			const handleScroll = () => {
				scrolled = window.scrollY > 20;
			};

			window.addEventListener('scroll', handleScroll);
			return () => window.removeEventListener('scroll', handleScroll);
		});
	}
</script>

<header class:scrolled>
	<div class="container">
		<a href="/" class="logo" aria-label="Paradime Technologies Home">
			paradime.technologies
		</a>

		<nav aria-label="Main navigation">
			<a href="#how-it-works">How It Works</a>
			<a href="#features">Features</a>
			<a href="#faq">FAQ</a>
			<a href="tel:7072923201" class="cta-button">(707) 292-3201</a>
		</nav>
	</div>
</header>

<style>
	header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		background: rgba(255, 255, 255, 0.8);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		transition: all 0.3s ease;
		border-bottom: 1px solid transparent;
	}

	header.scrolled {
		background: rgba(255, 255, 255, 0.95);
		box-shadow: var(--shadow-md);
		border-bottom-color: var(--color-border);
	}

	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 1.25rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-text-primary);
		text-decoration: none;
		letter-spacing: -0.01em;
		transition: color 0.2s ease;
	}

	.logo:hover {
		color: var(--color-accent);
	}

	nav {
		display: flex;
		gap: 2rem;
		align-items: center;
	}

	nav a {
		font-size: 0.9375rem;
		font-weight: 500;
		color: var(--color-text-secondary);
		text-decoration: none;
		transition: color 0.2s ease;
	}

	nav a:not(.cta-button):hover {
		color: var(--color-accent);
	}

	.cta-button {
		padding: 0.625rem 1.5rem;
		background: var(--color-accent);
		color: #ffffff;
		border-radius: var(--radius-md);
		font-weight: 600;
		transition: all 0.3s ease;
		box-shadow: 0 2px 8px rgba(8, 145, 178, 0.25);
	}

	.cta-button:hover {
		background: var(--color-accent-hover);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(8, 145, 178, 0.35);
	}

	@media (max-width: 768px) {
		nav {
			display: none;
		}

		.container {
			padding: 1rem 1.5rem;
		}
	}
</style>
