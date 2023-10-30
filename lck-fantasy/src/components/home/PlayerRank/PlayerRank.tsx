import './PlayerRank.scss'

import ListBox from '@/components/common/ListBox'

export default function PopularPlayer() {
  return (
    <section className="container">
      <ListBox title={'주간 인기 선수'} url={'#'} />
    </section>
  )
}
