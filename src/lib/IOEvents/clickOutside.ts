/** Dispatch event on click outside of node */
export function clickOutside(node, except = []) {
  const handle = (event) => {
    let shouldSkip = false

    except.forEach((val) => {
      if (document.getElementById(val).contains(event.target)) {
        shouldSkip = true
      }
    })

    if (shouldSkip) {
      return
    }

    if (node && !node.contains(event.target) && !event.defaultPrevented) {
      node.dispatchEvent(new CustomEvent('click-outside', node))
    }
  }

  document.addEventListener('click', handle, true)

  return {
    destroy() {
      document.removeEventListener('click', handle, true)
    },
  }
}
