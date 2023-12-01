import { StaticImageData } from 'next/image'
import botSrc from '@/assets/positions/bot.png'
import jglSrc from '@/assets/positions/jgl.png'
import topSrc from '@/assets/positions/top.png'
import sptSrc from '@/assets/positions/spt.png'
import midSrc from '@/assets/positions/mid.png'

type PositionType = {
  [key: string]: StaticImageData
}

const POSITION_TO_IMG: PositionType = {
  bot: botSrc,
  jgl: jglSrc,
  mid: midSrc,
  spt: sptSrc,
  top: topSrc,
}

export default POSITION_TO_IMG
