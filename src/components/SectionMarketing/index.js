import React from 'react'
import RenderComputed from '../ComputedRender'
import BtnMain from '../BtnMain'
import { styles } from './style.css'
import boxBackground from "@/assets/bg-cta.svg"

export default async function SectionMarketing({ dataPage }) {
  const data = dataPage;
  return (
    <RenderComputed asElement="section" asStyle={styles.sectionMarketing}>
        <div className="container">
            <div className={styles.box} style={{ background: `url(${boxBackground.src}) no-repeat center center`,}}>
                <h2 className={styles.h2}>{data.titleCTA}</h2>
                <p className={styles.p}>{data.textCTA}</p>
                <BtnMain>{data.labelButton}</BtnMain>
            </div>
        </div>
    </RenderComputed>
  )
}
