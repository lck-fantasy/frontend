import styles from './ListBox.module.scss'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface Props {
  title: string
  // ariaLabel: string
  url: string
  // children: React.ReactNode
}

export default function ListBox({ title, url }: Props) {
  return (
    <div className={styles['list-box']}>
      <div className={styles['list-box__title']}>
        <p>{title}</p>
        <Link href={url}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
      {/* <div>{children}</div> */}
    </div>
  )
}
