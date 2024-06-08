import Image from 'next/image'
import React from 'react'
import { clientsLogo } from '@/app/data'
import { styles } from './style.css'
import { urlForImage } from '../../../sanity/lib/image';

export default function Clientes({dataPage}) {

  const data = dataPage.logos;

  return (
    <ul className={styles.ulGroup}>
        {
            data.map((item,index) => (
                <li key={index}>
                    <img src={urlForImage(item.icon.asset)} alt={item.icon.altLogo}
                    />
                </li>
            ))
        }
    </ul>
  )
}
