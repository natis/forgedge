<script>
	export let heroAlternate;
	export let marginSize;
	export let heroVariant;
	export let mobileImage;
	export let tabletImage;
	export let desktopImage;
</script>

<div class="component-frame full-width {marginSize}">
	<section class="hero-home {heroAlternate} {heroVariant}">
		<picture class="hero-image">
			<source media="(max-width: 750px)" srcset="{mobileImage}" />
			<source media="(max-width: 1150px)" srcset="{tabletImage}" />
			<img src="{desktopImage}" width="2880" height="1064" alt="FPO Image1" />
		</picture><!--/hero-image -->
		<div class="hero-content">
			<h2 class="home-hero-title">Helping create an inclusive and resilient economy for everyone</h2>
			<p>Welcome to the Federal Reserve Bank of Atlanta! As part of the nation's central bank, we're dedicated to fostering economic well-being for all. </p>
			<p>Our mission is to promote maximum employment, stable prices, financial stability, and community development</p>
			<p>Learn more about us, our district, and our president and CEO, Raphael Bostic. </p>
			<p class="button-group">
				<a href="/" class="btn btn-primary">About Us</a>
				<a href="/" class="btn btn-primary">About Raphael</a>
				<a href="/" class="btn btn-primary">Careers</a>
			</p><!--/button-group-->
		</div><!-- /hero-content-->
	</section><!-- /hero-home-->
</div><!--/component-frame -->