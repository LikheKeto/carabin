<script>
	import RabinPortrait from '$lib/assets/Photo Rabin.jpg';
	import JagritImage from '$lib/assets/jagrit.jpg';
	import JivanImage from '$lib/assets/jivan.png';
	import SushantImage from '$lib/assets/sushant.jpg';
</script>

<div class="container p-4 py-12 mx-auto my-16 sm:p-0">
	<section>
		<h1 class="mb-8 text-4xl font-bold leading-tight text-center">Our Team</h1>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<article class="p-6 bg-primary">
				<img
					src={RabinPortrait}
					class="object-contain mx-auto h-44 w-44"
					alt="Portrait of Rabin Bhusal, Founder & CEO"
				/>
				<h3 class="text-xl font-bold text-center">C.A. Rabin Bhusal</h3>
				<p class="text-sm text-center">Founder & CEO</p>
				<p class="mt-4 text-justify">
					With expertise spanning over 4 years in finance and accounting, Rabin's vision is to
					transform the financial practices of businesses across Nepal.
				</p>
			</article>
			<article class="p-6 bg-primary">
				<img
					src={JivanImage}
					alt="Portrait of Rabin Bhusal, Founder & CEO"
					class="object-cover mx-auto h-44 w-44"
				/>
				<h3 class="text-xl font-bold text-center">Jivan Parajuli</h3>
				<p class="text-sm text-center">Managing Director</p>
				<p class="mt-4 text-justify">
					Jivan Parajuli, the Managing Director of R. Bhusal & Associates, leads the firm with a
					dynamic vision and a commitment to excellence.
				</p>
			</article>
			<article class="p-6 bg-primary">
				<img
					src={SushantImage}
					alt="Portrait of Rabin Bhusal, Founder & CEO"
					class="object-cover mx-auto h-44 w-44"
				/>
				<h3 class="text-xl font-bold text-center">C.A. Sushant Raut</h3>
				<p class="text-sm text-center">Consultant</p>
				<p class="mt-4 text-justify">
					C.A. Sushant Raut, a consultant at R. Bhusal & Associates, brings sharp financial
					expertise and a results-driven approach to support businesses in achieving their financial
					goals effectively.
				</p>
			</article>
			<article class="p-6 bg-primary">
				<img
					src={JagritImage}
					alt="Portrait of Rabin Bhusal, Founder & CEO"
					class="object-contain mx-auto h-44 w-44"
				/>
				<h3 class="text-xl font-bold text-center">Er. Jagrit Parajuli</h3>
				<p class="text-sm text-center">Consultant</p>
				<p class="mt-4 text-justify">
					As a trusted consultant to R. Bhusal & Associates, Jagrit works closely with the firm to
					integrate innovative technology solutions that enhance audit practices, improve data
					accuracy, and streamline client services.
				</p>
			</article>

			<!-- Add more team members here -->
		</div>
	</section>
</div>
