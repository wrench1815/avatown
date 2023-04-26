import logo from '../../assets/images/logo/logo_avatown_manual_1_basic.png'

import Button from './Button'

import { ShoppingCartIcon, BellIcon } from '@heroicons/react/24/outline'
import Profile from './Profile'
import Search from './Search'

function NavBar() {
  return (
    <>
      <div className="navbar bg-base-100 sticky top-0 z-50 max-h-16">
        <div className="flex-1 flex items-center">
          <a className="btn btn-ghost hover:bg-transparent normal-case text-xl">
            <img className="h-9" src={logo} alt="" />
          </a>
          <a className="mr-auto ml-0 text-xl -mb-2 underline cursor-pointer">
            Go to Marketpage
          </a>
        </div>
        <div className="flex-none gap-2">
          <Search />

          <Button notificationCount={3}>
            <BellIcon className="h-6 w-6" />
          </Button>
          <Button notificationCount={1}>
            <ShoppingCartIcon className="h-6 w-6" />
          </Button>

          <Profile />
        </div>
      </div>
    </>
  )
}

export default NavBar
