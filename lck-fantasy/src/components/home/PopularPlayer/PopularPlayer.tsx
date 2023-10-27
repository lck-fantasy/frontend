import './PopularPlayer.scss'

import ListBox from '@/components/common/ListBox'
import Carousel from '@/components/home/Carousel'

export default function PopularPlayer() {
  return (
    <section className="container">
      <ListBox title={'주간 인기 선수'} url={'#'} />
      <Carousel />
    </section>
  )
}
