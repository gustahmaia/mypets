<script>
	import './styles.css';
</script>

<main class="p-8">
	<slot />
</main>

<style lang="postcss">
	:global(html) {
		color: theme(colors.gray.800);
	}
</style>
