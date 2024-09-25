'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { BlockchainsArray } from '@/screens/main/blockchainsSupport/config'
import BlockchainCard from '@/screens/main/blockchainsSupport/blockchainCard/BlockchainCard'
import 'swiper/css'
import styles from './blockchainSlider.module.scss'

const BlockchainSlider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={10}
                grabCursor={true}
                loop={true}
                slidesPerView={'auto'}
                speed={11000}
                autoplay={{
                    delay: 0.5,
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                modules={[Autoplay]}
                className={styles.swiperCustom}
            >
                {BlockchainsArray.map((e, i) => (
                    <SwiperSlide key={e.title + i} className={styles.slider}>
                        <BlockchainCard icon={e.icon} title={e.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                spaceBetween={10}
                grabCursor={true}
                loop={true}
                slidesPerView={'auto'}
                speed={11000}
                autoplay={{
                    delay: 0.5,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className={styles.swiperCustom}
            >
                {BlockchainsArray.map((e, i) => (
                    <SwiperSlide key={e.title + i} className={styles.slider}>
                        <BlockchainCard icon={e.icon} title={e.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default BlockchainSlider
