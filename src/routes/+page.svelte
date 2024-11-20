<script>
	import { comma } from 'postcss/lib/list';
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
			"description": "R. Bhusal & Associates provides comprehensive accounting, audit, and advisory services in Nepal.",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Mahalaxmi 4",
				"addressLocality": "Lalitpur",
				"addressRegion": "Bagmati",
				"postalCode": "44700",
				"addressCountry": "Nepal"
			},
			"telephone": "+977 9861350009",
			"email": "carabinbhusal@gmail.com",
			"url": "https://www.rabinbhusal.com.np"
		}
	</script>
</svelte:head>

<Banner />
<hr />
<Services />
<hr />
<Testimonials />
