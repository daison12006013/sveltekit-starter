/**
 * Under this module-property: we should only put every interfaces/constants/enums that is related to the
 * "module-property" itself of lahatan.com
 */
import { COUNTRIES } from '$struct/_constants'
import type { Default } from '$struct/_contracts'

interface PostContract extends Default {
  tenant: string
  title: string
  uuid: string
  description: string
  category: string
  address: string
  postal_code: string
  latitude: number | null
  longitude: number | null
  type: string
  status: string
  number_of_rooms: number
  number_of_toilets: number
  area_size: number
  price: number
  expires_at: string
}

export const Post = (post: PostContract) => {
  if (!COUNTRIES[post.tenant].alias) {
    throw new Error('Invalid [tenant] provided!')
  }

  return post
}
