<script lang="ts">
	let downloading = false;

	function handleDownload() {
		downloading = true;
		// Point to the monroe archive we'll create
		window.location.href = '/monroe1.zip';
		setTimeout(() => {
			downloading = false;
		}, 2000);
	}
</script>

<svelte:head>
	<title>paradime.tech</title>
	<meta name="description" content="MONROE1 - AI-powered lead generation CRM" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="container">
	<div class="content">
		<h1>PARADIME.TECH</h1>

		<div class="spacer"></div>

		<h2>MONROE1</h2>

		<p class="description">
			AI-POWERED LEAD GENERATION<br />
			& SALES AUTOMATION CRM
		</p>

		<p class="details">
			MULTI-SOURCE DATA COLLECTION.<br />
			INTERACTIVE MAP SEARCH.<br />
			SMART FILTERING & QUALITY SCORING.<br />
			LOCAL-FIRST STORAGE.<br />
			CROSS-PLATFORM DESKTOP APPLICATION.
		</p>

		<button class="download-btn" on:click={handleDownload} disabled={downloading}>
			{downloading ? 'DOWNLOADING...' : 'DOWNLOAD MONROE1'}
		</button>

		<div class="spacer-large"></div>

		<p class="message">
			HI FELIX<br />
			I CANT WAIT TO GET RICH WIT U
		</p>

		<div class="footer">
			<p>© 2026 PARADIME TECHNOLOGIES</p>
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		background: #000;
		color: #fff;
		overflow-x: hidden;
	}

	.container {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 40px 20px;
	}

	.content {
		max-width: 900px;
		width: 100%;
		text-align: center;
	}

	h1 {
		font-size: clamp(48px, 12vw, 120px);
		font-weight: 900;
		letter-spacing: -0.03em;
		margin: 0;
		line-height: 0.9;
		text-transform: uppercase;
	}

	h2 {
		font-size: clamp(36px, 8vw, 80px);
		font-weight: 900;
		letter-spacing: -0.02em;
		margin: 0;
		line-height: 0.9;
		text-transform: uppercase;
		color: #888;
	}

	.description {
		font-size: clamp(18px, 3vw, 28px);
		font-weight: 700;
		letter-spacing: 0.05em;
		margin: 60px 0 40px 0;
		line-height: 1.4;
		text-transform: uppercase;
	}

	.details {
		font-size: clamp(12px, 2vw, 16px);
		font-weight: 400;
		letter-spacing: 0.1em;
		margin: 0 0 60px 0;
		line-height: 1.8;
		text-transform: uppercase;
		color: #666;
	}

	.download-btn {
		background: #fff;
		color: #000;
		border: none;
		padding: 24px 60px;
		font-size: clamp(14px, 2.5vw, 20px);
		font-weight: 900;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		cursor: pointer;
		transition: all 0.3s ease;
		font-family: inherit;
	}

	.download-btn:hover:not(:disabled) {
		background: #ddd;
		transform: scale(1.02);
	}

	.download-btn:active:not(:disabled) {
		transform: scale(0.98);
	}

	.download-btn:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.message {
		font-size: clamp(20px, 4vw, 40px);
		font-weight: 700;
		letter-spacing: 0.02em;
		margin: 0;
		line-height: 1.3;
		text-transform: uppercase;
		font-style: italic;
	}

	.spacer {
		height: 80px;
	}

	.spacer-large {
		height: 120px;
	}

	.footer {
		margin-top: 100px;
		padding-top: 40px;
		border-top: 1px solid #333;
	}

	.footer p {
		font-size: 12px;
		letter-spacing: 0.15em;
		color: #555;
		text-transform: uppercase;
		margin: 0;
	}

	@media (max-width: 768px) {
		.container {
			padding: 30px 15px;
		}

		.download-btn {
			padding: 20px 40px;
			width: 100%;
			max-width: 400px;
		}

		.spacer {
			height: 40px;
		}

		.spacer-large {
			height: 60px;
		}

		.footer {
			margin-top: 60px;
		}
	}
</style>
