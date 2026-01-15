<script lang="ts">
	let formData = $state({
		name: '',
		businessType: '',
		city: '',
		phone: '',
		missAfterHoursCalls: '',
		message: ''
	});

	let submitted = $state(false);
	let errors = $state<Record<string, string>>({});

	function validate() {
		const newErrors: Record<string, string> = {};

		if (!formData.name.trim()) newErrors.name = 'Name is required';
		if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
		if (!formData.missAfterHoursCalls) newErrors.missAfterHoursCalls = 'Please select an option';

		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	}

	function handleSubmit(e: Event) {
		e.preventDefault();

		if (!validate()) return;

		// In production, send to backend
		console.log('Form submitted:', formData);

		submitted = true;

		// Reset after 5 seconds
		setTimeout(() => {
			submitted = false;
			formData = {
				name: '',
				businessType: '',
				city: '',
				phone: '',
				missAfterHoursCalls: '',
				message: ''
			};
		}, 5000);
	}
</script>

<section class="contact-form-section">
	<div class="container-narrow">
		<div class="form-header">
			<h2>Ready to never miss a lead?</h2>
			<p>Tell us about your business and we'll get back to you within 24 hours.</p>
		</div>

		{#if submitted}
			<div class="success-message">
				<svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="2">
					<circle cx="24" cy="24" r="22" />
					<polyline points="16 24 20 28 32 16" />
				</svg>
				<h3>Thanks! We'll be in touch soon.</h3>
				<p>Check your phone for a confirmation text.</p>
			</div>
		{:else}
			<form class="contact-form" onsubmit={handleSubmit}>
				<div class="form-row">
					<div class="form-group">
						<label for="name">Your name *</label>
						<input
							type="text"
							id="name"
							bind:value={formData.name}
							class:error={errors.name}
							required
						/>
						{#if errors.name}
							<span class="error-text">{errors.name}</span>
						{/if}
					</div>

					<div class="form-group">
						<label for="phone">Phone number *</label>
						<input
							type="tel"
							id="phone"
							bind:value={formData.phone}
							class:error={errors.phone}
							required
						/>
						{#if errors.phone}
							<span class="error-text">{errors.phone}</span>
						{/if}
					</div>
				</div>

				<div class="form-row">
					<div class="form-group">
						<label for="businessType">Type of business</label>
						<input type="text" id="businessType" bind:value={formData.businessType} />
					</div>

					<div class="form-group">
						<label for="city">City</label>
						<input type="text" id="city" bind:value={formData.city} />
					</div>
				</div>

				<div class="form-group">
					<label>Do you miss after-hours calls? *</label>
					<div class="radio-group">
						<label class="radio-label">
							<input
								type="radio"
								name="missAfterHoursCalls"
								value="yes"
								bind:group={formData.missAfterHoursCalls}
							/>
							<span>Yes, often</span>
						</label>
						<label class="radio-label">
							<input
								type="radio"
								name="missAfterHoursCalls"
								value="no"
								bind:group={formData.missAfterHoursCalls}
							/>
							<span>No, not usually</span>
						</label>
					</div>
					{#if errors.missAfterHoursCalls}
						<span class="error-text">{errors.missAfterHoursCalls}</span>
					{/if}
				</div>

				<div class="form-group">
					<label for="message">Additional details (optional)</label>
					<textarea id="message" bind:value={formData.message} rows="4"></textarea>
				</div>

				<button type="submit" class="btn btn-primary btn-large">Send message</button>
			</form>
		{/if}
	</div>
</section>

<style>
	.contact-form-section {
		background: var(--color-surface);
		border-top: 1px solid var(--color-border);
	}

	.form-header {
		text-align: center;
		margin-bottom: var(--space-2xl);
	}

	.form-header p {
		color: var(--color-ink-light);
		margin: 0;
	}

	.contact-form {
		background: var(--color-paper);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
		padding: var(--space-xl);
	}

	.form-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--space-md);
	}

	.form-group {
		margin-bottom: var(--space-md);
	}

	input.error,
	textarea.error {
		border-color: #dc3545;
	}

	.error-text {
		display: block;
		color: #dc3545;
		font-size: 0.875rem;
		margin-top: 0.25rem;
	}

	.radio-group {
		display: flex;
		gap: var(--space-lg);
		margin-top: var(--space-xs);
	}

	.radio-label {
		display: flex;
		align-items: center;
		gap: var(--space-xs);
		cursor: pointer;
		font-weight: normal;
	}

	.radio-label input[type='radio'] {
		width: auto;
		cursor: pointer;
	}

	.success-message {
		text-align: center;
		padding: var(--space-2xl);
		background: var(--color-paper);
		border: 1px solid var(--color-border);
		border-radius: var(--radius-lg);
	}

	.success-message svg {
		color: var(--color-accent);
		margin-bottom: var(--space-md);
	}

	.success-message h3 {
		margin-bottom: var(--space-sm);
	}

	.success-message p {
		margin: 0;
		color: var(--color-ink-light);
	}

	@media (max-width: 768px) {
		.form-row {
			grid-template-columns: 1fr;
		}

		.contact-form {
			padding: var(--space-lg);
		}
	}
</style>
