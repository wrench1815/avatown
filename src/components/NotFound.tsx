import Empty from '../assets/empty.svg'

function NotFound() {
  return (
    <>
      <div className="p-6">
        <div className="flex flex-col gap-6 items-center">
          <img className="h-auto max-w-full" src={Empty} alt="" />
          <h1 className="text-center text-primary">Nothing Exceptional here</h1>
        </div>
      </div>
    </>
  )
}
export default NotFound
