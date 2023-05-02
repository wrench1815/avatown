import {
  ShoppingCartIcon,
  StarIcon,
  HeartIcon,
  ArrowUpOnSquareIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'

import { Avatar } from '../../../types/Avatar'
import { useState } from 'react'
import { Link } from 'react-router-dom'

type CardProps = {
  data: Avatar
}
function Card({ data }: CardProps) {
  const [isLiked, setIsLiked] = useState(data.liked)

  const toggleLike = () => {
    if (isLiked) {
      data.likes -= 1
    } else {
      data.likes += 1
    }
    setIsLiked(!isLiked)
  }

  return (
    <>
      <div className="relative transition-shadow duration-300 border card bg-base-100 rounded-xl hover:shadow-xl group">
        <figure>
          <img
            className="image-full group-hover:scale-110 transition-transform duration-200"
            src={data.image}
            alt={data.title}
            loading="lazy"
          />
        </figure>
        <div className="px-4 pt-1 pb-2 card-body">
          <div>
            <Link
              className="text-2xl font-semibold no-underline hover:underline group-hover:text-primary transition-all duration-200"
              to={`/${data.id}`}
            >
              {data.title}
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon
                    key={index}
                    className={`w-6 h-6 ${
                      index <= data.rating - 1
                        ? 'fill-warning stroke-warning'
                        : ''
                    }`}
                  />
                ))}
              </div>
              <span>{data.rating} of 5</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="cursor-pointer" onClick={toggleLike}>
                <HeartIcon
                  className={`w-6 h-6 ${
                    isLiked ? 'fill-error stroke-error' : ''
                  }`}
                />
              </div>
              <span>{data.likes}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={data.provider.img} />
              </div>
            </div>
            <span>{data.provider.name}</span>
          </div>

          <h2 className="text-3xl font-medium">$ {data.price}</h2>

          {data.pc ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-info"></div>
              <span className="font-medium">PC Only</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-success"></div>
              <span className="font-medium">Quest</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <p>Auto upload service ready, use this avatar within 24 hours.</p>

            <div className="dropdown dropdown-end dropdown-top">
              <div className="cursor-pointer" tabIndex={0}>
                <ArrowUpOnSquareIcon className="w-6 h-6" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content p-2 px-6 shadow bg-base-100 rounded-box w-fit whitespace-nowrap list-none"
              >
                <li>
                  <a className="no-underline cursor-pointer flex gap-2 items-center">
                    copy link
                    <LinkIcon className="h-4 w-4" />
                  </a>
                </li>
              </ul>
            </div>
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
