import '../app/(home)/Home.scss'
import Image from 'next/image'
import Banner from '@/app/(home)/_Banner'
import PlayerRank from '@/app/(home)/_PlayerRank'
import Carousel from '@/app/(home)/_Carousel'
import UserRank from '@/app/(home)/_UserRank'
import TeamRank from '@/app/(home)/_TeamRank'
import Match from '@/app/(home)/_Match'
import map from '@/assets/images/map.png'
export default function Home() {
  return (
    <div className="home">
      <section className="home-banner">
        <Banner />
      </section>
      <section className="home-player">
        <PlayerRank />
        <Carousel />
      </section>
      <section className="home-user">
        <UserRank />
      </section>
      <section className="home-team">
        <Image src={map} alt="leage of lengeds map" width={500} height={350} />
        <TeamRank />
      </section>
      <section className="home-match">
        <Match />
      </section>
    </div>
  )
}
