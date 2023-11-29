'use client'
import './LoginButton.scss'
import GOOGLE_SVG from '@/assets/svgs/google.svg'
import KAKAO_SVG from '@/assets/svgs/kakao.svg'
import NAVER_SVG from '@/assets/svgs/naver.svg'

type LoginButtonProps = {
  socialType: string
}

type LoginType = {
  name: string
  logo: React.ReactNode
  typeClass: string
}

const LOGIN_TYPE: Record<string, LoginType> = {
  google: { name: '구글', logo: <GOOGLE_SVG />, typeClass: 'google' },
  kakao: { name: '카카오', logo: <KAKAO_SVG />, typeClass: 'kakao' },
  naver: { name: '네이버', logo: <NAVER_SVG />, typeClass: 'naver' },
}

export default function LoginButton({ socialType }: LoginButtonProps) {
  const type = LOGIN_TYPE[socialType]

  return (
    <button className="login-button">
      <span className={type.typeClass}>{type.logo}</span>
      {type.name} 로그인
    </button>
  )
}
