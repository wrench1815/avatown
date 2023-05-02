import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/Index'

function Default() {
  return (
    <>
      <div id="layoutTop"></div>
      <NavBar />
      <div className="max-w-full prose prose-headings:my-0 prose-img:my-0 prose-figure:my-0 prose-p:my-0 prose-ul:my-0 prose-li:my-0">
        <Outlet />
      </div>
    </>
  )
}

export default Default
