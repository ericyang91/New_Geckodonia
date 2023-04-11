import React from 'react'
import { SidebarButton } from './SidebarButton'
import HomeIcon from '@heroicons/react/24/outline/HomeIcon'
import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon'

const SIDEBAR_OPTIONS = [
  { text: 'Home', icon: <HomeIcon /> },
  { text: 'Settings', icon: <Cog6ToothIcon /> },
  { text: 'Account', icon: <UserCircleIcon /> },
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
