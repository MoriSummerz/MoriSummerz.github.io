<script lang="ts">
	import { page } from '$app/stores';

	export const ssr = false;

	const links = [
		{ name: 'Portfolio', href: '/' },
		{ name: 'Comic', href: '/comic' }
	];
	console.log($page.url.pathname);
</script>

<header>
	{#each links as link}
		<button
			on:click={() => (window.location.href = link.href)}
			class:selected={$page.url.pathname === link.href}>{link.name}</button
		>
	{/each}
</header>
<slot></slot>
<footer>© 2024 morisummer</footer>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		height: 60px;
		background: rgba(255, 255, 255, 0);
		padding: 0 20px;
		box-sizing: border-box;
		position: fixed;
		top: 0;
		left: 0;
	}

	header button {
		background: rgba(255, 255, 255, 0);
		color: white;
		font-size: 16px;
		margin-right: 15px;
		cursor: pointer;
		transition: color 0.3s;
		border: 1px solid white;
		border-radius: 5px;
		padding: 10px 20px;
	}

	header button:hover {
		color: #ccc;
	}

	header button.selected {
		background-color: rgba(255, 255, 255, 0.1);
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 60px;
		background: rgba(255, 255, 255, 0);
		color: white;
		position: fixed;
		bottom: 0;
		left: 0;
		opacity: 50%;
	}
</style>
