import React from 'react'
import styles from './blockchainSupport.module.scss'
import BlockchainSlider from '@/screens/main/blockchainsSupport/blockchainSlider/BlockchainSlider'
import { useTranslations } from 'next-intl'

const BlockchainSupport = () => {
    const t = useTranslations('MainPage')

    return (
        <div className={styles.blockchainSupportContainer}>
            <h2>{t('blockchainSupport')}</h2>
            <BlockchainSlider />
        </div>
    )
}

export default BlockchainSupport
