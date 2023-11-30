import RankBox from '@/components/common/RankBox'
import PlayerRankItem from '@/app/(home)/_PlayerRank/_PlayerRankItem'

type Player = {
  image: string
  name: string
  pickCount: number
  cost: number
  position: string
  team: {
    uuid: string
    name: string
    image: string
  }
}

const data: Player[] = [
  {
    image: 'cat.png',
    name: 'faker',
    pickCount: 2343,
    cost: 342,
    position: 'top',
    team: {
      uuid: '392342',
      name: 'T1',
      image: 'cat.png',
    },
  },
  {
    image: 'cat.png',
    name: 'faker',
    pickCount: 2343,
    cost: 342,
    position: 'mid',
    team: {
      uuid: '392342',
      name: 'T1',
      image: 'cat.png',
    },
  },
  {
    image: 'cat.png',
    name: 'faker',
    pickCount: 2343,
    cost: 342,
    position: 'jgl',
    team: {
      uuid: '392342',
      name: 'T1',
      image: 'ca.png',
    },
  },
  {
    image: 'cat.png',
    name: 'faker',
    pickCount: 2343,
    cost: 342,
    position: 'bot',
    team: {
      uuid: '392342',
      name: 'T1',
      image: 'cat.png',
    },
  },
  {
    image: 'cat.png',
    name: 'faker',
    pickCount: 2343,
    cost: 342,
    position: 'spt',
    team: {
      uuid: '392342',
      name: 'T1',
      image: 'cat.png',
    },
  },
]

export default function PopularPlayer() {
  return (
    <RankBox title={'player rank'} subTitle={'인기 선수'} url={'#'}>
      <PlayerRankItem data={data} />
    </RankBox>
  )
}
