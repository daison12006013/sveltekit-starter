interface Default {
  created_at?: string
  updated_at?: string
}

export interface User extends Default {
  id: number
  name: string
  email?: string
  email_verified_at?: string | null
}

export interface Post extends Default {
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
