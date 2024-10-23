'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import IntegrateCard from '@/screens/main/integrate/integrateCard/IntegrateCard'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

import styles from './intergrateSlider.module.scss'
import { useTranslations } from 'next-intl'
import { IntegrateArray } from '@/screens/main/integrate/config'

const IntegrateSlider = () => {
    const t = useTranslations('MainPage.integrate.cards')
    return (
        <div className={styles.sliderContainer}>
            <Swiper
                className={styles.swiperCustom}
                spaceBetween={300}
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
            >
                {IntegrateArray.map((e) => (
                    <SwiperSlide key={e.text} className={styles.swiperSlide}>
                        <IntegrateCard
                            title={e.title}
                            icon={e.icon}
                            text={t(e.text)}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default IntegrateSlider
