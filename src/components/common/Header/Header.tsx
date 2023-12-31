'use client'
import './Header.scss'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Modal from '@/components/common/Modal'
import LoginForm from '@/components/home/LoginForm'
import imgSrc from '@/assets/images/cat.png'
export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <header className="header">
      <nav className="header__nav">
        <Image src={imgSrc} alt="lck-logo" width={40} height={40} unoptimized />
        <div className="header__nav__list">
          <Link href={'#'}>유저랭킹</Link>
          <Link href={'#'}>선수정보</Link>
          <Link href={'#'}>경기정보</Link>
          <Link href={'#'}>튜토리얼</Link>
        </div>
        <button onClick={() => setIsModalOpen(true)}>로그인</button>
        <Modal openModal={isModalOpen} closeModal={() => setIsModalOpen(false)}>
          <LoginForm />
        </Modal>
      </nav>
    </header>
  )
}
