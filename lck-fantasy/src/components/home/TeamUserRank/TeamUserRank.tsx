import styles from './TeamUserRank.module.scss'
import ListBox from '@/components/common/ListBox'

export default function TeamUserRank() {
  return (
    <section className={styles.container}>
      <ListBox title={'팀 랭킹'} url={'#'} />
      <ListBox title={'유저 랭킹'} url={'#'} />
    </section>
  )
}
