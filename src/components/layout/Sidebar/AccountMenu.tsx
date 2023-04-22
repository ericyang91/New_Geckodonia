import React from 'react'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import ArrowLeftOnRectangleIcon from '@heroicons/react/24/outline/ArrowLeftOnRectangleIcon'
import { Avatar } from '../../common/Avatar'

export const AccountMenu = () => {
  return (
    <div className="w-28 h-40 px-1">
      <div className="flex flex-col h-full">
        <button className="flex-1 hover:text-green-600">
          <div className="flex items-center">
            <Avatar initials="PK" />
            <div className="ml-2">Account</div>
          </div>
        </button>
        <button className="flex-1 hover:text-green-600">
          <div className="flex items-center">
            <Cog6ToothIcon className="w-8 h-8 text-black" />
            <div className="ml-2">Settings</div>
          </div>
        </button>
        <button className="flex-1 hover:text-green-600 border-t-2">
          <div className="flex items-center">
            <ArrowLeftOnRectangleIcon className="w-8 h-8 text-black" />
            <div className="ml-2">Logout</div>
          </div>
        </button>
      </div>
    </div>
  )
}
