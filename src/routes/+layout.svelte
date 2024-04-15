<script>
	import './styles.css';
</script>

<slot />

<style lang="postcss">
	:global(html) {
		height: 100vh;
		color: theme(colors.gray.800);
	}
</style>
