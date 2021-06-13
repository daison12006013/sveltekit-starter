const getLang = (): string => {
  // well, maybe base the language from
  // -> where the guest coming from? via API to determine their IP Address
  // -> or when they're logged in, base it from their
  //    preferred language by storing that in the hooks
  // ohh, you should cache that too, :P

  return 'en'
}

const getData = (lang: string) => {
  // ofcourse get the data via api, below is just a sample!

  const data = {
    en: {
      Dashboard: 'Dashboard',
      'Lorem :ipsum whatever': ':ipsum Lorem Sikador',
      'Lorem {ipsum} whatever': '{ipsum} Lorem Sikador',
    },
  }

  return data[lang]
}

export const trans = (text: string, replacers?: any, strict = false): string => {
  const lang = getLang()
  const data = getData(lang)

  let resp = data[text]

  if (resp === undefined) {
    if (strict) {
      throw Error(`Translation for ${text} not found under [${lang}] language.`)
    }

    resp = text
  }

  if (replacers !== undefined) {
    Object.keys(replacers).forEach((idx) => {
      resp = resp.replace(`:${idx}`, replacers[idx]) // Laravel like translations...
      resp = resp.replace(`{${idx}}`, replacers[idx]) // maybe uses curly braces? "My {text} whatever"
    })
  }

  return resp
}

export default trans
