import React from 'react'

import { Tooltip } from '../../common/Tooltip'

interface Props {
  text: string
  icon: React.ReactNode
}

export const SidebarButton = ({ text, icon }: Props) => {
  return (
    <Tooltip content={text} direction="right">
      <button className="h-20 w-20 text-gray-300 hover:text-green-400">
        <div className="flex flex-col items-center">{icon}</div>
      </button>
    </Tooltip>
  )
}
