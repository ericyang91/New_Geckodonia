import React from 'react'

interface Props {
  initials: string
}

export const Avatar = ({ initials }: Props) => {
  return (
    <div className="bg-green-500 rounded-full w-8 h-8 flex justify-center items-center select-none text-gray-100">
      {initials}
    </div>
  )
}
