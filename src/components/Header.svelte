<script>
	import logoImage from '$lib/assets/logo.png';
	import Icon from '@iconify/svelte';
</script>

<header class="px-2 py-2 text-base md:px-4 lg:py-0 lg:px-8 bg-primary">
	<nav class="flex flex-wrap items-center justify-between mx-auto gap-y-4">
		<a href="/" class="text-xl font-light">
			<img width="100" src={logoImage} alt="logo" />
		</a>
		<ul class="flex flex-wrap space-x-4 md:space-x-8 lg:space-x-16">
			<li><a href="/" class="hover:underline">Home</a></li>
			<li><a href="/about" class="hover:underline">About Us</a></li>
			<li><a href="/services" class="hover:underline">Services</a></li>
			<li><a href="/contact" class="hover:underline">Contact</a></li>
		</ul>
		<div>
			<a
				href="tel:+9779861350009"
				class="flex items-center gap-2 p-4 tracking-tight text-white bg-neutral"
			>
				<Icon icon="solar:phone-bold" />
				+977-98621350009
			</a>
		</div>
	</nav>
</header>
