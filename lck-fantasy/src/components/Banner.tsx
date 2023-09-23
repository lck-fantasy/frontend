import styles from './Banner.module.scss'
import Image from 'next/image'

import spt from '@/assets/images/spt.png'
import top from '@/assets/images/top.png'
import mid from '@/assets/images/mid.png'
import bot from '@/assets/images/bot.png'
import jgl from '@/assets/images/jgl.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles['banner_slogan-container']}>
        <h1 className={styles['banner_slogan']}>LCK Fantasy</h1>
        <div>팀 만드러 드가는 버튼?</div>
      </div>
      <div className={styles['banner_card-container']}>
        <Image src={top} alt="Top Card" className={styles['card-top']} />
        <Image src={jgl} alt="Jungle Card" className={styles['card-jgl']} />
        <Image src={mid} alt="Mid Card" className={styles['card-mid']} />
        <Image src={bot} alt="Bottom Card" className={styles['card-bot']} />
        <Image src={spt} alt="Support Card" className={styles['card-spt']} />
      </div>
    </div>
  )
}
