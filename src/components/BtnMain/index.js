import React from 'react'
import { styles } from './style.css'
import { clsx } from 'clsx'

export default function BtnMain({children, className}) {
  return (
   <button className={clsx(styles.btnPrimary, className)}>{children}</button>
  )
}
