<svelte:head>
	<title>Contact | R. Bhusal & Associates - Leading Chartered Accountancy Firm in Nepal</title>
</svelte:head>
<div class="container py-12 mx-auto">
	<h1 class="mb-8 text-4xl font-bold">Contact Us</h1>
	<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
		<div class="p-6 bg-primary">
			<h2 class="mb-4 text-2xl font-bold">Get in Touch</h2>
			<form action="https://formspree.io/f/movqlbok" method="POST">
				<div class="mb-4">
					<label for="name" class="block mb-2 text-lg font-bold">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						class="w-full p-2 border rounded border-neutral"
					/>
				</div>
				<div class="mb-4">
					<label for="email" class="block mb-2 text-lg font-bold">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						class="w-full p-2 border rounded border-neutral"
					/>
				</div>
				<div class="mb-4">
					<label for="phone" class="block mb-2 text-lg font-bold">Phone</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						class="w-full p-2 border rounded border-neutral"
					/>
				</div>
				<div class="mb-4">
					<label for="message" class="block mb-2 text-lg font-bold">Message</label>
					<textarea
						id="message"
						name="message"
						rows="4"
						class="w-full p-2 border rounded border-neutral"
					></textarea>
				</div>
				<button type="submit" class="px-6 py-3 font-bold bg-accent text-primary hover:bg-neutral"
					>Send Message</button
				>
			</form>
		</div>
		<div class="p-6 bg-primary">
			<h2 class="mb-4 text-2xl font-bold">Visit Us</h2>
			<p class="mb-4 text-lg">Mahalaxmi 4, Imadol - Lalitpur, Nepal</p>
			<p class="mb-4 text-lg">
				Phone: <a href="tel:+9779861350009" class="hover:underline">+977 9861350009</a>
			</p>
			<p class="mb-4 text-lg">
				Email: <a href="mailto:info@rabinbhusal.com.np" class="hover:underline"
					>info@rabinbhusal.com.np</a
				>
			</p>
			<p class="mb-4 text-lg">Office Hours: Mon-Fri, 9:00 AM - 5:00 PM</p>
			<div class="mt-4">
				<!-- Google Maps Integration -->
				<div style="width: 100%">
					<iframe
						width="100%"
						height="600"
						frameborder="0"
						scrolling="no"
						marginheight="0"
						marginwidth="0"
						src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mahalaxmi%204,%20Imadol+(R.%20Bhusal%20&amp;%20Associates)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						><a href="https://www.gps.ie/">gps devices</a></iframe
					>
				</div>
			</div>
		</div>
	</div>
</div>
