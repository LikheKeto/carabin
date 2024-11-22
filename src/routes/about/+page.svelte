<script>
	import RabinSpeaking from '$lib/assets/WhatsApp Image 2024-11-19 at 9.37.28 PM.jpeg';
</script>

<svelte:head>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Person",
			"name": "Rabin Bhusal",
			"jobTitle": "Founder & CEO",
			"worksFor": {
				"@type": "Organization",
				"name": "R. Bhusal & Associates"
			},
			"url": "https://www.rabinbhusal.com.np",
			"sameAs": [
				"https://www.linkedin.com/in/rabin-bhusal-329b07201",
				"https://www.facebook.com/Robbinns.bhusal/"
			],
			"image": "https://www.rabinbhusal.com.np/rabinbhusal.jpeg",
			"description": "Rabin Bhusal is a Chartered Accountant and the founder of R. Bhusal & Associates, a leading CA firm in Nepal."
		}
	</script>
	<title>About Us | R. Bhusal & Associates - Leading Chartered Accountant Firm in Nepal</title>
	<meta
		name="description"
		content="Learn about R. Bhusal & Associates, a leading Chartered Accountancy firm in Nepal, offering services in accounting, audit, tax preparation, and financial advisory."
	/>
	<meta
		name="keywords"
		content="CA firm Nepal, accounting Nepal, tax preparation Nepal, R. Bhusal, Rabin Bhusal, audit services, financial advisory Nepal"
	/>
	<meta name="author" content="R. Bhusal & Associates" />
</svelte:head>

<div class="container p-4 py-12 mx-auto my-16 sm:p-0">
	<h1 class="mb-8 text-4xl font-bold leading-tight text-center">About Us</h1>
	<p class="mb-8 text-lg text-justify">
		R. Bhusal & Associates is a leading Chartered Accountancy firm in Nepal, specializing in
		accounting, auditing, tax preparation, and financial advisory services. Founded by Rabin Bhusal,
		a seasoned Chartered Accountant with extensive experience, the firm is dedicated to helping
		businesses navigate complex financial landscapes with precision and care.
	</p>

	<section>
		<h2 class="mb-4 text-3xl font-bold leading-tight text-center">Our Founder</h2>
		<div class="flex flex-col items-center justify-center gap-8 md:flex-row">
			<div class="max-w-lg">
				<img src={RabinSpeaking} alt="Portrait of Rabin Bhusal, Founder & CEO" />
			</div>
			<div class="text-center md:text-left">
				<h3 class="text-2xl font-bold">C.A. Rabin Bhusal</h3>
				<p class="text-sm font-medium">Founder & CEO, Chartered Accountant</p>
				<p class="mt-4 text-lg text-justify">
					Rabin Bhusal is a highly skilled Chartered Accountant with over four years of experience
					in the finance and accounting sector. Currently serving as the Finance Manager at Anver
					International Pvt. Ltd., he has a proven track record in year-end accounting, tax
					preparation, and financial advisory.
				</p>
				<p class="mt-4 text-lg text-justify">
					Rabin completed his Chartered Accountancy from the prestigious Institute of Chartered
					Accountants of Nepal (ICAN) and holds a Bachelor's degree in Business Studies (BBS) from
					Swayambhu International College. His expertise includes International Financial Reporting
					Standards (IFRS), Value-Added Tax (VAT), and advanced accounting practices.
				</p>
			</div>
		</div>
	</section>

	<section class="mt-12">
		<h2 class="mb-4 text-3xl font-bold leading-tight text-center">Our Mission</h2>
		<p class="mb-8 text-lg text-justify">
			At R. Bhusal & Associates, our mission is to empower businesses and individuals by providing
			high-quality financial solutions that ensure compliance, optimize performance, and foster
			growth. Integrity and professionalism are at the heart of everything we do.
		</p>
	</section>

	<section>
		<h2 class="mt-8 mb-4 text-3xl font-bold leading-tight text-center">Core Expertise</h2>
		<ul class="space-y-4 text-lg text-justify list-disc list-inside">
			<li>Year-End Accounting</li>
			<li>Tax Preparation & Advisory</li>
			<li>Financial Auditing</li>
			<li>Compliance with International Financial Reporting Standards (IFRS)</li>
			<li>Value-Added Tax (VAT) and Corporate Tax Solutions</li>
			<li>Business Consulting and Financial Strategy</li>
		</ul>
	</section>
</div>

<style>
	/* Add custom styles here if needed */
</style>
