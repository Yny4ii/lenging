import React from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import styles from './heroSection.module.scss'
import BackgroundLine from '@/components/backgroundLine/BackgroundLine'
import Blur from '@/screens/main/heroSection/blur/Blur'
import JoinWaitList from "@/components/ui/buttons/joinWaitList/JoinWaitList";

const HeroSection = () => {
    const t = useTranslations('MainPage')
    return (
        <div className={styles.heroSectionContainer}>
            <div className={styles.titleContainer}>
                <h1>{t('title')}</h1>
                <h2>{t('subTitle')}</h2>
                <JoinWaitList/>
            </div>
            <div className={styles.imageContainer}>
                <h4>{t('swapSendStore')}</h4>
                <Image
                    src={'/Uroboros.png'}
                    height={688}
                    width={568}
                    alt={'UROBOROS logo'}
                />
                <h4>{t('multipleChainsOneWallet')}</h4>
            </div>
            <BackgroundLine top={-624}/>
            <Blur top={-100} />
        </div>
    )
}

export default HeroSection
