'use client'
import { useState, useEffect } from 'react'
import styles from './Carousel.module.scss'
import Image from 'next/image'

import faker from '@/assets/images/faker.png'
import rol from '@/assets/images/player.png'
import chovy from '@/assets/images/chovy.png'
import t1 from '@/assets/images/T1.png'
import rolster from '@/assets/images/rolster.png'
import gen from '@/assets/images/gen.png'

const data = [
  { team: t1, player: faker, key: 'aksj' },
  { team: rolster, player: rol, key: 'sjkd' },
  { team: gen, player: chovy, key: 'lskdjfa' },
]

export default function Carousel() {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % data.length)
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className={styles.carousel} key={data[index].key}>
      {/* Todo: change to DIV tag */}
      <Image
        src={data[index].team}
        alt="주간 인기 선수 팀 로고"
        className={styles['carousel__team']}
      />
      <Image
        src={data[index].player}
        alt="주간 인기 선수 이미지"
        className={styles['carousel__player']}
      />
    </div>
  )
}
