import Banner from '@/components/home/Banner'
import PlayerRank from '@/components/home/PlayerRank'
import TeamRank from '@/components/home/TeamRank'
export default function Home() {
  return (
    <div>
      <section>
        <Banner />
      </section>
      <section>
        <PlayerRank />
      </section>
      <section>
        <TeamRank />
      </section>
    </div>
  )
}
