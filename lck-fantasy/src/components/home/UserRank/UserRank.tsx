import './UserRank.scss'
import RankBox from '@/components/common/RankBox'
import Image from 'next/image'

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
  return (
    <RankBox title={'user rank'} subTitle={'명예의 전당'} url={'#'}>
      <div className="user-rank-container">
        <div className="user-rank-list">
          {data.map((user) => {
            return <UserRankItem key={user.uuid} user={user} />
          })}
        </div>
        <div className="user-rank-list">
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
      <div className="user-rank-item__image">
        <Image src={user.image} alt="user image" width={200} height={200} />
      </div>
      <div className="user-rank-item__info">
        <span>
          {user.rank}. {user.nickname}
        </span>
        <span>{user.score}</span>
      </div>
    </div>
  )
}
