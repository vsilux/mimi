<!-- NavigationBar.svelte -->

<script lang="ts">
	interface Button {
		label: string;
		action: () => void; // Define action as a function type
	}

	// let iconUrl =
	// 'https://cdn.sanity.io/images/aik9dq8j/production/6ab29e7b39c39fc8d0dc8657f8f1661b85a4d2aa-24x16.svg';
	export let buttons: Button[] = [];
</script>

<div class="navbar">
	<div class="left_content">
		<svg
			class="icon"
			width="24"
			height="16"
			viewBox="0 0 24 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0 14.1222L7.78959 7.84287L0 2.13441L1.29827 0.421875H18.1757L19.474 2.13441H22.0705L23.3688 3.84695L1.29827 15.8347L0 14.1222Z"
				fill="#FFFFFF"
			/>
		</svg>
		<div class="nav_title">
			<span style="font-weight: 500; color: black">Aircraft&nbsp;</span><span
				style="font-weight: 300; color: black">Designs</span
			>
		</div>
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

		height: 38px;
		display: flex;
		align-items: center;
		font-size: var(--font-size-4);
		/* position: fixed; */
		justify-content: space-between; /* Aligns items on opposite ends */
		top: 0;
		left: 0;
		filter: invert(1);
		mix-blend-mode: difference;
		background-color: transparent;
		color: black;
		padding: 10px 20px;
		width: 100%;
		will-change: transform;
	}

	.link-button {
		background: none;
		border: none;
		color: black;
		cursor: pointer;
		padding: 5px;
		margin-right: 10px;
		font-weight: 400; /* Inherits font styles from parent, including size and family */
		font-size: var(--font-size-2);
		text-align: left; /* Aligns text inside button as if it were a link */
		text-decoration: none; /* Optional: if you want underline on hover, add it here */
	}

	.button-container {
		margin-right: 2em;
	}

	.link-button:hover,
	.link-button:focus {
		text-decoration: underline; /* Adds underline on hover/focus for better UX */
		outline: none; /* Removes default focus outline, add custom if needed for visibility */
	}

	.left_content {
		display: flex;
		align-items: center;
	}

	.icon {
		width: 24px;
		height: 16px;
		fill: currentColor;
		filter: invert(1);
		mix-blend-mode: difference;
	}

	.link-button {
		background: none;
		border: none;
		color: black;
		cursor: pointer;
		padding: 5px;
		margin-right: 10px;
		font: inherit; /* Inherits font styles from parent, including size and family */
		text-align: left; /* Aligns text inside button as if it were a link */
		text-decoration: none; /* Optional: if you want underline on hover, add it here */
	}

	.link-button:hover,
	.link-button:focus {
		text-decoration: none; /* Adds underline on hover/focus for better UX */
		outline: none; /* Removes default focus outline, add custom if needed for visibility */
	}
</style>
