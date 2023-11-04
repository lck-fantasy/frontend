import './Carousel.scss'
import Image from 'next/image'
import akali from '@/assets/images/carousel/akali.png'
import akaliBg from '@/assets/images/carousel/akali-bg.jpeg'
import leona from '@/assets/images/carousel/leona.png'
import leonaBg from '@/assets/images/carousel/leona-bg.jpeg'
import thresh from '@/assets/images/carousel/thresh.png'
import threshBg from '@/assets/images/carousel/thresh-bg.jpg'
import yasuo from '@/assets/images/carousel/yasuo.png'
import yasuoBg from '@/assets/images/carousel/yasuo-bg.jpeg'

const assets = [
  { character: akali, background: akaliBg },
  { character: leona, background: leonaBg },
  { character: thresh, background: threshBg },
  { character: yasuo, background: yasuoBg },
]

export default function Carousel() {
  return (
    <div className="carousel-container">
      {assets.map((asset) => {
        return (
          <div
            className="carousel"
            style={{
              backgroundImage: `url(${asset.background.src})`,
            }}
            key={asset.background.src}
          >
            <Image
              src={asset.character}
              alt="carousel character"
              width={750}
              height={750}
              className="carousel__content"
            />
          </div>
        )
      })}
    </div>
  )
}
