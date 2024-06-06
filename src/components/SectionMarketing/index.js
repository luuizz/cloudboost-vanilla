import React from 'react'
import RenderComputed from '../ComputedRender'
import BtnMain from '../BtnMain'
import { styles } from './style.css'

export default function SectionMarketing() {
  return (
    <RenderComputed asElement="section" asStyle={styles.sectionMarketing}>
        <div className="container">
            <div className={styles.box}>
                <h2 className={styles.h2}>Alavanque com a Ferramenta de E-mail Marketing Perfeita!</h2>
                <p className={styles.p}>Aumente as conversões, nutra relacionamentos e alcance o sucesso. Experimente agora mesmo!</p>
                <BtnMain>Testar grátis</BtnMain>
            </div>
        </div>
    </RenderComputed>
  )
}
