<script>
  import { onMount, setContext } from "svelte";
  import { derived, writable } from "svelte/store";
  import Details from "./lib/Details.svelte";
  import Schema from "./lib/Schema.svelte";

  /** @type {any} */
  let json;

  let tags = [];

  const filters = writable({
    proposed: false,
    subgraph: null,
    tag: null,
    search: "",
  });
  const elements = writable([]);
  const visibleElementIds = derived(
    [filters, elements],
    ([filters, elements]) => {
      const visible = [];

      for (const [id, element] of Object.entries(elements)) {
        const isVisible =
          (!filters.proposed || element.proposed) &&
          (!filters.subgraph || element.subgraphs.includes(filters.subgraph)) &&
          (!filters.tag ||
            element.tags.includes(filters.tag) ||
            (element.kind === "Object" &&
              element.fields
                .map((f) => elements[f])
                .some((f) => f.tags.includes(filters.tag)))) &&
          (!filters.search ||
            element.id.toLowerCase().includes(filters.search.toLowerCase()) ||
            (element.kind === "Object" &&
              element.fields
                .map((f) => elements[f])
                .some((f) =>
                  f.id.toLowerCase().includes(filters.search.toLowerCase())
                )));

        if (isVisible) visible.push(id);
      }

      return visible;
    }
  );

  setContext("visibleElementIds", visibleElementIds);

  const colors = [
    { bar: "bg-red-300", bg: "bg-red-50", text: "text-red-600" },
    { bar: "bg-blue-300", bg: "bg-blue-50", text: "text-blue-600" },
    { bar: "bg-green-300", bg: "bg-green-50", text: "text-green-600" },
  ];
  const makeHighlightOptions = (arr, fn) => {
    return arr.map((label, i) => {
      return { label, color: colors[i], fn: (e) => fn(label, e) };
    });
  };

  let highlightChoice = "Proposed Changes";
  const highlightOptions = writable([]);
  const selectedHighlight = writable(null);
  $: {
    let options = (() => {
      switch (highlightChoice) {
        case "Subgraphs":
          return makeHighlightOptions(
            json?.subgraphs?.map((s) => s.id)?.sort() ?? [],
            (label, e) => e?.subgraphs?.includes(label)
          );
        case "Tags":
          return makeHighlightOptions(tags, (label, e) =>
            e?.tags?.includes(label)
          );
        case "Proposed Changes":
          return makeHighlightOptions(["Proposed"], (_, e) => e?.proposed);
        default:
          return [];
      }
    })();

    $highlightOptions = options;
    $selectedHighlight = options.length === 1 ? options[0] : null;
  }
  setContext("highlightOptions", highlightOptions);
  setContext("selectedHighlight", selectedHighlight);

  function selectHighlight(option) {
    $selectedHighlight = $selectedHighlight === option ? null : option;
  }

  const selected = writable(null);
  setContext("selected", selected);

  let loading = true;
  onMount(async () => {
    const resp = await fetch("/data");
    json = await resp.json();
    loading = false;

    elements.set(json.elements);

    tags = Object.values(json.elements)
      .flatMap((el) => el.tags)
      .sort((a, b) => a.localeCompare(b));
  });
</script>

<main class="flex flex-col space-y-2 bg-gray-50">
  <div class="bg-neutral-600 p-4 px-6 text-white">
    <h1 class="text-2xl font-bold">Explore Proposed Changes</h1>
  </div>

  <div class="container mx-auto flex flex-col space-y-2 px-2">
    <div class="flex space-x-4 border-b pb-2">
      <label class="p-1">
        <input type="checkbox" bind:checked={$filters.proposed} />
        Only Proposed Changes
      </label>
      <label>
        <select
          bind:value={$filters.subgraph}
          class="rounded-md border p-1 px-2"
        >
          <option value={null}>Subgraph</option>
          {#each json?.subgraphs?.sort( (a, b) => a.id.localeCompare(b.id) ) ?? [] as subgraph}
            <option value={subgraph.id}>{subgraph.id}</option>
          {/each}
        </select>
      </label>
      <label>
        <select bind:value={$filters.tag} class="rounded-md border p-1 px-2">
          <option value={null}>Tag</option>
          {#each tags as tag}
            <option value={tag}>{tag}</option>
          {/each}
        </select>
      </label>

      <input
        class="grow rounded-md border p-1 px-2"
        placeholder="search"
        bind:value={$filters.search}
      />
    </div>

    <div class="grow">
      <div
        class="relative flex h-full divide-x overflow-y-auto rounded-lg border bg-white p-4 shadow-sm"
      >
        <div class="grow pr-2">
          {#if loading}Loading...{/if}
          {#if json}<Schema serialized={json} />{/if}
        </div>

        {#if $selected}
          <div class="relative grow px-2">
            <button
              class="absolute top-0 right-4 text-2xl"
              on:click={() => ($selected = null)}>×</button
            >
            <Details thing={$selected} subgraphs={json.subgraphs} />
          </div>
        {/if}

        <div class="z-10 w-40 space-y-1 bg-white px-2">
          <span class="text-sm font-bold uppercase tracking-wide text-gray-500"
            >Highlight</span
          >
          <select
            class="rounded-md border p-1 px-2"
            bind:value={highlightChoice}
          >
            <option>Proposed Changes</option>
            <option>Subgraphs</option>
            <option>Tags</option>
          </select>
          {#if $highlightOptions.length > 1}
            {#each $highlightOptions as option}
              <button
                class="block {option.color.text} {$selectedHighlight === option
                  ? 'font-bold'
                  : ''}"
                on:click={() => selectHighlight(option)}>{option.label}</button
              >
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
</main>
