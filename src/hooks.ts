import type { Handle } from '@sveltejs/kit'
import variables from './variables'
import DefaultSvelteKit from './hooks/defaultSvelteKit'
import LaravelSanctum from './hooks/laravelSanctum'

export const handle: Handle = async ({ request, resolve }) => {
  switch (variables.authentication.driver) {
    case 'laravelSanctum':
      return await LaravelSanctum({ request, resolve })
      break

    // Add more...
  }

  return await DefaultSvelteKit({ request, resolve })
}
