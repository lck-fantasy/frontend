import './page.scss'
import Image from 'next/image'
import Banner from '@/components/home/Banner'
import PlayerRank from '@/components/home/PlayerRank'
import Carousel from '@/components/home/Carousel'
import UserRank from '@/components/home/UserRank'
import TeamRank from '@/components/home/TeamRank'
import Match from '@/components/home/Match'
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
