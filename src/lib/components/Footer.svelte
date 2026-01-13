<footer>
	<div class="container">
		<div class="footer-content">
			<div class="footer-brand">
				<div class="logo">paradime.technologies</div>
				<p>After-hours answering service for local businesses.</p>
			</div>

			<div class="footer-links">
				<div class="link-group">
					<h4>Product</h4>
					<a href="#how-it-works">How It Works</a>
					<a href="#features">Features</a>
					<a href="#faq">FAQ</a>
				</div>

				<div class="link-group">
					<h4>Contact</h4>
					<a href="mailto:josephgannonai@gmail.com">josephgannonai@gmail.com</a>
					<a href="tel:7072923201">(707) 292-3201</a>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; {new Date().getFullYear()} Paradime Technologies</p>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 4rem 0 2rem;
		background: var(--color-background-alt);
		border-top: 1px solid var(--color-border);
	}

	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.footer-content {
		display: grid;
		grid-template-columns: 2fr 3fr;
		gap: 4rem;
		margin-bottom: 3rem;
		padding-bottom: 3rem;
		border-bottom: 1px solid var(--color-border);
	}

	.footer-brand .logo {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-text-primary);
		margin-bottom: 0.75rem;
	}

	.footer-brand p {
		font-size: 0.9375rem;
		color: var(--color-text-secondary);
		line-height: 1.6;
	}

	.footer-links {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 2rem;
	}

	.link-group h4 {
		font-size: 0.875rem;
		font-weight: 700;
		color: var(--color-text-primary);
		margin-bottom: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.link-group a {
		display: block;
		font-size: 0.9375rem;
		color: var(--color-text-secondary);
		text-decoration: none;
		margin-bottom: 0.75rem;
		transition: color 0.2s ease;
	}

	.link-group a:hover {
		color: var(--color-accent);
	}

	.footer-bottom {
		text-align: center;
	}

	.footer-bottom p {
		font-size: 0.875rem;
		color: var(--color-text-tertiary);
	}

	@media (max-width: 768px) {
		.footer-content {
			grid-template-columns: 1fr;
			gap: 2.5rem;
		}

		.footer-links {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
