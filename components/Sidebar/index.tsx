import React from 'react'
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'
import ArrowTrendingUpIcon from '@heroicons/react/24/outline/ArrowTrendingUpIcon'
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon'
import Image from 'next/image'

import { SidebarButton } from './SidebarButton'
import { AccountMenu } from './AccountMenu'
import { Menu } from '../common/Menu'

const TOP_OPTIONS = [
  {
    text: 'Home',
    icon: (
      <Image
        src="/brand/geckodonia-logo.png"
        alt="geckodonia-logo"
        width={40}
        height={40}
        className="transition-all hover:scale-125"
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

export const Sidebar = () => {
  return (
    <div className="w-20 h-full fixed bg-gray-800 flex flex-col justify-between">
      <div>
        {TOP_OPTIONS.map((option) => (
          <SidebarButton key={option.text} {...option} />
        ))}
      </div>
      <div className="border-gray-600 border-t-2">
        <Menu content={<AccountMenu />} position="fixed-bottom">
          <SidebarButton
            text="Account"
            icon={<UserCircleIcon className="h-9 w-9" />}
          />
        </Menu>
      </div>
    </div>
  )
}
