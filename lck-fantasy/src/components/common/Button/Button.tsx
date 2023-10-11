'use client'

import styles from './Button.module.scss'

type ButtonProps = {
  text: string // 버튼 텍스트
  size?: 'xs' | 'sm' | 'md' | 'lg' // 사이즈
  onClick?: (e: React.TouchEvent | React.MouseEvent) => void // 클릭 시 동작
}

export default function Button({
  text,
  size = 'lg',
  onClick = () => {},
}: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[size]}`} onClick={onClick}>
      {text}
    </button>
  )
}
