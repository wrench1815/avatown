import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function Search() {
  return (
    <>
      <div className="form-control relative hidden">
        <input
          id="search"
          type="text"
          placeholder="Search"
          className="input input-bordered pr-10 w-96"
        />
        <label
          htmlFor="search"
          className="absolute top-0 bottom-0 right-0 flex items-center pr-3"
        >
          <MagnifyingGlassIcon className="h-6 w-6" />
        </label>
      </div>
    </>
  )
}

export default Search
