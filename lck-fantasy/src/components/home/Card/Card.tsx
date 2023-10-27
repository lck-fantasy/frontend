import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import './Card.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' // Import the FontAwesomeIcon component
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

type CardProps = {
  src: StaticImageData
  alt: string
  content: string
  link: string
}

export default function Card({ src, alt, content, link }: CardProps) {
  return (
    <div className="card-container">
      <Image src={src} alt={alt} className="card" />
      <div className="content">
        <FontAwesomeIcon className="arrow" icon={faCaretDown} />
        <div>{content}</div>
        <Link href={link}>이동하기</Link>
      </div>
    </div>
  )
}
