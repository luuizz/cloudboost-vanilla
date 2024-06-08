import React from 'react'
import RenderComputed from '../ComputedRender'
import CardRecurso from './CardRecurso'
import { dataRecursos } from '@/app/data'
import { styles } from './style.css'
import { urlForImage } from '../../../sanity/lib/image'

export default async function SectionRecursos( {dataPage} ) {

    const data = dataPage;
  return (
    <RenderComputed asElement="section" asStyle={styles.sectionRecursos}>
        <div className="container">
            <div className={styles.topStyles}>
                <h3 className={styles.h3Top}>{data.marketTitle}</h3>
                <p className={styles.textTop}>{data.marketText}</p>
            </div>

            <div className={styles.all}>
                {
                    data.topicosRecursos.map((item, index) => (
                        <CardRecurso 
                        key={index}
                        src={urlForImage(item.icon.asset)}
                        alt={item.icon.altIcon}
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
