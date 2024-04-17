<!-- NavigationBar.svelte -->

<script lang="ts">
	import { onMount } from 'svelte';

	interface Button {
		label: string;
		action: () => void; // Define action as a function type
	}

	// let iconUrl =
	// 'https://cdn.sanity.io/images/aik9dq8j/production/6ab29e7b39c39fc8d0dc8657f8f1661b85a4d2aa-24x16.svg';
	export let buttons: Button[] = [];

	let backgroundOpacity = 0;

	function updateOpacity() {
		const scrollY = window.scrollY;
		const screenHeight = window.innerHeight;
		const startChanging = screenHeight / 2 - 200; // 100px before the center of the screen
		const endChanging = screenHeight / 2 + 200; // 100px after the center of the screen

		if (scrollY < startChanging) {
			backgroundOpacity = 0;
		} else if (scrollY > endChanging) {
			backgroundOpacity = 1;
		} else {
			// Linear interpolation between startChanging and endChanging
			backgroundOpacity = (scrollY - startChanging) / (endChanging - startChanging);
		}

		window.requestAnimationFrame(updateOpacity);
	}

	// Safeguard browser-specific code
	onMount(() => {
		window.requestAnimationFrame(updateOpacity);

		// Cleanup on component destruction
		return () => {};
	});
</script>

<div class="navbar" style="background-color: rgba(0, 0, 0, {backgroundOpacity});">
	<div class="left_content">
		<img src="/logo.svg" alt="Logo" class="logo" />
	</div>
	<div class="button-container">
		{#each buttons as { label, action }}
			<button class="link-button" on:click={action}>{label}</button>
		{/each}
	</div>
</div>

<style>
	/* Style your navigation bar here */
	.navbar {
		display: flex;
		z-index: 10;
		position: fixed;
		display: flex;
		align-items: center;
		/* position: fixed; */
		justify-content: space-between; /* Aligns items on opposite ends */
		top: 0;
		left: 0;
		right: 0;
		transition: background-color 0.3s ease;
		color: white;
		padding: 16px 35px 16px 35px;
		will-change: transform;
	}

	.button-container {
		margin-bottom: 1px;
	}

	.link-button {
		vertical-align: middle;
		margin: 0;
		padding: 0;
		background: none;
		border: none;
		color: white;
		position: relative;
		cursor: pointer;
		display: inline-block;
		font-family: 'PP Neue Montreal';
		font-weight: 300;
		font-size: 1em;
		line-height: 110%;
		letter-spacing: -1%;
		text-decoration: none;
		text-align: right; /* Aligns text inside button as if it were a link */
	}

	.link-button::after {
		content: ''; /* Необхідно для відображення псевдоелемента */
		position: absolute;
		left: 0; /* Початок з лівого краю кнопки */
		right: 0; /* Простягання до правого краю кнопки */
		bottom: -1px; /* Відступ знизу */
		height: 1px; /* Висота підкреслення */
		background-color: white; /* Колір підкреслення */
		opacity: 1; /* Непрозорість для видимості */
	}

	.link-button:hover,
	.link-button:focus {
		text-decoration: none; /* Adds underline on hover/focus for better UX */
		outline: none; /* Removes default focus outline, add custom if needed for visibility */
	}

	.left_content {
		display: flex;
		align-items: center;
	}

	.logo {
		fill: white;
	}
</style>
