import { COUNTRIES } from '$struct/_constants'
import type { Post as PostContract } from '$struct/_contracts'

export const Post = (post: PostContract) => {
  if (!COUNTRIES[post.tenant].alias) {
    throw new Error('Invalid [tenant] provided!')
  }

  return post
}
