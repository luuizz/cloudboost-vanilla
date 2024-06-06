import React from 'react'
import RenderComputed from '../ComputedRender'
import Image from 'next/image'
import MainImage from "@/assets/main-image.webp" 
import BtnMain from '../BtnMain'
import Clientes from './Clientes'
import Review from './Review'
import { styles } from './style.css'

export default function SectionHero() {
  return (
    <RenderComputed asElement="section" asStyle={styles.heroStyle}>
        <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.leftHero}>
                <h1 className={styles.h1}>
                Ferramenta de e-mail marketing perfeita para <span className={styles.spanHero}>sua empresa!</span>
                </h1>

                <p className={styles.textHero}>Aproveite o potencial do e-mail marketing para ganhar vendas e fortalecer seu relacionamento com clientes.</p>

                <form action="" className={styles.formMail}>
                  <input className={styles.inputMail} type="email" placeholder="Digite seu e-mail" />
                  <BtnMain className={styles.btnMail}>Testar grátis</BtnMain>
                </form>
                <Clientes />
                <Review />
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
