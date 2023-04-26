import Card from './components/Card'
import NavBar from './components/NavBar/Index'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center h-screen ">
        <Card />
      </div>
    </>
  )
}

export default App
