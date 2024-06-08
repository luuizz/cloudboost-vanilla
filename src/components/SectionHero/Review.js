import Image from 'next/image'
import React from 'react'
import Users from "@/assets/users.png"
import iconStar from "@/assets/icon-star.svg"
import { styles } from './style.css'

export default function Review({ dataPage }) {

  const data = dataPage;

  return (
    <div className={styles.review}>
        <Image src={Users} alt='Usuários' />
        <div className={styles.numbers}>
            <Image src={iconStar} alt='Ícone de estrela' />
            <span className={styles.span}>({data.reviewsNumber} <strong className={styles.strong}>Reviews</strong>)</span>
        </div>
    </div>
  )
}
