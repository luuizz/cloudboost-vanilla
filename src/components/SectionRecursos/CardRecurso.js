import Image from 'next/image'
import React from 'react'
import { styles } from './style.css'

export default function CardRecurso({ src, alt, heading, paragraph }) {
  return (
    <div className={styles.cardRecurso}>
        <div className={styles.icon}>
            <Image src={src} alt={alt} />
        </div>

        <div className={styles.texts}>
            <h6 className={styles.h6}>{heading}</h6>
            <p className={styles.textCard}>{paragraph}</p>
        </div>
    </div>
  )
}
