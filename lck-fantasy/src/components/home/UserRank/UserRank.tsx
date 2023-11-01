'use client'
import './UserRank.scss'
import RankBox from '@/components/common/RankBox'
import Image from 'next/image'

import { useRef, useEffect } from 'react'

type UserRank = {
  uuid: string
  image: string
  nickname: string
  rank: number
  score: number
}

const data: UserRank[] = [
  {
    uuid: 'skdj',
    image: '/cat.png',
    nickname: 'yezii',
    rank: 1,
    score: 400,
  },
  {
    uuid: 'skdj',
    image: '/cat.png',
    nickname: 'yezii',
    rank: 2,
    score: 400,
  },
  {
    uuid: 'skdj',
    image: '/cat.png',
    nickname: 'yezii',
    rank: 3,
    score: 400,
  },
  {
    uuid: 'skdj',
    image: '/cat.png',
    nickname: 'yezii',
    rank: 4,
    score: 400,
  },
  {
    uuid: 'skdj',
    image: '/cat.png',
    nickname: 'yezii',
    rank: 5,
    score: 400,
  },
  {
    uuid: 'skdj',
    image: '/cat.png',
    nickname: 'yezii',
    rank: 6,
    score: 400,
  },
  {
    uuid: 'skdj',
    image: '/cat.png',
    nickname: 'yezii',
    rank: 7,
    score: 400,
  },
  {
    uuid: 'skdj',
    image: '/cat.png',
    nickname: 'yezii',
    rank: 8,
    score: 400,
  },
  {
    uuid: 'skdj',
    image: '/cat.png',
    nickname: 'yezii',
    rank: 9,
    score: 400,
  },
  {
    uuid: 'skdj',
    image: '/cat.png',
    nickname: 'yezii',
    rank: 10,
    score: 400,
  },
]

export default function UserRank() {
  const wrapper = useRef<HTMLDivElement>(null)
  const userList = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const clone: HTMLDivElement = userList.current.cloneNode(true) // 자식 노드까지 복제 true
    wrapper.current.appendChild(clone) // wrapper 자식으로 추가
    userList.current.classList.add('original')
    clone.classList.add('clone')
  }, [])

  return (
    <RankBox title={'user rank'} subTitle={'명예의 전당'} url={'#'}>
      <div className="user-rank-container" ref={wrapper}>
        <div className="user-rank-list" ref={userList}>
          {data.map((user) => {
            return <UserRankItem key={user.uuid} user={user} />
          })}
        </div>
      </div>
    </RankBox>
  )
}

type UserRankItemProps = {
  user: UserRank
}

function UserRankItem({ user }: UserRankItemProps) {
  return (
    <div className="user-rank-item">
      <Image src={user.image} alt="user image" width={200} height={200} />
      <div className="user-rank-item__info">
        <span>
          {user.rank}. {user.nickname}
        </span>
        <span>{user.score}</span>
      </div>
    </div>
  )
}
