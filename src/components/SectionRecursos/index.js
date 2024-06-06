import React from 'react'
import RenderComputed from '../ComputedRender'
import CardRecurso from './CardRecurso'
import { dataRecursos } from '@/app/data'
import { styles } from './style.css'

export default function SectionRecursos() {
  return (
    <RenderComputed asElement="section" asStyle={styles.sectionRecursos}>
        <div className="container">
            <div className={styles.topStyles}>
                <h3 className={styles.h3Top}>Conheça os recursos da ferramenta de e-mail marketing CloudBoost</h3>
                <p className={styles.textTop}>Mais de 5.000 empresas que utilizam 🤞</p>
            </div>

            <div className={styles.all}>
                {
                    dataRecursos.map((item, index) => (
                        <CardRecurso 
                        key={index}
                        src={item.icon}
                        alt={item.altIcon}
                        heading={item.title}
                        paragraph={item.text}
                        />
                    ))
                }
            </div>
        </div>
    </RenderComputed>
  )
}
