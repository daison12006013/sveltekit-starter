<script lang="ts">
  export let type = 'primary'
  export let isRounded = true
  export let roundedSize = 'md'
  export let append = 'py-4 px-3'
  export let message = `A simple ${type} alert - check it out!`

  let color = ''
  let rounded = ''

  // reactive

  $: append

  $: if (isRounded && roundedSize) {
    rounded = `rounded-${roundedSize}`
  }

  $: switch (type) {
    case 'primary':
      color = 'bg-blue-400 text-blue-900'
      break
    case 'secondary':
      color = 'bg-gray-200 text-gray-700'
      break
    case 'success':
      color = 'bg-green-400 text-green-900'
      break
    case 'danger':
      color = 'bg-red-500 text-red-900'
      break
    case 'warning':
      color = 'bg-orange-400 text-orange-800'
      break
    case 'info':
      color = 'bg-blue-200'
      break
    case 'light':
      color = 'bg-gray-100'
      break
    case 'dark':
      color = 'bg-gray-800 text-white'
      break
  }
</script>

<div class="{color} {rounded} {append}">{message}</div>
