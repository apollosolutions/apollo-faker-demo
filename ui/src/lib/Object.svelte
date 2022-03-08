<script>
  import { getContext } from "svelte";
  import collapse from "./collapse.js";
  import FieldDefinition from "./FieldDefinition.svelte";
  import HighlightBars from "./HighlightBars.svelte";

  export let object;
  export let db;

  $: fields = object?.fields?.sort()?.map((fieldId) => db[fieldId]) ?? [];

  const visibleElementIds = getContext("visibleElementIds");
  const highlightOptions = getContext("highlightOptions");
  const selectedHighlight = getContext("selectedHighlight");
  const selected = getContext("selected");

  $: visible = $visibleElementIds.includes(object?.id);
  $: highlight = $selectedHighlight?.fn?.(object)
    ? $selectedHighlight.color.bg
    : "";
</script>

<div use:collapse={{ open: visible }}>
  <div class="flex space-x-1 {highlight}">
    <HighlightBars options={$highlightOptions} {object} />
    <button class="hover:underline" on:click={() => ($selected = object)}
      >type {object?.id}</button
    >
  </div>

  {#each fields as field}
    <FieldDefinition fieldDef={field} />
  {/each}
</div>
