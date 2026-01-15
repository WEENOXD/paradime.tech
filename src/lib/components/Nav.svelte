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

<nav class="nav" class:scrolled>
	<div class="container nav-inner">
		<a href="/" class="logo">
			<span class="pixel">PARADIME</span>
			<span>Tech</span>
		</a>

		<ul class="nav-links">
			<li><a href="/">Home</a></li>
			<li><a href="/solutions">Solutions</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact" class="btn btn-primary btn-small">Contact</a></li>
		</ul>
	</div>
</nav>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 100;
		background: var(--color-paper);
		transition: all 0.3s ease;
	}

	.nav.scrolled {
		box-shadow: 0 1px 0 var(--color-border);
		background: rgba(245, 241, 234, 0.95);
		backdrop-filter: blur(8px);
	}

	.nav-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: var(--space-md);
		padding-bottom: var(--space-md);
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--color-ink);
		text-decoration: none;
	}

	.logo:hover {
		color: var(--color-accent);
	}

	.nav-links {
		display: flex;
		gap: var(--space-lg);
		list-style: none;
		align-items: center;
	}

	.nav-links a {
		color: var(--color-ink);
		font-weight: 500;
		font-size: 0.9375rem;
		transition: color 0.2s ease;
	}

	.nav-links a:hover {
		color: var(--color-accent);
	}

	.btn-small {
		padding: 0.5rem 1.25rem;
		font-size: 0.875rem;
	}

	@media (max-width: 768px) {
		.nav-links {
			gap: var(--space-sm);
		}

		.nav-links li:not(:last-child) {
			display: none;
		}
	}
</style>
