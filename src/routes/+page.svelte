<script>
	import Banner from '../components/Banner.svelte';
	import Services from '../components/Services.svelte';
	import Testimonials from '../components/Testimonials.svelte';
</script>

<svelte:head>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "AccountingService",
			"name": "R. Bhusal & Associates",
			"description": "R. Bhusal & Associates is a premier Chartered Accountancy (CA) firm in Nepal specializing in accounting, auditing, taxation, and advisory services.",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Mahalaxmi 4, Imadol",
				"addressLocality": "Lalitpur",
				"addressRegion": "Bagmati",
				"postalCode": "44700",
				"addressCountry": "NP"
			},
			"geo": {
				"@type": "GeoCoordinates",
				"latitude": "27.6490186", // Replace with actual latitude
				"longitude": "85.3472178" // Replace with actual longitude
			},
			"telephone": "+977-9861350009",
			"email": "carabinbhusal@gmail.com",
			"url": "https://www.rabinbhusal.com.np",
			"openingHours": "Mo-Fr 09:00-18:00",
			"founder": "Rabin Bhusal",
			"sameAs": [
				"https://www.linkedin.com/in/rabin-bhusal-329b07201",
				"https://www.facebook.com/RBhusalAssociates"
			]
		}
	</script>
	<title>R. Bhusal & Associates - Leading Chartered Accountancy Firm in Nepal</title>
	<meta
		name="description"
		content="R. Bhusal & Associates is a trusted Chartered Accountancy (CA) firm in Nepal, providing expert services in accounting, auditing, taxation, financial advisory, and company formation."
	/>
	<meta
		name="keywords"
		content="Nepal CA, Chartered Accountants Nepal, Chartered Accountancy Nepal, Accounting Services Nepal, Taxation Nepal, Financial Advisory, Audit Services Nepal, Company Formation, Rabin Bhusal, R. Bhusal and Associates"
	/>
</svelte:head>

<Banner />
<hr />
<Services />
<hr />
<Testimonials />
