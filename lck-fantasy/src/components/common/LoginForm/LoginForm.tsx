'use client'
import './LoginForm.scss'
import Image from 'next/image'
import LCK_LOGO from '@/assets/images/lck-logo.png'

export default function LoginForm() {
  return (
    <div className="login-form">
      <Image src={LCK_LOGO} alt="리그오브레전드 로고 사진" width={250} />
      <button>구글</button>
      <button>네이버 로그인</button>
      <button> 카카오 로그인</button>
    </div>
  )
}
