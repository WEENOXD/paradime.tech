<section class="solutions">
	<div class="container">
		<h2>Our solutions</h2>
		<div class="solutions-grid">
			<div class="card solution-card">
				<div class="pixel solution-label">PRIMARY SOLUTION</div>
				<h3>AI Receptionist</h3>
				<p>
					Never miss a call again. Our AI answers when you're closed or busy, captures lead details,
					and texts you a summary instantly.
				</p>
				<ul class="outcome-list">
					<li>Capture after-hours leads automatically</li>
					<li>Get texted summaries in real-time</li>
					<li>Optional call transfer & scheduling</li>
				</ul>
				<a href="/solutions/ai-receptionist" class="btn btn-primary">Learn more</a>
			</div>

			<div class="card solution-card">
				<div class="pixel solution-label">FOR VISIBILITY</div>
				<h3>Modern Websites</h3>
				<p>
					Clean, fast websites that work on every device. Built to convert visitors into customers
					and rank well on Google.
				</p>
				<ul class="outcome-list">
					<li>Mobile-friendly and lightning fast</li>
					<li>SEO optimized from day one</li>
					<li>Easy updates whenever you need</li>
				</ul>
				<a href="/solutions/websites" class="btn btn-secondary">Learn more</a>
			</div>

			<div class="card solution-card">
				<div class="pixel solution-label">FOR SUPPORT</div>
				<h3>Custom Chatbots</h3>
				<p>
					Answer common questions 24/7 with a chatbot trained on your business. Reduce repetitive
					calls and improve customer experience.
				</p>
				<ul class="outcome-list">
					<li>Answer FAQs automatically</li>
					<li>Collect contact info from visitors</li>
					<li>Works on your website or Facebook</li>
				</ul>
				<a href="/solutions/chatbots" class="btn btn-secondary">Learn more</a>
			</div>
		</div>
	</div>
</section>

<style>
	.solutions {
		background: var(--color-surface);
		border-top: 1px solid var(--color-border);
	}

	h2 {
		text-align: center;
		margin-bottom: var(--space-2xl);
	}

	.solutions-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: var(--space-lg);
	}

	.solution-card {
		display: flex;
		flex-direction: column;
	}

	.solution-label {
		color: var(--color-accent);
		margin-bottom: var(--space-sm);
		font-size: 0.6875rem;
	}

	.solution-card h3 {
		margin-bottom: var(--space-sm);
	}

	.solution-card p {
		color: var(--color-ink-light);
		margin-bottom: var(--space-md);
		flex-grow: 1;
	}

	.outcome-list {
		list-style: none;
		margin-bottom: var(--space-lg);
	}

	.outcome-list li {
		padding-left: 1.5rem;
		margin-bottom: var(--space-xs);
		position: relative;
		font-size: 0.875rem;
		color: var(--color-ink);
	}

	.outcome-list li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: var(--color-accent);
	}

	@media (max-width: 968px) {
		.solutions-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
