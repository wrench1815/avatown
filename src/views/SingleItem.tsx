import {
  ShoppingCartIcon,
  StarIcon,
  HeartIcon,
  ArrowUpOnSquareIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'

import { ChangeEvent, useState } from 'react'
import { useParams } from 'react-router-dom'

import avatarList from '../api/data'
import NotFound from '../components/NotFound'
import Card from '../components/Market/Card'

function SingleItem() {
  const { avatarId = '' } = useParams()

  const singleAvatar = avatarList.find((av) => av.id === parseInt(avatarId))

  if (!singleAvatar) {
    return <NotFound />
  }

  const [isLiked, setIsLiked] = useState(singleAvatar.liked)

  const toggleLike = () => {
    if (isLiked) {
      singleAvatar.likes -= 1
    } else {
      singleAvatar.likes += 1
    }
    setIsLiked(!isLiked)
  }

  const [selectedPreview, setSelectedPreview] = useState('3')

  const handlePreviewChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedPreview(event.target.value)
  }

  const randomFourAvatars = avatarList
    .filter((av) => av.id != parseInt(avatarId))
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

  return (
    <>
      <div className="container mx-auto my-6 gap-6 flex flex-col px-4">
        <div className="flex lg:flex-row flex-col gap-8 p-4 border shadow rounded-2xl">
          <div className="xl:w-2/5 flex">
            <img
              className="h-auto max-w-full shadow-lg lg:rounded-l-2xl rounded-t-2xl lg:rounded-tr-none object-cover"
              src={singleAvatar.image}
              alt={singleAvatar.title}
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h1>{singleAvatar.title}</h1>

              <div className="flex items-center justify-between">
                <div className="text-center">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <StarIcon
                        key={index}
                        className={`w-6 h-6 ${
                          index <= singleAvatar.rating - 1
                            ? 'fill-warning stroke-warning'
                            : ''
                        }`}
                      />
                    ))}
                  </div>
                  <span className="">{singleAvatar.rating} out of 5 stars</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="cursor-pointer" onClick={toggleLike}>
                    <HeartIcon
                      className={`w-6 h-6 ${
                        isLiked ? 'fill-error stroke-error' : ''
                      }`}
                    />
                  </div>
                  <span>{singleAvatar.likes} likes</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img src={singleAvatar.provider.img} />
                  </div>
                </div>
                <span className="font-bold">{singleAvatar.provider.name}</span>
              </div>

              <div className="flex justify-between ">
                <h2 className="text-3xl font-medium">$ {singleAvatar.price}</h2>

                {singleAvatar.pc ? (
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
              </div>

              <h3 className="text-secondary">△32000 Polygons</h3>

              <h3>Preview Color</h3>

              <div className="flex gap-4">
                <label
                  className={`cursor-pointer ring-offset-2 ring-primary h-12 w-12 bg-primary rounded-full border border-b-base-300 shadow-lg ${
                    selectedPreview === '1' ? 'ring' : ''
                  }`}
                >
                  <input
                    type="radio"
                    value="1"
                    className="hidden"
                    checked={selectedPreview === '1'}
                    onChange={handlePreviewChange}
                  />
                </label>

                <label
                  className={`cursor-pointer ring-offset-2 ring-primary h-12 w-12 bg-base-100 rounded-full border border-b-base-300 shadow-lg ${
                    selectedPreview === '2' ? 'ring' : ''
                  }`}
                >
                  <input
                    type="radio"
                    value="2"
                    className="hidden"
                    checked={selectedPreview === '2'}
                    onChange={handlePreviewChange}
                  />
                </label>

                <label
                  className={`cursor-pointer ring-offset-2 ring-primary h-12 w-12 bg-neutral rounded-full border border-b-base-300 shadow-lg ${
                    selectedPreview === '3' ? 'ring' : ''
                  }`}
                >
                  <input
                    type="radio"
                    value="3"
                    className="hidden"
                    checked={selectedPreview === '3'}
                    onChange={handlePreviewChange}
                  />
                </label>
              </div>

              <div className="flex items-center justify-between gap-2">
                <p>
                  Auto upload service ready, use this avatar within 24 hours.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2">
                <button className="btn btn-success">Buy Now</button>
                <button className="btn btn-primary flex gap-2">
                  <ShoppingCartIcon className="h-6 w-6" /> Add to Cart
                </button>
              </div>
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
        </div>

        <div>
          <h2>Description</h2>

          <p>
            {Array.from({ length: 6 }).map(
              () =>
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea velit nisi adipisci explicabo porro ab impedit voluptatum vel? Veniam eaque ullam in aut quis tempore velit nulla perferendis aspernatur dolorem?'
            )}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h1>Related Avatars</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {randomFourAvatars.map((av) => (
              <Card key={av.id} data={av} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleItem
