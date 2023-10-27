import './Banner.scss'

import SPT_SVG from '@/assets/svgs/spt.svg'
import TOP_SVG from '@/assets/svgs/top.svg'
import MID_SVG from '@/assets/svgs/mid.svg'
import BOT_SVG from '@/assets/svgs/bot.svg'
import JGL_SVG from '@/assets/svgs/jgl.svg'

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__logo">
        <h1>LCK FANTASY</h1>
        <p>Make Your Own LCK Team</p>
      </div>
      <div className="banner__svgs">
        <SPT_SVG />
        <TOP_SVG />
        <MID_SVG />
        <BOT_SVG />
        <JGL_SVG />
      </div>
    </section>
  )
}
