<script lang="ts">
	// Structured Data for SEO - no fake ratings or review counts
	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Paradime Technologies',
		description:
			'After-hours phone answering service for local businesses. We handle your missed calls and send you the lead information.',
		url: 'https://paradime.tech',
		telephone: '+1-707-292-3201',
		email: 'josephgannonai@gmail.com',
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'US'
		},
		serviceType: ['After Hours Answering Service', 'Missed Call Service', 'Lead Capture Service']
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}<\/script>`}
</svelte:head>
