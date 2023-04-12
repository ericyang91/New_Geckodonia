'use client'

import React, { useState } from 'react'
import styles from './index.module.scss'

interface Props {
  children: React.ReactNode
  content: React.ReactNode
  position?: 'absolute' | 'fixed-bottom' | 'fixed-top'
}

export const Menu = ({ children, content, position = 'absolute' }: Props) => {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(true)
  }

  return (
    <div className={styles.MenuWrapper} onClick={handleClick}>
      {children}
      {isActive && (
        <div className={`${styles.Menu} ${styles[position]}`}>{content}</div>
      )}
    </div>
  )
}
