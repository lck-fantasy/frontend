import styles from './home.module.scss'
// import Cover from '@/components/home/Cover'
import Banner from '@/components/home/Banner'
import PopularPlayer from '@/components/home/PopularPlayer'
import PlayerRank from '@/components/home/PlayerRank'
import TeamUserRank from '@/components/home/TeamUserRank'
import Match from '@/components/home/Match'

export default function Home() {
  return (
    <div className={styles.home}>
      {/* <Cover /> */}
      <Banner />
      <PopularPlayer />
      <PlayerRank />
      <TeamUserRank />
      <Match />
      <span className={styles['home__bg1']} />
      <span className={styles['home__bg2']} />
      <span className={styles['home__bg3']} />
      <span className={styles['home__bg4']} />
    </div>
  )
}
