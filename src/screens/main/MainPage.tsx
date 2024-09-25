import React from 'react'
import { useTranslations } from 'next-intl'
import styles from './page.module.scss'

const MainPage = () => {
    const t = useTranslations('MainPage')
    return (
        <div>
            <h1 className={styles.test}>{t('title')}</h1>
            <h2 className={styles.t2}>{t('subTitle')}</h2>
        </div>
    )
}

export default MainPage
