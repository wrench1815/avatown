import Card from './components/Card'
import NavBar from './components/NavBar/Index'
import Filters from './components/Filters'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="flex prose max-w-full prose-headings:my-0">
        <Filters />
        <div className="flex flex-1 justify-center items-center h-screen ">
          <Card />
        </div>
      </div>
    </>
  )
}

export default App
