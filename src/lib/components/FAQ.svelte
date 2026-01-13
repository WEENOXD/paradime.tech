<script lang="ts">
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	const faqs = [
		{
			question: 'How does it work?',
			answer:
				"When someone calls your business and you're unavailable, forward the call to our number. We'll answer, ask for their information and what they need, then send you the details via email or SMS."
		},
		{
			question: 'What information do you collect?',
			answer:
				"We collect whatever you tell us to ask for. Typically that's name, phone number, email, and what service they're interested in. You can customize the questions based on your business needs."
		},
		{
			question: 'How much does it cost?',
			answer:
				'Pricing varies based on call volume. Contact us for a quote. There are no setup fees, and you can cancel anytime.'
		},
		{
			question: 'Do I need special equipment?',
			answer:
				'No. You just need to be able to forward calls from your existing business phone number. Most phone systems support this feature.'
		},
		{
			question: 'Can I try it before committing?',
			answer:
				"Yes. We can set up a trial period so you can test it with your actual calls before deciding if it's right for your business."
		},
		{
			question: 'What if you miss important information?',
			answer:
				"We follow the script you provide and ask all the questions you specify. If something is unclear, we'll note that in the message we send you."
		}
	];

	let openIndex = $state<number | null>(null);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<section class="faq" id="faq">
	<div class="container">
		<div class="section-header">
			<h2>Common Questions</h2>
		</div>

		<div class="faq-list">
			{#each faqs as faq, i}
				<div class="faq-item">
					<button class="faq-question" class:open={openIndex === i} onclick={() => toggle(i)}>
						<span>{faq.question}</span>
						<svg
							class="chevron"
							class:rotated={openIndex === i}
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
						>
							<path
								d="M5 7.5l5 5 5-5"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
					{#if openIndex === i}
						<div class="faq-answer" transition:slide={{ duration: 300, easing: quintOut }}>
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
		padding: 6rem 0;
		background: var(--color-background-alt);
	}

	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.section-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	h2 {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 700;
		letter-spacing: -0.02em;
		color: var(--color-text-primary);
	}

	.faq-list {
		max-width: 56rem;
		margin: 0 auto;
	}

	.faq-item {
		margin-bottom: 1rem;
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border);
		overflow: hidden;
		background: var(--color-background);
		transition: all 0.3s ease;
	}

	.faq-item:hover {
		border-color: var(--color-border-hover);
		box-shadow: var(--shadow-base);
	}

	.faq-question {
		width: 100%;
		padding: 1.5rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1.5rem;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		font-size: 1.0625rem;
		font-weight: 600;
		color: var(--color-text-primary);
		transition: color 0.2s ease;
	}

	.faq-question:hover {
		color: var(--color-accent);
	}

	.faq-question.open {
		color: var(--color-accent);
	}

	.chevron {
		flex-shrink: 0;
		transition: transform 0.3s ease;
		color: var(--color-accent);
	}

	.chevron.rotated {
		transform: rotate(180deg);
	}

	.faq-answer {
		padding: 0 2rem 2rem;
	}

	.faq-answer p {
		font-size: 1rem;
		line-height: 1.7;
		color: var(--color-text-secondary);
	}

	@media (max-width: 768px) {
		.faq {
			padding: 4rem 0;
		}

		.faq-question {
			padding: 1.25rem 1.5rem;
			font-size: 1rem;
		}

		.faq-answer {
			padding: 0 1.5rem 1.5rem;
		}
	}
</style>
