import './PlayerRankItem.scss'
import Image, { StaticImageData } from 'next/image'
import POSITION_TO_IMG from '@/constants/positions'

type Player = {
  image: StaticImageData
  name: string
  pickCount: number
  cost: number
  position: string
  team: {
    uuid: string
    name: string
    image: StaticImageData
  }
}

type PlayerRankItemProps = {
  data: Player[]
}

export default function PlayerRankItem({ data }: PlayerRankItemProps) {
  return (
    <table className="player-rank-table">
      <thead className="player-rank-table__header">
        <th>no.</th>
        <th>player</th>
        <th>name</th>
        <th>pick</th>
        <th>cost</th>
        <th>position</th>
        <th>team</th>
      </thead>
      <tbody className="player-rank-table__body">
        {data?.map((player, idx) => {
          return (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>
                <Image
                  src={player.image}
                  alt="player image"
                  width={35}
                  height={35}
                />
              </td>
              <td>{player.name}</td>
              <td>{player.pickCount}</td>
              <td>{player.cost}</td>
              <td>
                <Image
                  src={POSITION_TO_IMG[player.position]}
                  alt="player position"
                  width={35}
                  height={35}
                />
              </td>
              <td>
                <Image
                  src={player.team.image}
                  alt="player team"
                  width={35}
                  height={35}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
