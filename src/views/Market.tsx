import { FunnelIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import Card from '../components/Market/Card'
import Filters from '../components/Market/Filters'
import Pagination from '../components/Market/Pagination'

import avatarList from '../api/data'

function Market() {
  const [contents, setContents] = useState([
    {
      id: 1,
      name: 'VRChat(Quest)',
      colorClass: 'bg-success',
      value: 'vrchatQuest',
      isChecked: false,
    },
    {
      id: 2,
      name: 'VRChat(PCVR)',
      colorClass: 'bg-info',
      value: 'vrchatPcvr',
      isChecked: false,
    },
    {
      id: 3,
      name: 'Others',
      value: 'others',
      colorClass: '',
      isChecked: false,
    },
  ])

  const handleContentsChange = (id: number) => {
    setContents((prevContents) =>
      prevContents.map((content) => {
        if (content.id === id) {
          return { ...content, isChecked: !content.isChecked }
        }
        return content
      })
    )
  }

  const [prices, setPrices] = useState([
    {
      id: 1,
      name: 'Under $10',
      value: 'under10',
      isChecked: false,
    },
    {
      id: 2,
      name: '$10 to $20',
      value: '10to20',
      isChecked: false,
    },
    {
      id: 3,
      name: '$20 to $30',
      value: '20to30',
      isChecked: false,
    },
    {
      id: 4,
      name: '$30 to $40',
      value: '30to40',
      isChecked: false,
    },
    {
      id: 5,
      name: '$40 to $50',
      value: '40to50',
      isChecked: false,
    },
    {
      id: 6,
      name: '$50 to $70',
      value: '50to70',
      isChecked: false,
    },
    {
      id: 7,
      name: '$70 & above',
      value: '70above',
      isChecked: false,
    },
  ])

  const handlePricesChange = (id: number) => {
    setPrices((prevPrices) =>
      prevPrices.map((price) => {
        if (price.id === id) {
          return { ...price, isChecked: !price.isChecked }
        }
        return price
      })
    )
  }

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = avatarList.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil(avatarList.length / itemsPerPage)

  const paginateNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1)
    }
  }

  const paginatePrev = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1)
    }
  }

  const paginate = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <div className="drawer h-[calc(100dvh_-_4rem)] drawer-mobile">
        <input id="filterDrawer" type="checkbox" className="drawer-toggle" />
        <div className="relative p-4 drawer-content">
          {/* filter toggle for mobile */}
          <label
            htmlFor="filterDrawer"
            className="fixed left-0 z-50  bg-base-100 p-1.5 rounded-lg rounded-l-none border-l-0 border-2 border-primary shadow text-primary font-bold cursor-pointer"
          >
            <FunnelIcon className="w-6 h-6" />
          </label>

          <div className="flex flex-col mb-2 md:flex-row md:justify-between md:items-center">
            <h1 className="text-center md:text-start">All items</h1>
            <div className="self-end dropdown dropdown-end">
              <label
                tabIndex={0}
                className="m-1 btn btn-sm btn-outline hover:bg-transparent hover:text-neutral"
              >
                <div className="flex items-center gap-1">
                  sort by <ChevronDownIcon className="w-5 h-5" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-fit whitespace-nowrap "
              >
                <li>
                  <a>Featured</a>
                </li>
                <li>
                  <a>Price: Low to High</a>
                </li>
                <li>
                  <a>Price: High to Low</a>
                </li>
                <li>
                  <a>Customer Review</a>
                </li>
                <li>
                  <a>New</a>
                </li>
                <li>
                  <a>Polygon:Low to High</a>
                </li>
                <li>
                  <a>Polygon:High to Low</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {currentItems.map((av) => (
              <Card key={av.id} data={av} />
            ))}
          </div>

          <Pagination
            next={paginateNext}
            prev={paginatePrev}
            current={currentPage}
            total={totalPages}
            paginate={paginate}
          />
        </div>

        <div className="drawer-side">
          <label htmlFor="filterDrawer" className="drawer-overlay"></label>
          <ul className="p-4 overflow-y-auto bg-base-100 w-fit">
            <Filters
              contents={contents}
              contentsChange={handleContentsChange}
              prices={prices}
              pricesChange={handlePricesChange}
            />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Market
