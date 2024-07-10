<script>
	export let spotlightType;
	export let marginSize;
</script>

<section class="spotlight {spotlightType} {marginSize}">
	<div class="spotlight-content">
		<ul class="taglist">
			<li>
				<a href="/" class="tag content-type">
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none" role="img">
						<title>Speech Icon</title>
						<path d="M5.7 2.25C5.95937 2.69688 6.44375 3 7 3H9C9.82812 3 10.5 2.32812 10.5 1.5C10.5 0.671875 9.82812 0 9 0H7C6.44375 0 5.95937 0.303125 5.7 0.75H5.25C3.73125 0.75 2.5 1.98125 2.5 3.5V4.5H0.75C0.334375 4.5 0 4.83437 0 5.25C0 5.66563 0.334375 6 0.75 6H13.25C13.6656 6 14 5.66563 14 5.25C14 4.83437 13.6656 4.5 13.25 4.5H4V3.5C4 2.80938 4.55937 2.25 5.25 2.25H5.7ZM1.5 7L2.30312 14.2219C2.41562 15.2344 3.27188 16 4.29063 16H9.70938C10.7281 16 11.5844 15.2344 11.6969 14.2219L12.5 7H1.5Z" fill="black"/>
					</svg>
					Content Type
				</a>
			</li>
			<li>
				<a href="/" class="tag category">
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none" role="img">
						<title>Icon for Monetary Policy</title>
						<g clip-path="url(#clip0_721_133)">
							<path opacity="0.4" d="M12.5 3C12.5 3.35313 12.4375 3.69375 12.325 4.00938C12.2188 4.00313 12.1094 4 12 4H8C7.5625 4 7.1375 4.05625 6.73438 4.1625C6.58438 3.80625 6.5 3.4125 6.5 3C6.5 1.34375 7.84375 0 9.5 0C11.1563 0 12.5 1.34375 12.5 3Z" fill="#1E3050"/>
							<path d="M15.8438 3.62188L15.4125 5.34688C15.9062 5.80938 16.3094 6.37188 16.5844 7H17C17.5531 7 18 7.44688 18 8V11C18 11.5531 17.5531 12 17 12H16C15.7156 12.3781 15.3781 12.7156 15 13V15C15 15.5531 14.5531 16 14 16H13C12.4469 16 12 15.5531 12 15V14H8V15C8 15.5531 7.55312 16 7 16H6C5.44688 16 5 15.5531 5 15V13C3.90937 12.1812 3.16563 10.9281 3.025 9.5H2.125C0.95 9.5 0 8.55 0 7.375C0 6.2 0.95 5.25 2.125 5.25H2.25C2.66563 5.25 3 5.58437 3 6C3 6.41563 2.66563 6.75 2.25 6.75H2.125C1.78125 6.75 1.5 7.03125 1.5 7.375C1.5 7.71875 1.78125 8 2.125 8H3.1C3.5625 5.71875 5.58125 4 8 4H12C12.2437 4 12.4844 4.01875 12.7188 4.05C13.2688 3.40938 14.0875 3 15 3H15.3594C15.6844 3 15.9219 3.30625 15.8438 3.62188ZM13.25 9C13.4489 9 13.6397 8.92098 13.7803 8.78033C13.921 8.63968 14 8.44891 14 8.25C14 8.05109 13.921 7.86032 13.7803 7.71967C13.6397 7.57902 13.4489 7.5 13.25 7.5C13.0511 7.5 12.8603 7.57902 12.7197 7.71967C12.579 7.86032 12.5 8.05109 12.5 8.25C12.5 8.44891 12.579 8.63968 12.7197 8.78033C12.8603 8.92098 13.0511 9 13.25 9Z" fill="#0060A0"/>
						</g>
						<defs>
							<clipPath id="clip0_721_133">
								<rect width="18" height="16" fill="white"/>
							</clipPath>
						</defs>
					</svg>
					Category Type
				</a>
			</li>
		</ul><!-- /taglist-->
		<h3 class="spotlight-title">Spotlight - {spotlightType}</h3>
		<p>Let's have a little bit of fun today. Don't be afraid to make these big decisions. Once you start, they sort of just make themselves. It's almost like something out of a fairytale book. When you buy that first tube of paint it gives you an artist license.</p>
		<p class="button-group">
			<a href="/" class="btn btn-primary">Read Article <span class="sr-only">on article title</span></a>
			<a href="/" class="btn btn-primary">Watch Video <span class="sr-only">on article title</span></a>
		</p><!--/button-group-->
	</div><!-- /spotlight-content-->
	<picture class="spotlight-image">
		<source media="(max-width: 750px)" srcset="http://fpoimg.com/900x600?text=Spotlight%20Mobile&bg_color=414181&text_color=ffffff" />
		<source media="(max-width: 1150px)" srcset="http://fpoimg.com/900x600?text=Spotlight%20Tablet&bg_color=414181&text_color=ffffff" />
		<img src="http://fpoimg.com/900x600?text=Spotlight&bg_color=414181&text_color=ffffff" width="900" height="600" alt="FPO Spotlight" />
	</picture><!--/spotlight-image -->
</section><!--/spotlight-->