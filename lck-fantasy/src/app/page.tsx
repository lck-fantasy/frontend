import './page.scss'
import Image from 'next/image'
import Banner from '@/components/home/Banner'
import PlayerRank from '@/components/home/PlayerRank'
import Carousel from '@/components/home/Carousel'
import UserRank from '@/components/home/UserRank'
import TeamRank from '@/components/home/TeamRank'

import map from '@/assets/images/map.png'

export default function Home() {
  return (
    <div className="home">
      <section className="section-banner">
        <Banner />
      </section>
      <section className="section-player">
        <PlayerRank />
        <Carousel />
      </section>
      <section className="section-user">
        <UserRank />
      </section>
      <section className="section-team">
        <Image src={map} alt="leage of lengeds map" width={900} height={650} />
        <TeamRank />
      </section>
    </div>
  )
}
