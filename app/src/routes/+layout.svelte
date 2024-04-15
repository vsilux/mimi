<script lang="ts">
	import NavBar from '../components/NavBar.svelte';

	function scrollTo(id: string) {
		const element = document.getElementById(id);
		element?.scrollIntoView({ behavior: 'smooth' });
	}

	let navButtons = [
		// { label: 'Блок 1', action: () => scrollTo('block1') },
		// { label: 'Блок 2', action: () => scrollTo('block2') },
		// { label: 'Блок 3', action: () => scrollTo('block3') }
		{ label: 'Contacts & Manuals', action: () => scrollTo('block') }
	];
</script>

<svelte:head>
	<title>Aircraft Designs</title>
	<meta name="description" content="Aircraft designs home page" />
</svelte:head>

<div class="container">
	<NavBar buttons={navButtons} />
	<main>
		<section id="block1" class="block" style="background-color: black;">
			<!-- Tomato -->
			<h2>Блок 1</h2>
			<p style="color: white;">Це перший блок з вашим контентом.</p>
		</section>
		<section id="block2" class="block" style="background-color: white;">
			<!-- SteelBlue -->
			<h2>Блок 2</h2>
			<p>Це другий блок з іншим контентом.</p>
		</section>
		<section id="block3" class="block" style="background-color: #32CD32;">
			<!-- LimeGreen -->
			<h2>Блок 3</h2>
			<p>Це третій блок, також з унікальним контентом.</p>
		</section>
		<section id="block4" class="block" style="background-color: orange;">
			<!-- LimeGreen -->
			<h2>Блок 4</h2>
			<p>Це третій блок, також з унікальним контентом.</p>
		</section>
	</main>
</div>

<style>
	main {
		width: 100%; /* Задаємо ширину головному контейнеру */
	}

	.block {
		height: 1200px; /* Мінімальна висота кожного блоку - 100% від висоти вікна переглядача */
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px;
		box-sizing: border-box;
		text-align: center;
		transform: translateZ(0);
	}
</style>
