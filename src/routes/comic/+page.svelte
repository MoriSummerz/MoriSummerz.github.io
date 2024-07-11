<script lang="ts">
	import Comic from '$lib/components/Comic.svelte';
	export let data;
</script>

<Comic {...data.comic} />
