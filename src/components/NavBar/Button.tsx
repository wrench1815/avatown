import { ReactNode } from 'react'

interface ButtonProps {
  notificationCount: number
  children: ReactNode
}

function Button(props: ButtonProps) {
  return (
    <>
      <div className="btn relative">
        <div className="absolute -top-2.5 -right-2.5 inline-flex items-center justify-center bg-red-500 rounded-full h-6 w-6 text-white font-bold text-xs">
          {/* notification count from props here */}
          {props.notificationCount}
        </div>
        {/* show component from parent */}
        {props.children}
      </div>
    </>
  )
}

export default Button
