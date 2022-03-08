<script>
  import { getContext } from "svelte";
  import collapse from "./collapse.js";
  import HighlightBars from "./HighlightBars.svelte";

  export let fieldDef;
  // export let db;

  const visibleElementIds = getContext("visibleElementIds");
  const highlightOptions = getContext("highlightOptions");
  const selectedHighlight = getContext("selectedHighlight");
  const selected = getContext("selected");

  $: visible = $visibleElementIds.includes(fieldDef.id);
  $: highlight = $selectedHighlight?.fn?.(fieldDef)
    ? $selectedHighlight.color.bg
    : "";
</script>

<p use:collapse={{ open: visible }} class="flex space-x-1 {highlight}">
  <HighlightBars options={$highlightOptions} object={fieldDef} />
  <button
    class="inline-block pl-4 hover:underline"
    on:click={() => ($selected = fieldDef)}
    >{fieldDef.name}: {fieldDef.type}</button
  >
</p>
