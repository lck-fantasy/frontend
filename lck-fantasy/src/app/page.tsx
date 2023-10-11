import Banner from '@/components/home/Banner'
import PopularPlayer from '@/components/home/PopularPlayer'
import PlayerRank from '@/components/home/PlayerRank'
import TeamUserRank from '@/components/home/TeamUserRank'
import Match from '@/components/home/Match'
export default function Home() {
  return (
    <>
      <Banner />
      <PopularPlayer />
      <PlayerRank />
      <TeamUserRank />
      <Match />
    </>
  )
}
