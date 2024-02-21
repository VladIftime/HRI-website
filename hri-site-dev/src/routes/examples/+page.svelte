<script>
  import { onMount } from 'svelte'
  import PythonCode from '$lib/components/PythonCode.svelte'
  let files = []

  onMount(async () => {
    const response = await fetch('/api/getFiles')
    files = await response.json()
  })
  function scrollToElement(file) {
    const element = document.getElementById(file)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
</script>

<div>
  {#each files as file}
    <button class="btn bg-accent m-2" on:click={() => scrollToElement(file)}>
      {file}
    </button>
  {/each}
</div>

{#each files as file}
  <div id={file}>
    <PythonCode filePath={'PythonFiles/' + file} />
  </div>
{/each}
