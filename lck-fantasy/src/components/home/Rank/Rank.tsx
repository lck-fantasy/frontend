import './Rank.scss'
import ListBox from '@/components/common/ListBox/ListBox'

export default function Rank() {
  return (
    <section className="rank">
      <article>
        <ListBox title={'유저 랭킹'} url={'#'} />
      </article>
      <article>
        <ListBox title={'팀 랭킹'} url={'#'} />
      </article>
      <article>
        <ListBox title={'선수 랭킹'} url={'#'} />
      </article>
    </section>
  )
}
