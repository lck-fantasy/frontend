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
        <h3>{title}</h3>
        <Link href={url} className={styles['list-box__link']}>
          <FontAwesomeIcon icon={faChevronRight} color="salmon" />
        </Link>
      </div>
      {/* <div>{children}</div> */}
    </div>
  )
}

{
  /* <FontAwesomeIcon icon={faChevronRight} /> */
}