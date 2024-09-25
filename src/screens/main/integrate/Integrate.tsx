import React from 'react'
import IntegrateSlider from '@/screens/main/integrate/integrateSlider/IntegrateSlider'
import styles from './integrate.module.scss'
import { useTranslations } from 'next-intl'

const Integrate = () => {
    const t = useTranslations('MainPage.integrate')
    return (
        <div className={styles.integrateContainer}>
            <h3>{t('title')}</h3>
            <IntegrateSlider />
        </div>
    )
}

export default Integrate
