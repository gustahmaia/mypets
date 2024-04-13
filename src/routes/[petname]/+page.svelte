<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>{data.pet?.name}</title>
	<meta name="description" content="About this pet" />
</svelte:head>

<body>
	<header class="p-4">
		<img src={data.pet?.pictureUrl} alt="pet picture {data.pet?.name}" />
		<span class="font-semibold">meu nome é {data.pet?.name}</span>
	</header>
	<section>
		<div class="div-item">idade: {data.pet?.age} anos</div>

		<div class="div-item">sexo: {data.pet?.sex === 'f' ? 'femêa' : 'macho'}</div>

		<div class="div-item">castrado: {data.pet?.castrated ? 'sim' : 'não'}</div>

		<div class="div-item">reside em: {data.pet?.address}</div>

		<div class="div-item">contato: {data.pet?.contact}</div>
	</section>
</body>

<style>

</style>
