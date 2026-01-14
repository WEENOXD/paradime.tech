<script>
	let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<div class="landing">
	<!-- ASCII Art Background -->
	<div class="ascii-background">
		<pre class="ascii-left">{`          ●●●●●●●●●●●●●
       ●●●●●●●●●●●●●●●●●●●●●
    ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
   ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
●●●●●● ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
●●●●●●●●●●●●●●●●    ●●●●●●●●●●●●  ●●●●●●●●●●●●●●●
●●●●●●●●●●●●●●●     ●●●●●●●●●●●●●  ●●●●●●●●●●●●●●
●●●●●●●●●●●●●●       ●●●●●●●●●●●●●●●     ●●●●●● ●●●●●●
●●●●●●●●●●●●●●        ●●●●●●●●●●●●●●●●    ●●●●●●●● ●●●●
●●●●●●●●●●●●           ●●●●●●●●●●●●●        ●●●●●●●● ●●●
●●●●●●●●●●              ●●●●●●●●●●●●●        ●●●●●●●●
●●●●●●●●●                  ●●●●●●●●●●●●        ●●●●●
●●●●●                         ●●●●●●●●            ●● ●●
●●`}</pre>

		<pre class="ascii-right">{`                                                    ●●●●●●●●
                                               ●●●●●●●●●●●●●●●●●●●
                                          ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                                     ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                               ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                       ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
          ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
       ●●●●      ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
                 ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
             ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●            ●●●●●●●●●
           ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●                                           ●●
          ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
           ●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●●
              ●●●●●●●●●●●●●●●    ●●●●●●●●
                ●●●●●●●●●●●        ●●●●●●
                  ●●●●●●●●●●●       ●●●●●
                   ●●●●●●●●●●●      ●●●●
                     ●●●● ●●●●      ●●●`}</pre>
	</div>

	<!-- Header -->
	<header class="header">
		<div class="logo">
			<span class="logo-dot">●</span>
			<span class="logo-text">paradime.tech</span>
		</div>
		<nav class="nav">
			<a href="#landing" class="nav-link">
				<span class="nav-dot">●</span>
				landing
			</a>
			<a href="#products" class="nav-link">
				<span class="nav-dot">●</span>
				products
			</a>
			<a href="#contact" class="nav-link">
				<span class="nav-dot">●</span>
				contact
			</a>
			<a href="#forward" class="nav-button">
				LOOK FORWARD
				<span class="button-icon">⊕</span>
			</a>
		</nav>
	</header>

	<!-- Hero Section -->
	<main class="hero">
		<div class="hero-content">
			<p class="tagline">bringing technology to businesses</p>
			<h1 class="headline">ALL ACROSS AMERICA</h1>

			<a href="#forward" class="cta-button">
				[ LOOK FORWARD ]
			</a>

			<div class="scroll-hint">
				<p class="scroll-text">Scroll to see<br>how our products<br>will bring your<br>business to the<br>future</p>
				<div class="scroll-arrow">↓</div>
			</div>
		</div>
	</main>
</div>

<style>
	@font-face {
		font-family: 'VCR OSD Mono';
		src: url('/fonts/VCR_OSD_MONO.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		background: #fff;
		color: #000;
		overflow-x: hidden;
	}

	.landing {
		min-height: 100vh;
		position: relative;
		font-family: 'VCR OSD Mono', -apple-system, BlinkMacSystemFont, sans-serif;
	}

	/* ASCII Background */
	.ascii-background {
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		transform: translateY(-50%);
		display: flex;
		justify-content: space-between;
		pointer-events: none;
		z-index: 0;
		padding: 0 2rem;
	}

	.ascii-left,
	.ascii-right {
		font-family: monospace;
		font-size: 8px;
		line-height: 1;
		color: #000;
		white-space: pre;
		opacity: 0.9;
	}

	.ascii-left {
		text-align: left;
	}

	.ascii-right {
		text-align: right;
	}

	/* Header */
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 3rem;
		z-index: 100;
		background: rgba(255, 255, 255, 0.95);
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.logo-dot {
		font-size: 0.75rem;
	}

	.logo-text {
		font-family: 'VCR OSD Mono', monospace;
		font-size: 1.1rem;
		font-weight: 400;
		letter-spacing: -0.02em;
	}

	.nav {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		font-family: 'VCR OSD Mono', monospace;
		font-size: 0.9rem;
		color: #000;
		text-decoration: none;
		transition: opacity 0.2s;
	}

	.nav-link:hover {
		opacity: 0.6;
	}

	.nav-dot {
		font-size: 0.5rem;
	}

	.nav-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: 'VCR OSD Mono', monospace;
		font-size: 0.85rem;
		color: #000;
		text-decoration: none;
		padding: 0.6rem 1rem;
		border: 1px solid #000;
		transition: all 0.2s;
	}

	.nav-button:hover {
		background: #000;
		color: #fff;
	}

	.button-icon {
		font-size: 1rem;
	}

	/* Hero Section */
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		z-index: 1;
	}

	.hero-content {
		text-align: center;
		padding: 2rem;
	}

	.tagline {
		font-family: 'VCR OSD Mono', monospace;
		font-size: 1.1rem;
		font-weight: 400;
		margin-bottom: 0.5rem;
		letter-spacing: 0.02em;
	}

	.headline {
		font-family: 'Bebas Neue', Impact, sans-serif;
		font-size: clamp(4rem, 12vw, 8rem);
		font-weight: 400;
		letter-spacing: 0.02em;
		line-height: 0.9;
		margin-bottom: 2rem;
	}

	.cta-button {
		display: inline-block;
		font-family: 'VCR OSD Mono', monospace;
		font-size: 0.9rem;
		color: #000;
		text-decoration: none;
		padding: 0.8rem 1.5rem;
		border: 2px solid #000;
		margin-bottom: 3rem;
		transition: all 0.2s;
	}

	.cta-button:hover {
		background: #000;
		color: #fff;
	}

	.scroll-hint {
		position: absolute;
		bottom: 3rem;
		left: 3rem;
	}

	.scroll-text {
		font-family: 'VCR OSD Mono', monospace;
		font-size: 0.75rem;
		line-height: 1.4;
		text-align: left;
		margin-bottom: 0.5rem;
	}

	.scroll-arrow {
		font-family: 'VCR OSD Mono', monospace;
		font-size: 1.5rem;
		animation: bounce 2s infinite;
	}

	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(10px);
		}
		60% {
			transform: translateY(5px);
		}
	}

	/* Responsive */
	@media (max-width: 768px) {
		.header {
			padding: 1rem 1.5rem;
			flex-direction: column;
			gap: 1rem;
		}

		.nav {
			gap: 1rem;
			flex-wrap: wrap;
			justify-content: center;
		}

		.ascii-background {
			display: none;
		}

		.scroll-hint {
			position: relative;
			bottom: auto;
			left: auto;
			text-align: center;
		}

		.scroll-text {
			text-align: center;
		}
	}
</style>
