<script>
  import Object from "./Object.svelte";

  /** @type {{ query: string; objects: any[], elements: Record<string, any> }} */
  export let serialized;
</script>

<!-- <pre>{JSON.stringify(serialized, null, 2)}</pre> -->
<div>
  <Object
    object={serialized.elements[serialized.query]}
    db={serialized.elements}
  />

  {#each serialized.objects.sort() as objectId}
    <Object object={serialized.elements[objectId]} db={serialized.elements} />
  {/each}
</div>
