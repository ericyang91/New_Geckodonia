'use client'

import React from 'react'
import styles from './index.module.scss'
import { useOutsideAlerter } from '@/hooks/useOutsideAlerter'

interface Props {
  children: React.ReactNode
  content: React.ReactNode
  position?: 'absolute' | 'fixed-bottom' | 'fixed-top'
}

export const Menu = ({ children, content, position = 'absolute' }: Props) => {
  const { isComponentVisible, setIsComponentVisible, ref } =
    useOutsideAlerter(false)

  const handleClick = () => {
    setIsComponentVisible(true)
  }

  return (
    <div className={styles.MenuWrapper} onClick={handleClick} ref={ref}>
      {children}
      {isComponentVisible && (
        <div className={`${styles.Menu} ${styles[position]}`}>{content}</div>
      )}
    </div>
  )
}
