/** Dispatch event on keydown Escape of node */
export function keydownEscape(node: any) {
  const handle = (event: any) => {
    if (event.key === 'Escape') {
      node.dispatchEvent(new CustomEvent('keydown-escape', node))
    }
  }

  document.addEventListener('keydown', handle, true)

  return {
    destroy() {
      document.removeEventListener('keydown', handle, true)
    },
  }
}
