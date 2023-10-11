'use client'
import { useEffect, useRef } from 'react'
import styles from './Cover.module.scss'

export default function Cover() {
  const cover = useRef<HTMLDivElement>(null)

  const handleLoad = function logoDisappear() {
    cover.current?.classList.add(styles.text)
    setTimeout(() => {
      cover.current.style.display = 'none'
    }, 2000)
  }

  useEffect(() => {
    handleLoad()
  })

  return (
    <div className={`cover ${styles.cover}`} ref={cover}>
      <video autoPlay muted loop src="/cover.mp4" />
      <p>
        <span>LCK</span>
        <span>FANTASY</span>
      </p>
    </div>
  )
}
