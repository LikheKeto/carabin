<script>
	import Header from '../components/Header.svelte';
	import Footer from '../components/Footer.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>R. Bhusal & Associates - Accounting, Audit, and Advisory Services</title>
	<meta
		name="description"
		content="R. Bhusal & Associates provides comprehensive accounting, audit, and advisory services in Nepal."
	/>
	<meta name="keywords" content="accounting, audit, advisory services, Nepal, CA firm" />
	<meta name="author" content="R. Bhusal & Associates" />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto:wght@400;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-grow">
		<slot />
	</main>
	<Footer />
</div>
