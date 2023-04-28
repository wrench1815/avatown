import {
  ShoppingCartIcon,
  StarIcon,
  HeartIcon,
} from '@heroicons/react/24/outline'

import vrc1 from '../../assets/images/Avatar_Pictures/VRC image A(F).png'

function Card() {
  return (
    <>
      <div className="relative transition-shadow duration-300 border card bg-base-100 rounded-xl hover:shadow-xl group">
        <figure>
          <img className="image-full" src={vrc1} alt="Shoes" />
        </figure>
        <div className="px-4 pt-1 pb-2 card-body">
          <h2>Avatar name “Avatown” -nice original avatar of Avatown</h2>
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <StarIcon className="w-6 h-6 hover:fill-warning hover:stroke-warning" />
              <StarIcon className="w-6 h-6 hover:fill-warning hover:stroke-warning" />
              <StarIcon className="w-6 h-6 hover:fill-warning hover:stroke-warning" />
              <StarIcon className="w-6 h-6 hover:fill-warning hover:stroke-warning" />
              <StarIcon className="w-6 h-6 hover:fill-warning hover:stroke-warning" />
              <span>4.7 & 100Likes</span>
            </div>
            <HeartIcon className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={vrc1} />
              </div>
            </div>
            <span>Avatar Joe’s</span>
          </div>

          <h2 className="text-3xl font-medium">$ 50.00</h2>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-info"></div>
            <span className="font-medium">PC Only</span>
          </div>
          <div className="flex">
            <p>
              Auto upload service ready, you can use this avatar within 24
              hours.
            </p>
          </div>
        </div>

        <button className="absolute right-0 m-4 btn btn-sm btn-primary gap-2 hidden group-hover:!inline-flex">
          <ShoppingCartIcon className="w-6 h-6" /> Add
        </button>
      </div>
    </>
  )
}

export default Card
