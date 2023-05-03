import { ReactNode } from 'react'

interface ButtonProps {
  notificationCount: number
  children: ReactNode
}

function Button(props: ButtonProps) {
  return (
    <>
      <div className="btn relative">
        <div className="absolute -top-2.5 -right-2.5 inline-flex items-center justify-center bg-error rounded-full h-6 w-6 text-base-100 font-bold text-xs">
          {props.notificationCount}
        </div>

        {props.children}
      </div>
    </>
  )
}

export default Button
