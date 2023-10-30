import './RankBox.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface Props {
  title: string
  subTitle: string
  url: string
  // ariaLabel: string
  children: React.ReactNode
}

export default function ListBox({ title, subTitle, url, children }: Props) {
  return (
    <div className="list-box">
      <div className="list-box__title">
        <h3>{title}</h3>
        <Link href={url}>
          <FontAwesomeIcon icon={faChevronRight} color="salmon" />
        </Link>
      </div>
      <p>{subTitle}</p>
      {children}
    </div>
  )
}
