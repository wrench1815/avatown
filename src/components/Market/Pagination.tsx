import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { MouseEventHandler } from 'react'

interface IPaginationProps {
  next: MouseEventHandler<HTMLDivElement>
  prev: MouseEventHandler<HTMLDivElement>
  current: number
  total: number
  paginate: (page: number) => void
}

function Pagination(props: IPaginationProps) {
  const pageNumbers = []

  if (props.current > 1) {
    pageNumbers.push(props.current - 1)
  }

  pageNumbers.push(props.current)

  if (props.current < props.total) {
    pageNumbers.push(props.current + 1)
  }

  return (
    <>
      <div className="flex justify-center gap-2 mt-6">
        <div
          className="border-2 rounded-lg cursor-pointer hover:bg-neutral hover:text-base-100 transition-all duration-200"
          onClick={props.prev}
        >
          <ChevronLeftIcon className="h-10 w-10" />
        </div>
        {pageNumbers.map((pageNumber) => (
          <div
            key={pageNumber}
            className={`h-10 w-10 bg-neutral/20 font-bold rounded flex items-center justify-center transition-all duration-200 cursor-pointer ${
              pageNumber === props.current ? '!bg-primary !text-base-100' : ''
            }`}
            onClick={() => props.paginate(pageNumber)}
          >
            {pageNumber}
          </div>
        ))}

        <div
          className="border-2 rounded-lg cursor-pointer hover:bg-neutral hover:text-base-100 transition-all duration-200"
          onClick={props.next}
        >
          <ChevronRightIcon className="h-10 w-10" />
        </div>
      </div>
    </>
  )
}

export default Pagination
