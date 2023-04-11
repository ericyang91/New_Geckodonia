import React from 'react'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import ArrowTrendingUpIcon from '@heroicons/react/24/outline/ArrowTrendingUpIcon'
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon'
import Image from 'next/image'
import { SidebarButton } from './SidebarButton'

const TOP_OPTIONS = [
  {
    text: 'Home',
    icon: (
      <Image
        src="/brand/geckodonia-logo.png"
        alt="geckodonia-logo"
        width={40}
        height={40}
        className="hover:scale-110"
      />
    ),
  },
  {
    text: 'Shop',
    icon: <ShoppingBagIcon className="h-9 w-9" />,
  },
  {
    text: 'Trends',
    icon: <ArrowTrendingUpIcon className="h-9 w-9" />,
  },
]

const BOTTOM_OPTIONS = [
  {
    text: 'Settings',
    icon: <Cog6ToothIcon className="h-9 w-9" />,
  },
  {
    text: 'Account',
    icon: <UserCircleIcon className="h-9 w-9" />,
  },
]

export const Sidebar = () => {
  return (
    <div className="w-20 h-full fixed bg-gray-800 flex flex-col justify-between">
      <div>
        {TOP_OPTIONS.map((option) => (
          <SidebarButton key={option.text} {...option} />
        ))}
      </div>
      <div>
        {BOTTOM_OPTIONS.map((option) => (
          <SidebarButton key={option.text} {...option} />
        ))}
      </div>
    </div>
  )
}
