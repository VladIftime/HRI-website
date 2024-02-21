<script>
  import { onMount } from 'svelte'
  let code = ''
  export let filePath = ''

  onMount(async () => {
    const response = await fetch(filePath)
    code = await response.text()
  })
// Get name of file to display in the mock-up code
  let fileName = filePath.split('/').pop()

</script>

<!--  a component that  receveives the path to a local .py file and puts in the mock-up code
    daisyUI component -->

<h2 class="text-3xl font-bold m-5">{fileName}</h2>
<div class="mockup-code  m-5">
{@html code
    .split('\n')
    .map((line, index) => {
        return `<pre data-prefix="${index + 1}"><code>${line}</code></pre>`
    })
    .join('\n')}
</div>
