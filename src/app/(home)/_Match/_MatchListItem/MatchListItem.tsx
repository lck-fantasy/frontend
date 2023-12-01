import './MatchListItem.scss'
import Image from 'next/image'
import { StaticImageData } from 'next/image'

type Match = {
  date: string
  time: string
  location: string
  blue: { name: string; image: StaticImageData }
  red: { name: string; image: StaticImageData }
}

type MatchItemProps = {
  matchList: Match[]
}

export default function MatchListItem({ matchList }: MatchItemProps) {
  return (
    <div className="match-list">
      {matchList.map((match) => {
        return (
          <div className="match-item" key={match.time}>
            <div className="match-item__date">{match.date.split('-')[2]}</div>
            <div>{match.time}</div>
            <div className="match-item__team">
              <div>
                <span>{match.blue.name}</span>
                <Image
                  src={match.blue.image}
                  alt="blue team image"
                  width={50}
                  height={50}
                />
              </div>
              <span className="match-item__versus">vs</span>
              <div>
                <Image
                  src={match.red.image}
                  alt="red team image"
                  width={50}
                  height={50}
                />
                <span>{match.red.name}</span>
              </div>
            </div>
            <div>{match.location}</div>
          </div>
        )
      })}
    </div>
  )
}
