<script>
	/** @type {import('./$types').PageData} */
	export let data
	export const bgItemTonality = 300
</script>

<svelte:head>
	<title>{data.pet?.name}</title>
	<meta name="description" content="About this pet" />
</svelte:head>

<body class={data.pet?.sex === 'f' ? 'bg-pink-100' : 'bg-blue-100'}>
	<header class="p-4 flex flex-col items-center justify-center">
		<img
			class="w-32 h-32 rounded-full border-4 border-white shadow-md"
			src={data.pet?.pictureUrl}
			alt="pet picture {data.pet?.name}"
		/>
		<span class="font-semibold text-justify text-sm mt-8"
			>Meu nome é {data.pet?.name} sou um gato(a) muito fujão, se você me encontrou é um humano de muita
			sorte, pois trago boas energias a você e seu lar mas ainda existe uma família a minha espera, por
			favor entre em contato, isso é fácil, clicando no meu endereço ou no contato com a magia do gato
			você será redirecionado para conversar com meu mestre... Miauu miauuu
		</span>
	</header>
	<section>
		<div class="p-2 m-8 rounded-lg {data.pet?.sex === 'f' ? 'bg-pink-300' : 'bg-blue-300'}">
			<span class="font-bold">raça:</span>
			<span class="font-semibold">{data.pet?.race}</span>
		</div>

		<div class="p-2 m-8 rounded-lg {data.pet?.sex === 'f' ? 'bg-pink-300' : 'bg-blue-300'}">
			<span class="font-bold">idade:</span>
			<span class="font-semibold">{data.pet?.age} anos</span>
		</div>

		<div class="p-2 m-8 rounded-lg {data.pet?.sex === 'f' ? 'bg-pink-300' : 'bg-blue-300'}">
			<span class="font-bold">sexo:</span>
			<span class="font-semibold">{data.pet?.sex === 'f' ? 'femêa' : 'macho'}</span>
		</div>

		<div class="p-2 m-8 rounded-lg {data.pet?.sex === 'f' ? 'bg-pink-300' : 'bg-blue-300'}">
			<span class="font-bold">castrado:</span>
			<span class="font-semibold">{data.pet?.castrated ? 'sim' : 'não'}</span>
		</div>

		<div
			class="p-2 m-8 rounded-lg cursor-pointer {data.pet?.sex === 'f'
				? 'bg-pink-300'
				: 'bg-blue-300'}"
		>
			<span class="font-bold">reside em:</span>
			<a class="font-semibold" href="https://maps.google.com/?q={data.pet?.address}"
				>{data.pet?.address}</a
			>
		</div>

		<div
			class="p-2 m-8 rounded-lg cursor-pointer {data.pet?.sex === 'f'
				? 'bg-pink-300'
				: 'bg-blue-300'}"
		>
			<span class="font-bold">contato:</span>
			<a class="font-semibold" href="http://wa.me/{data.pet?.contact}">{data.pet?.contactString}</a>
		</div>
	</section>
</body>

<style lang="postcss">
	:global(html) {
		color: theme(colors.gray.800);
	}
</style>
