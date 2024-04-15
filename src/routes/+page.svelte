<script>
	import lunny from '$lib/images/lunny_1.jpeg';
	import ninho from '$lib/images/ninho_1.jpeg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<body class="h-full bg-gray-200">
	<section class="w-full h-full flex flex-row flex-wrap items-center justify-center">
		<a href="/ninho" class="m-12">
			<div class="flex flex-col items-center justify-center ">
				<img
					class="w-28 h-28 rounded-full border-4 border-white shadow-md cursor-pointer"
					src={ninho}
					alt="pet picture {ninho}"
				/>
				<span class="cursor-pointer font-semibold">Ninho</span>
			</div>
		</a>

		<a href="/lunny" class="m-12">
			<div class="flex flex-col items-center justify-center">
				<img
					class="w-28 h-28 rounded-full border-4 border-white shadow-md cursor-pointer"
					src={lunny}
					alt="pet picture {lunny}"
				/>
				<span class="cursor-pointer font-semibold">Lunny</span>
			</div>
		</a>
	</section>
</body>

<style>
</style>
