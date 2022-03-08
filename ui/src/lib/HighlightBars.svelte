<script>
  export let options;
  export let object;
</script>

{#each options as option}
  <span
    class="inline-block w-[3px] {option.fn(object) ? option.color.bar : ''}"
  />
{/each}
