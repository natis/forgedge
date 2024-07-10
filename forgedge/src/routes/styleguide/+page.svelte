<script>
	import Header from "../../components/global/header.svelte";
	import Footer from "../../components/global/footer.svelte";
	import TableComponent from "../../components/table-component.svelte";
	import Breadcrumbs from "../../components/breadcrumbs.svelte";
	import Accordion from "../../components/accordion.svelte";
</script>

<svelte:head>
	<title>FRBA Redesign Project - Styleguide</title>
	<meta name="description" content="FRBA Redesign Project - Homepage Template">
</svelte:head>

<Header />
<main>

<Breadcrumbs />

<section class="section-frame">
	<div class="component-frame">
		<h1 class="h1">This is an H1</h1>
		<p>This page exists to show general content elements and how they're styled. This is an example of an <a href="/">in-content link</a> and an example of a footnote link.<a href="/"><sup>3</sup></a> No pressure. Just relax and watch it happen. I will take some magic white, and a little bit of Vandyke brown and a little touch of yellow. Nature is so fantastic, enjoy it. Let it make you happy. Maybe there's a happy little waterfall happening over here. If you overwork it you become a cloud killer. There's nothing worse than a cloud killer.</p>
		<p>Fluff it up a little and hypnotize it. You can work and carry-on and put lots of little happy things in here. Just a little indication.</p>
		<p>With practice comes confidence. Let's have a little bit of fun today. We'll throw some old gray clouds in here just sneaking around and having fun.</p>
		<p>Don't be afraid to make these big decisions. Once you start, they sort of just make themselves. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue In your imagination you can go anywhere you want.</p>
		<h2 class="h2">Headlines (this is an H2)</h2>
		<h3 class="h3">Headline Level 3</h3>
		<h4 class="h4">Headline Level 4</h4>
		<h5 class="h5">Headline Level 5</h5>
		<h3 class="h6">Headline Level 6</h3>
		<h2>Buttons</h2>
		<p>These are button options on the primary (light) background.</p>
		<p>
			<a href="/" class="btn btn-primary">Primary Button</a>
			<a href="/" class="btn btn-secondary">Secondary Button</a>
			<a href="/" class="btn btn-tertiary">Tertiary Button</a> 
		</p>
	</div><!--/margin-container -->
</section>
<section class="section-frame sct-secondary">
	<div class="margin-container component-frame">
		<p>These are button options on the secondary (dark) background.</p>
		<p>
			<a href="/" class="btn btn-primary">Primary Button</a>
			<a href="/" class="btn btn-secondary">Secondary Button</a>
			<a href="/" class="btn btn-tertiary">Tertiary Button</a> 
		</p>
	</div>
</section>
<section class="component-frame">
	<div class="margin-container">
		<h2 class="h2">Tables</h2>
		<TableComponent />
		<h2 class="h2">Lists</h2>
		<p>This is a sample of an unordered list within content.</p>
		<ul>
			<li><p>Sample List Item</p></li>
			<li><p>Get away from those little Christmas tree things we used to make in school. In painting, you have unlimited power. You have the ability to move mountains.</p></li>
			<li><p>These trees are so much fun. I get started on them and I have a hard time stopping. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right.</p></li>
			<li><p>Of course he's a happy little stone, cause we don't have any other kind. Life is too short to be alone, too precious. Share it with a friend.</p></li>
		</ul>
		<p>And a sample of an ordered list.</p>
		<ol>
			<li><p>Sample List Item</p></li>
			<li><p>Get away from those little Christmas tree things we used to make in school. In painting, you have unlimited power. You have the ability to move mountains.</p></li>
			<li><p>These trees are so much fun. I get started on them and I have a hard time stopping. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right.</p></li>
			<li><p>Of course he's a happy little stone, cause we don't have any other kind. Life is too short to be alone, too precious. Share it with a friend.</p></li>
		</ol>
		<h2>Full Width Image / Figure with caption</h2>
		<figure>
			<img src="/images/fpo/homehero-desktop.webp" width="2880" height="1064" alt="FPO Image2" />
			<figcaption>An example of a caption under an image.</figcaption>
		</figure>
		<h2>Floated images with captions</h2>
		<figure class="figure-left">
			<img src="http://fpoimg.com/300x400?text=FPO" width="300" height="400" alt="FPO Image3" />
			<figcaption>An example of a caption under an image.</figcaption>
		</figure>
		<p>Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. I'm a water fanatic. I love water. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue You can create beautiful things - but you have to see them in your mind first. Don't fiddle with it all day.</p>
		<p>Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. Let all these little things happen. Don't fight them. Learn to use them. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush.</p>
		<p>This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. And right there you got an almighty cloud. We need a shadow side and a highlight side. There isn't a rule. You just practice and find out which way works best for you. We don't have to be committed. We are just playing here.</p>
		<p>Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. I'm a water fanatic. I love water. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue You can create beautiful things - but you have to see them in your mind first. Don't fiddle with it all day.</p>
		<p>Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. Let all these little things happen. Don't fight them. Learn to use them. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush.</p>
		<p>This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. And right there you got an almighty cloud. We need a shadow side and a highlight side. There isn't a rule. You just practice and find out which way works best for you. We don't have to be committed. We are just playing here.</p>
		<figure class="figure-right">
			<img src="http://fpoimg.com/300x400?text=FPO" width="300" height="400" alt="FPO Image4" />
			<figcaption>An example of a caption under an image.</figcaption>
		</figure>
		<p>Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. I'm a water fanatic. I love water. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue You can create beautiful things - but you have to see them in your mind first. Don't fiddle with it all day.</p>
		<p>Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. Let all these little things happen. Don't fight them. Learn to use them. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush.</p>
		<p>This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. And right there you got an almighty cloud. We need a shadow side and a highlight side. There isn't a rule. You just practice and find out which way works best for you. We don't have to be committed. We are just playing here.</p>
		<p>Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. I'm a water fanatic. I love water. I'm gonna start with a little Alizarin crimson and a touch of Prussian blue You can create beautiful things - but you have to see them in your mind first. Don't fiddle with it all day.</p>
		<p>Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger. Let all these little things happen. Don't fight them. Learn to use them. I really believe that if you practice enough you could paint the 'Mona Lisa' with a two-inch brush.</p>
		<p>This is where you take out all your hostilities and frustrations. It's better than kicking the puppy dog around and all that so. And right there you got an almighty cloud. We need a shadow side and a highlight side. There isn't a rule. You just practice and find out which way works best for you. We don't have to be committed. We are just playing here.</p>
		<Accordion />
	</div>
</section><!-- /section-frame -->

</main>

<Footer />

