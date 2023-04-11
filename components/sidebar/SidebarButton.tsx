import React from 'react'

interface Props {
  text: string
  icon: React.ReactNode
}

export const SidebarButton = ({ text, icon }: Props) => {
  return (
    <button className="h-20 w-20 hover:bg-gray-300">
      <div className="flex flex-col items-center">
        <div className="h-10 w-10 ">{icon}</div>
        <div className="w-full font-light">{text}</div>
      </div>
    </button>
  )
}
