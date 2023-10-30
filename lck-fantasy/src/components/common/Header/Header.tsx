import './Header.scss'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <Image src={'/cat.png'} alt="lck-logo" width={40} height={40} />
        <div className="header__nav__list">
          <Link href={'#'}>유저 랭킹</Link>
          <Link href={'#'}>유저 랭킹</Link>
          <Link href={'#'}>유저 랭킹</Link>
        </div>
        <Link href={'#'}>로그인</Link>
      </nav>
    </header>
  )
}
