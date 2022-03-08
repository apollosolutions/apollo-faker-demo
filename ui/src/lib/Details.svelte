<script>
  export let thing;
  export let subgraphs;

  $: relevantSubgraphs = thing?.subgraphs
    ?.map((id) => subgraphs.find((s) => s.id === id))
    .map((s) => ({ name: s.id, contact: s.contact?.[0] }));
</script>

<div class="space-y-4">
  <div>
    <p class="text-sm font-bold uppercase tracking-wide text-gray-500">
      {thing.kind}
    </p>
    <h2 class="text-lg">{thing.id}</h2>
    <p
      class:text-gray-500={!thing.description}
      class:italic={!thing.description}
    >
      {thing.description ?? "No Description"}
    </p>
  </div>

  <div class="space-y-2">
    <h3 class="text-sm font-bold uppercase tracking-wide text-gray-500">
      Subgraphs
    </h3>
    {#each relevantSubgraphs as subgraph}
      {#if subgraph}
        <div>
          <a class="text-blue-600" href={subgraph.contact?.url}
            >{subgraph.name}</a
          >
          <p>{subgraph.contact?.description}</p>
        </div>
      {/if}
    {/each}
  </div>
</div>
