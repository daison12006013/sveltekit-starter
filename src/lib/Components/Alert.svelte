<script lang="ts">
  export let type = 'primary'
  export let message = `A simple ${type} alert - check it out!`

  let color = ''

  // reactive

  $: switch (type) {
    case 'primary':
      color = 'primary focus:shadow-outline-purple'
      break
    case 'secondary':
      color = 'secondary focus:shadow-outline-gray'
      break
    case 'success':
      color = 'success focus:shadow-outline-green'
      break
    case 'danger':
      color = 'danger focus:shadow-outline-red'
      break
    case 'warning':
      color = 'warning focus:shadow-outline-orange'
      break
    case 'info':
      color = 'info focus:shadow-outline-blue'
      break
    case 'light':
      color = 'light focus:shadow-outline-white'
      break
    case 'dark':
      color = 'dark focus:shadow-outline-gray'
      break
  }
</script>

<div
  class="flex items-center justify-between p-4 mb-8 text-sm font-semibold rounded-lg shadow-md focus:outline-none {color}"
>
  {message}
</div>
