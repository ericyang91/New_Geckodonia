import React from 'react'
import { SidebarButton } from './SidebarButton'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import Image from 'next/image'

const SIDEBAR_OPTIONS = [
  {
    text: 'Home',
    icon: (
      <Image
        src="/brand/geckodonia-logo.png"
        alt="geckodonia-logo"
        width={40}
        height={40}
      />
    ),
  },
  {
    text: 'Settings',
    icon: <Cog6ToothIcon className="h-10 w-10 text-green-600" />,
  },
  {
    text: 'Account',
    icon: <UserCircleIcon className="h-10 w-10 text-green-600" />,
  },
]
export const Sidebar = () => {
  return (
    <div className="w-20 h-screen shadow-md fixed">
      {SIDEBAR_OPTIONS.map((option) => (
        <SidebarButton key={option.text} {...option} />
      ))}
    </div>
  )
}
