import styles from './Banner.module.scss'

import Link from 'next/link'
import Card from './Card'

import spt from '@/assets/images/spt.png'
import top from '@/assets/images/top.png'
import mid from '@/assets/images/mid.png'
import bot from '@/assets/images/bot.png'
import jgl from '@/assets/images/jgl.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Logo />
      <Cards />
    </div>
  )
}

function Logo() {
  return (
    <div className={styles['banner_logo-container']}>
      <div className={styles['logo']}>
        <div className={styles.lck}>LCK</div>
        <div className={styles.fantasy}>FANTASY</div>
      </div>
      <Link href={'#'} className={styles.link}>
        팀 만들기
      </Link>
    </div>
  )
}

function Cards() {
  return (
    <div className={styles['card-list']}>
      <Card src={spt} alt="spt" content="튜토리얼" link="#" />
      <Card src={top} alt="top" content="튜토리얼" link="#" />
      <Card src={mid} alt="mid" content="튜토리얼" link="#" />
      <Card src={bot} alt="bot" content="튜토리얼" link="#" />
      <Card src={jgl} alt="jgl" content="튜토리얼" link="#" />
    </div>
  )
}
