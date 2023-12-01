'use client'
import './Match.scss'
import { useEffect, useState } from 'react'
import { StaticImageData } from 'next/image'
import imgUrl from '@/assets/images/cat.png'
import MatchListItem from './_MatchListItem'
import NUMBER_TO_MONTH from '@/constants/months'

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
    // 데이터 월(Month) 개수에 따른 높이 설정 (100vh per 1 month)
    const matchContainer: HTMLDivElement =
      document.querySelector('.match-container')
    matchContainer.style.height = `${data.length * 100}vh`

    // 화면 높이
    const windowHeight = window.innerHeight
    // 헤더 높이 + 여유분 (month change detection 더 빠르게하기 위해)
    const headerHeight =
      document.querySelector('.header').getBoundingClientRect().height + 100
    // 전체 matchList를 포함하는 컨테이너 (이하 스케줄)
    const schedule: HTMLDivElement = document.querySelector('.match-schedule')

    addEventListener('scroll', () => {
      // 스케줄이 헤더 높이 보다 크다면 이벤트 핸들러 종료
      if (schedule.getBoundingClientRect().top > headerHeight) return

      // 헤더 높이와 같거나 작을 때 (스케줄 위치 == 헤더 높이 - 화면 높이 * idx)
      const idx =
        (schedule.getBoundingClientRect().top - headerHeight) / windowHeight
      // 음수 값 양수 변환 && 월 데이터 추출
      const newMonth = data[-parseInt(String(idx))][0].date.split('-')[1]
      // 상태 업데이트
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
          <span>{NUMBER_TO_MONTH[month]}</span>
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
