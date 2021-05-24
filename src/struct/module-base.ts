/**
 * Under this module-base: we should only put every interfaces/constants/enums that is related to the
 * "module-base" itself of lahatan.com
 */
import type { Default } from '$struct/_contracts'

interface UserContract extends Default {
  id: number
  name: string
  email?: string
  email_verified_at?: string | null
}

export const User = (user: UserContract) => {
  // maybe you want to add more validations here?

  return user
}
