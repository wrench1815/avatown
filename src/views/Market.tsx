import Card from '../components/Market/Card'
import Filters from '../components/Market/Filters'

function Market() {
  return (
    <>
      <div className="flex flex-1">
        <div className="flex-none w-fit h-[calc(100dvh_-_4rem)] overflow-y-auto bg-base-100">
          <Filters />
        </div>
        <div className="flex-grow p-8">
          <h1 className="!mb-2">All items</h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default Market
