import React from 'react'

interface Props {
  text: string
  icon: React.ReactNode
}

export const SidebarButton = ({ text, icon }: Props) => {
  return (
    <button className="h-20 w-20 hover:bg-gray-300 hover:text-green-700">
      <div className="flex flex-col items-center">
        {icon}
        <div className="w-full font-semi">{text}</div>
      </div>
    </button>
  )
}
