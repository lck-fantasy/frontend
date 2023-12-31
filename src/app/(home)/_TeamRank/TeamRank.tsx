import RankBox from '@/components/common/RankBox'
import TeamRankItem from '@/app/(home)/_TeamRank/_TeamRankItem'
import imgSrc from '@/assets/images/cat.png'
import { StaticImageData } from 'next/image'
type Team = {
  uuid: string
  name: string
  rank: number
  image: StaticImageData
  win: number
  lose: number
}

const data: Team[] = [
  {
    uuid: 'asdf',
    name: 'string',
    rank: 7,
    image: imgSrc,
    win: 23,
    lose: 43,
  },
  {
    uuid: 'asdf',
    name: 'string',
    rank: 7,
    image: imgSrc,
    win: 23,
    lose: 43,
  },
  {
    uuid: 'asdf',
    name: 'string',
    rank: 7,
    image: imgSrc,
    win: 23,
    lose: 43,
  },
  {
    uuid: 'asdf',
    name: 'string',
    rank: 7,
    image: imgSrc,
    win: 23,
    lose: 43,
  },
  {
    uuid: 'asdf',
    name: 'string',
    rank: 7,
    image: imgSrc,
    win: 23,
    lose: 43,
  },
]

export default function Rank() {
  return (
    <RankBox title={'team rank'} subTitle={'주간 팀 순위'} url={'#'}>
      <TeamRankItem data={data} />
    </RankBox>
  )
}
