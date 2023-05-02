export interface Avatar {
  id: number
  title: string
  price: number
  rating: number
  likes: number
  image: string
  provider: {
    name: string
    img: string
  }
  pc: boolean
  quest: boolean
  liked: boolean
}
