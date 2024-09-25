'use client'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './advantagesSlider.module.scss'
import AdvantagesCard from '@/screens/main/advantages/advantagesSlider/avantagesCard/AdvantagesCard'
import { useTranslations } from 'next-intl'
import { AdvantagesCardArray } from '@/screens/main/advantages/advantagesSlider/config'

const AdvantagesSlider = () => {
    const t = useTranslations('MainPage.advantages')
    return (
        <div>
            <Swiper
                className={styles.swiperCustom}
                spaceBetween={32}
                grabCursor={true}
                loop={true}
                slidesPerView={'auto'}
                speed={11000}
                autoplay={{
                    delay: 0.5,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {AdvantagesCardArray.map((e) => (
                    <SwiperSlide
                        key={e.cardName}
                        className={styles.swiperSlide}
                    >
                        <AdvantagesCard
                            title={t(`${e.cardName}.title`)}
                            text={t(`${e.cardName}.text`)}
                            icon={e.icon}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default AdvantagesSlider
