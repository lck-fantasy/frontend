'use client'
import './LoginForm.scss'
import Image from 'next/image'
import LCK_LOGO from '@/assets/images/lck-logo.png'
import LoginButton from './LoginButton'

export default function LoginForm() {
  return (
    <div className="login-form">
      <Image src={LCK_LOGO} alt="리그오브레전드 로고 사진" width={250} />
      <div className="login-form__buttons">
        <LoginButton socialType="google" />
        <LoginButton socialType="kakao" />
        <LoginButton socialType="naver" />
      </div>
    </div>
  )
}
