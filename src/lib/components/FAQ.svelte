<script lang="ts">
	let openIndex = $state<number | null>(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}

	const faqs = [
		{
			question: 'Will it replace my staff?',
			answer:
				"No. The AI receptionist only handles after-hours calls when you're closed or can't answer. It's designed to catch leads you'd otherwise miss, not replace your team."
		},
		{
			question: 'Do I keep my number?',
			answer:
				'Yes. We work with your existing phone line. You can forward calls to the AI receptionist during specific hours or when you\'re unavailable. No need to change your number or tell customers anything new.'
		},
		{
			question: 'Can it book appointments?',
			answer:
				"Yes, as an optional add-on. The AI can check your calendar and schedule appointments directly. It's included in our Growth and Never Miss a Lead plans."
		},
		{
			question: 'What if it gets something wrong?',
			answer:
				"You get a text summary of every call, so you can follow up if needed. The AI is trained on your business, but we include human review for the first two weeks to catch and fix any issues quickly."
		}
	];
</script>

<section class="faq">
	<div class="container-narrow">
		<h2>Common questions</h2>
		<div class="faq-list">
			{#each faqs as faq, index}
				<div class="faq-item" class:open={openIndex === index}>
					<button class="faq-question" onclick={() => toggle(index)}>
						<span>{faq.question}</span>
						<svg
							width="20"
							height="20"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							class="faq-icon"
						>
							<polyline points="6 9 12 15 18 9" />
						</svg>
					</button>
					{#if openIndex === index}
						<div class="faq-answer">
							<p>{faq.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.faq {
		background: var(--color-paper);
	}

	h2 {
		text-align: center;
		margin-bottom: var(--space-2xl);
	}

	.faq-list {
		display: flex;
		flex-direction: column;
		gap: var(--space-sm);
	}

	.faq-item {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-md);
		overflow: hidden;
	}

	.faq-question {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--space-md);
		background: none;
		border: none;
		font-family: var(--font-primary);
		font-size: 1rem;
		font-weight: 500;
		color: var(--color-ink);
		text-align: left;
		cursor: pointer;
		transition: background 0.2s ease;
	}

	.faq-question:hover {
		background: rgba(0, 0, 0, 0.02);
	}

	.faq-icon {
		flex-shrink: 0;
		transition: transform 0.3s ease;
	}

	.faq-item.open .faq-icon {
		transform: rotate(180deg);
	}

	.faq-answer {
		padding: 0 var(--space-md) var(--space-md);
		animation: slideDown 0.3s ease;
	}

	.faq-answer p {
		margin: 0;
		color: var(--color-ink-light);
		line-height: 1.6;
	}

	@keyframes slideDown {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
