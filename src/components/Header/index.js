import React from 'react'
import RenderComputed from '../ComputedRender'
import Link from 'next/link'
import Image from 'next/image'
import Logo from "@/assets/logo.svg"
import IconHelp from "@/assets/icon-help.svg"
import BtnMain from '../BtnMain'
import { styles } from './style.css'
import Menu from "@/assets/icon-hamburger.svg"

export default function Header() {
  return (
    <RenderComputed asElement="header" asStyle={styles.header}>
        <div className="container">
            <div className={styles.contentHeader}>
                <Link href="#" title='Ir para página inicial' >
                    <Image src={Logo} alt='Logo do Cloudboost'  />
                </Link>

                <div className={styles.left}>
                    <Link className={styles.linkHelp} href="#">
                        <Image src={IconHelp} alt='Ícone de ajuda' />
                        <span className={styles.spanHelp}>Precisa de ajuda</span>
                    </Link>

                    <BtnMain>Testar grátis</BtnMain>
                </div>

                <button className={styles.menu}>
                    <Image src={Menu} alt='Menu Mobile' />
                </button>
            </div>
        </div>
    </RenderComputed>
  )
}
