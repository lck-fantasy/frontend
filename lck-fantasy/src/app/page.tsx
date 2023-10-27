import styles from './home.module.scss'
// import Cover from '@/components/home/Cover'
import Banner from '@/components/home/Banner'
import PopularPlayer from '@/components/home/PopularPlayer'
import Rank from '@/components/home/Rank'

export default function Home() {
  return (
    <div className={styles.home}>
      {/* <Cover /> */}
      <Banner />
      <PopularPlayer />
      <Rank />
      {/* <span className={styles['home__bg1']} />
      <span className={styles['home__bg2']} />
      <span className={styles['home__bg3']} />
      <span className={styles['home__bg4']} /> */}
    </div>
  )
}
