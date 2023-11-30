import './TeamRankItem.scss'
import Image, { StaticImageData } from 'next/image'

type Team = {
  uuid: string
  name: string
  rank: number
  image: StaticImageData
  win: number
  lose: number
}

type TeamRankItemProps = {
  data: Team[]
}

export default function TeamRankItem({ data }: TeamRankItemProps) {
  return (
    <table className="team-rank-table">
      <thead className="team-rank-table__header">
        <tr>
          <th>no.</th>
          <th>team</th>
          <th>name</th>
          <th>win</th>
          <th>lose</th>
        </tr>
      </thead>
      <tbody className="team-rank-table__body">
        {data?.map((team, idx) => {
          return (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>
                <Image
                  src={team.image}
                  alt="player image"
                  width={35}
                  height={35}
                />
              </td>
              <td>{team.name}</td>
              <td>{team.win}</td>
              <td>{team.lose} </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
