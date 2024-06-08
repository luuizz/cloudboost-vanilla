import React from 'react'
import RenderComputed from '../ComputedRender'
import Image from 'next/image'
import MainImage from "@/assets/main-image.webp" 
import BtnMain from '../BtnMain'
import Clientes from './Clientes'
import Review from './Review'
import { styles } from './style.css'
import { client, sanityFetch } from '../../../sanity/lib/client'

export default async function SectionHero({ dataPage }) {

  const data = dataPage;
 
  return (
    <RenderComputed asElement="section" asStyle={styles.heroStyle}>
        <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.leftHero}>
                <h1 className={styles.h1}>{data.titleHero}</h1>

                <p className={styles.textHero}>{data.textHero}</p>

                <form action="" className={styles.formMail}>
                  <input className={styles.inputMail} type="email" placeholder="Digite seu e-mail" />
                  <BtnMain className={styles.btnMail}>Testar grátis</BtnMain>
                </form>
                <Clientes dataPage={data} />
                <Review dataPage={data} />
              </div>
              <Image
              width={0}
              height={0}
              className={styles.imgHero} 
              style={{ width: 'auto', height: 'auto' }}
              src={MainImage} 
              alt='Imagem de uma mulher olhando o celular, sentada numa cadeira e na sua frente um computador' 
              />
            </div>
        </div>
    </RenderComputed>
  )
}
