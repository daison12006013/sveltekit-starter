export default function enhance(
  form: HTMLFormElement,
  {
    pending,
    error,
    result,
  }: {
    pending?: (data: FormData, form: HTMLFormElement) => void
    error?: (res: Response, error: Error, form: HTMLFormElement) => void
    result: (res: Response, form: HTMLFormElement) => void
  }
) {
  async function handle(e: Event) {
    e.preventDefault()

    const body = new FormData(form)

    if (pending) pending(body, form)

    try {
      const res = await fetch(form.action, {
        method: form.method,
        headers: {
          accept: 'application/json',
        },
        body,
      })

      if (res.ok) {
        result(res, form)
      } else if (error) {
        error(res, null, form)
      } else {
        console.error(await res.text())
      }
    } catch (e) {
      if (error) {
        error(null, e, form)
      } else {
        throw e
      }
    }
  }

  form.addEventListener('submit', handle)

  return {
    destroy() {
      form.removeEventListener('submit', handle)
    },
  }
}
