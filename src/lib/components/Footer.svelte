<footer class="footer">
	<div class="container">
		<div class="footer-top">
			<div class="footer-brand">
				<div class="logo">
					<span class="pixel">PARADIME</span>
					<span>Tech</span>
				</div>
				<p>Never miss a lead after hours.</p>
			</div>

			<div class="footer-links">
				<div class="link-group">
					<h4>Solutions</h4>
					<a href="/solutions/ai-receptionist">AI Receptionist</a>
					<a href="/solutions/websites">Websites</a>
					<a href="/solutions/chatbots">Chatbots</a>
				</div>

				<div class="link-group">
					<h4>Company</h4>
					<a href="/about">About</a>
					<a href="/contact">Contact</a>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; {new Date().getFullYear()} Paradime Tech. All rights reserved.</p>
			<p class="pixel">SYSTEM STATUS: OPERATIONAL</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--color-tan);
		border-top: 1px solid var(--color-border);
		padding: var(--space-2xl) 0 var(--space-lg);
	}

	.footer-top {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--space-2xl);
		margin-bottom: var(--space-xl);
	}

	.footer-brand .logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 700;
		font-size: 1.25rem;
		margin-bottom: var(--space-sm);
	}

	.footer-brand p {
		color: var(--color-ink-light);
		margin: 0;
	}

	.footer-links {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-lg);
	}

	.link-group h4 {
		margin-bottom: var(--space-sm);
		font-size: 0.875rem;
		font-weight: 700;
	}

	.link-group a {
		display: block;
		color: var(--color-ink-light);
		margin-bottom: var(--space-xs);
		font-size: 0.875rem;
	}

	.link-group a:hover {
		color: var(--color-accent);
	}

	.footer-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: var(--space-lg);
		border-top: 1px solid var(--color-border);
		font-size: 0.875rem;
		color: var(--color-ink-light);
	}

	.footer-bottom p {
		margin: 0;
	}

	@media (max-width: 768px) {
		.footer-top {
			grid-template-columns: 1fr;
			gap: var(--space-xl);
		}

		.footer-bottom {
			flex-direction: column;
			gap: var(--space-sm);
			text-align: center;
		}
	}
</style>
