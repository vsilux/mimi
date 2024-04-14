<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '../components/Card.svelte';
	import Welcome from '../components/Welcome.svelte';
	import type { PageData } from './$types';
	import type { Post } from '$lib/sanity/queries';

	export let data: PageData;
	const q = useQuery(data);

	let aPost: Post;
	$: {
		if ($q.data.length > 0) {
			aPost = $q.data.at(0) as Post;
		}
	}

	$: ({ data: posts } = $q);
</script>

<section>
	{#if aPost != null}
		{#each Array.from({ length: 10 }) as _}
			<Card post={aPost} />
		{/each}
	{:else}
		<Welcome />
	{/if}
</section>
