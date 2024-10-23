import React from 'react'
import IntegrateSlider from '@/screens/main/integrate/integrateSlider/IntegrateSlider'
import styles from './integrate.module.scss'
import { useTranslations } from 'next-intl'
import BackgroundLine from "@/components/backgroundLine/BackgroundLine";
import MobileCards from "@/screens/main/integrate/mobileCards/mobileCards";

const Integrate = () => {
    const t = useTranslations('MainPage.integrate')
    return (
        <div className={styles.integrateContainer}>
            <h3>{t('title')}</h3>
            <IntegrateSlider />
            <MobileCards/>
            <BackgroundLine top={-630} left={-580} deg={345} />
        </div>
    )
}

export default Integrate
