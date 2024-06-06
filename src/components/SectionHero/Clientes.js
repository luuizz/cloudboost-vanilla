import Image from 'next/image'
import React from 'react'
import { clientsLogo } from '@/app/data'
import { styles } from './style.css'

export default function Clientes() {
  return (
    <ul className={styles.ulGroup}>
        {
            clientsLogo.map((item,index) => (
                <li key={index}>
                    <Image src={item.image} alt={item.alt} />
                </li>
            ))
        }
    </ul>
  )
}
