import React from 'react'
import styles from './index.module.scss'

interface Props {
  children: React.ReactNode
  content: React.ReactNode
  position?: 'absolute' | 'fixed-bottom' | 'fixed-top'
}

export const Menu = ({ children, content, position = 'absolute' }: Props) => {
  return (
    <div className={styles.MenuWrapper}>
      {children}
      <div className={`${styles.Menu} ${styles[position]}`}>{content}</div>
    </div>
  )
}
