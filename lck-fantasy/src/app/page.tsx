import Banner from '@/components/home/Banner'
import PlayerRank from '@/components/home/PlayerRank'
import Carousel from '@/components/home/Carousel'
import TeamRank from '@/components/home/TeamRank'
export default function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <PlayerRank />
        <Carousel />
      </section>
      <section>
        <TeamRank />
        <TeamRank />
        <TeamRank />
        <TeamRank />
        <TeamRank />
      </section>
    </div>
  )
}
