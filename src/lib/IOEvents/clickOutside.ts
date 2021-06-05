/** Dispatch event on click outside of node */
export function clickOutside(node) {
  const handle = (event) => {
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
