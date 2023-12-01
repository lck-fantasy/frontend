'use client'
import './Match.scss'
import { useEffect, useState } from 'react'
import { StaticImageData } from 'next/image'
import imgUrl from '@/assets/images/cat.png'
import MatchListItem from './_MatchListItem'

type Match = {
  date: string
  time: string
  location: string
  blue: { name: string; image: StaticImageData }
  red: { name: string; image: StaticImageData }
}

const data: Match[][] = [
  [
    {
      date: '2023-04-01',
      time: '14:20',
      location: '서울 LoL Park',
      blue: {
        name: 'T1',
        image: imgUrl,
      },
      red: {
        name: 'T1',
        image: imgUrl,
      },
    },
    {
      date: '2023-04-04',
      time: '14:30',
      location: '서울 LoL Park',

      blue: {
        name: 'T1',
        image: imgUrl,
      },
      red: {
        name: 'T1',
        image: imgUrl,
      },
    },
    {
      date: '2023-04-04',
      time: '14:40',
      location: '서울 LoL Park',

      blue: {
        name: 'T1',
        image: imgUrl,
      },
      red: {
        name: 'T1',
        image: imgUrl,
      },
    },
    {
      date: '2023-04-04',
      time: '14:50',
      location: '서울 LoL Park',

      blue: {
        name: 'T1',
        image: imgUrl,
      },
      red: {
        name: 'T1',
        image: imgUrl,
      },
    },
    {
      date: '2023-04-04',
      time: '14:60',
      location: '서울 LoL Park',

      blue: {
        name: 'T1',
        image: imgUrl,
      },
      red: {
        name: 'T1',
        image: imgUrl,
      },
    },
    {
      date: '2023-04-04',
      time: '15:20',
      location: '서울 LoL Park',

      blue: {
        name: 'T1',
        image: imgUrl,
      },
      red: {
        name: 'T1',
        image: imgUrl,
      },
    },
  ],
  [
    {
      date: '2023-05-01',
      time: '14:20',
      location: '서울 LoL Park',

      blue: {
        name: '공주',
        image: imgUrl,
      },
      red: {
        name: '왕자',
        image: imgUrl,
      },
    },
    {
      date: '2023-05-01',
      time: '15:20',
      location: '서울 LoL Park',

      blue: {
        name: '최성빈',
        image: imgUrl,
      },
      red: {
        name: '정예지',
        image: imgUrl,
      },
    },
    {
      date: '2023-05-01',
      time: '16:20',
      location: '서울 LoL Park',

      blue: {
        name: 'string',
        image: imgUrl,
      },
      red: {
        name: 'string',
        image: imgUrl,
      },
    },
    {
      date: '2023-05-01',
      time: '17:20',
      location: '서울 LoL Park',

      blue: {
        name: 'string',
        image: imgUrl,
      },
      red: {
        name: 'string',
        image: imgUrl,
      },
    },
  ],
  [
    {
      date: '2023-06-04',
      time: '15:20',
      location: '서울 LoL Park',

      blue: {
        name: 'string',
        image: imgUrl,
      },
      red: {
        name: 'string',
        image: imgUrl,
      },
    },
    {
      date: '2023-06-05',
      time: '15:20',
      location: '서울 LoL Park',

      blue: {
        name: 'string',
        image: imgUrl,
      },
      red: {
        name: 'string',
        image: imgUrl,
      },
    },
  ],
]

export default function Match() {
  const [month, setMonth] = useState<string>('00')

  useEffect(() => {
    const matchContainer: HTMLDivElement =
      document.querySelector('.match-container')
    matchContainer.style.height = `${data.length * 100}vh`

    const windowHeight = window.innerHeight
    const headerHeight =
      document.querySelector('.header').getBoundingClientRect().height + 100
    const schedule: HTMLDivElement = document.querySelector('.match-schedule')
    addEventListener('scroll', () => {
      if (schedule.getBoundingClientRect().top > headerHeight) return

      const idx =
        (schedule.getBoundingClientRect().top - headerHeight) / windowHeight
      const newMonth = data[-parseInt(String(idx))][0].date.split('-')[1]
      setMonth(newMonth)
    })

    return () => {
      removeEventListener('scroll', () => {})
    }
  }, [])

  return (
    <div className="match-container">
      <div className="match-title">
        <div> {month}</div>
        <div className="match-title-detail">
          <span>경기일정</span>
          <span>August</span>
        </div>
      </div>
      <div className="match-schedule">
        {data.map((matchList, idx) => {
          return <MatchListItem key={idx} matchList={matchList} />
        })}
      </div>
    </div>
  )
}
