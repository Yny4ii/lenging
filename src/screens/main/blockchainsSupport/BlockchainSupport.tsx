import React from 'react'
import styles from './blockchainSupport.module.scss'
import BlockchainCarousel from '@/screens/main/blockchainsSupport/blockchainCarousel/BlockchainCarousel'
import { useTranslations } from 'next-intl'

const BlockchainSupport = () => {
    const t = useTranslations('MainPage')

    return (
        <div className={styles.blockchainSupportContainer}>
            <h2>{t('blockchainSupport')}</h2>
            <BlockchainCarousel />
        </div>
    )
}

export default BlockchainSupport
