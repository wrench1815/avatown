import { Avatar } from '../../types/Avatar'

import VRC1 from '../assets/images/Avatar_Pictures/VRC1.png'
import VRC2 from '../assets/images/Avatar_Pictures/VRC2.png'
import VRC3 from '../assets/images/Avatar_Pictures/VRC3.png'
import VRC4 from '../assets/images/Avatar_Pictures/VRC4.png'
import VRC5 from '../assets/images/Avatar_Pictures/VRC5.png'
import VRC6 from '../assets/images/Avatar_Pictures/VRC6.png'
import VRC7 from '../assets/images/Avatar_Pictures/VRC7.png'
import VRC8 from '../assets/images/Avatar_Pictures/VRC8.png'
import VRC9 from '../assets/images/Avatar_Pictures/VRC9.png'
import VRC10 from '../assets/images/Avatar_Pictures/VRC10.png'
import VRC11 from '../assets/images/Avatar_Pictures/VRC11.png'
import VRC12 from '../assets/images/Avatar_Pictures/VRC12.png'
import VRC13 from '../assets/images/Avatar_Pictures/VRC13.png'
import VRC14 from '../assets/images/Avatar_Pictures/VRC14.png'
import VRC15 from '../assets/images/Avatar_Pictures/VRC15.png'
import VRC16 from '../assets/images/Avatar_Pictures/VRC16.png'
import VRC17 from '../assets/images/Avatar_Pictures/VRC17.png'
import VRC18 from '../assets/images/Avatar_Pictures/VRC18.png'
import VRC19 from '../assets/images/Avatar_Pictures/VRC19.png'
import VRC20 from '../assets/images/Avatar_Pictures/VRC20.png'
import VRC21 from '../assets/images/Avatar_Pictures/VRC21.png'
import VRC22 from '../assets/images/Avatar_Pictures/VRC22.png'
import VRC23 from '../assets/images/Avatar_Pictures/VRC23.png'
import VRC24 from '../assets/images/Avatar_Pictures/VRC24.png'

// prettier-ignore
const imageList = [VRC1, VRC2, VRC3, VRC4, VRC5, VRC6, VRC7, VRC8, VRC9, VRC10, VRC11, VRC12, VRC13, VRC14, VRC15, VRC16, VRC17, VRC18, VRC19, VRC20, VRC21, VRC22, VRC23, VRC24]

let avatarList: Avatar[] = []
let counter = 1

function generateRandomAvatar() {
  const id = counter
  const title = `Avatar name “Avatown ${counter}” - nice original avatar of Avatown`
  const price = parseFloat((Math.random() * 100 + 1).toFixed(2))
  const rating = parseFloat((Math.random() * 4 + 1).toFixed(1))
  const likes = Math.floor(Math.random() * 100)
  const image = imageList[counter - 1] || VRC1
  const provider = {
    name: "Avatar Joe's",
    img: VRC11,
  }
  const pc = Math.random() < 0.5
  const quest = !pc
  const liked = Math.random() < 0.5

  counter++

  return {
    id: id,
    title: title,
    price: price,
    rating: rating,
    likes: likes,
    image: image,
    provider: provider,
    pc: pc,
    quest: quest,
    liked: liked,
  }
}

for (let i = 0; i < 50; i++) {
  const randomObject = generateRandomAvatar()
  avatarList.push(randomObject)
}

export default avatarList
