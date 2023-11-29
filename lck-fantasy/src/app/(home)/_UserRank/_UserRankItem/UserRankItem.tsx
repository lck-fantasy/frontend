import './UserRankItem.scss'
import Image from 'next/image'
type UserRank = {
  uuid: string
  image: string
  nickname: string
  rank: number
  score: number
}

type UserRankItemProps = {
  user: UserRank
}
export default function UserRankItem({ user }: UserRankItemProps) {
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
