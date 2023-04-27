import Card from './components/Card'
import NavBar from './components/NavBar/Index'
import Filters from './components/Filters'

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-1 max-w-full prose prose-headings:my-0">
        <div className="flex-none w-fit h-[calc(100dvh_-_4rem)] overflow-y-auto bg-base-100">
          <Filters />
        </div>
        <div className="flex-grow p-8">
          <Card />
        </div>
      </div>
    </>
  )
}

export default App
