'use client'
import './Header.scss'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/common/Modal'
import LoginForm from '@/components/home/LoginForm'

export default function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <header className="header">
      <nav className="header__nav">
        <Image src={'/cat.png'} alt="lck-logo" width={40} height={40} />
        <div className="header__nav__list">
          <Link href={'#'}>유저랭킹</Link>
          <Link href={'#'}>선수정보</Link>
          <Link href={'#'}>경기정보</Link>
          <Link href={'#'}>튜토리얼</Link>
        </div>
        <button onClick={() => setIsLoginModalOpen(true)}>로그인</button>
        <Modal
          isModalOpen={isLoginModalOpen}
          closeModal={() => setIsLoginModalOpen(false)}
        >
          <LoginForm />
        </Modal>
      </nav>
    </header>
  )
}