'use client'

import React, { useState } from 'react'

import styles from './index.module.scss'

interface Props {
  content: string | React.ReactNode
  children: React.ReactNode
  direction?: 'top' | 'bottom' | 'right' | 'left'
  delay?: number
}

export const Tooltip = ({
  delay = 300,
  content,
  direction = 'top',
  children,
}: Props) => {
  const [active, setActive] = useState(false)

  let timeout: NodeJS.Timeout

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <div
      className={styles.TooltipWrapper}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={`${styles.TooltipTip} ${styles[direction]}`}>
          {content}
        </div>
      )}
    </div>
  )
}
