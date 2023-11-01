'use client'
import { useState, useEffect } from 'react'
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

const characters = [akali, leona, thresh, yasuo]
const backgrounds = [akaliBg, leonaBg, threshBg, yasuoBg]

export default function Carousel() {
  const [index, setIndex] = useState<number>(0)

  const divStyle = {
    backgroundImage: `url(${backgrounds[index].src})`,
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % characters.length)
    }, 4000)

    return () => {
      clearInterval(interval)
    }
  }, [index])

  return (
    <div className="carousel" style={divStyle} key={index}>
      <Image
        src={characters[index]}
        alt="carousel character"
        width={700}
        height={700}
        className="carousel__content"
      />
      <div className="carousel__div" />
    </div>
  )
}
