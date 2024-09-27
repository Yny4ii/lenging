import React from 'react'
import styles from './blockchainSupport.module.scss'
import BlockchainSlider from '@/screens/main/blockchainsSupport/blockchainSlider/BlockchainSlider'
import { useTranslations } from 'next-intl'
import BackgroundLine from '@/components/backgroundLine/BackgroundLine'

const BlockchainSupport = () => {
    const t = useTranslations('MainPage')

    return (
        <div className={styles.blockchainSupportContainer}>
            <h2>{t('blockchainSupport')}</h2>
            <BlockchainSlider />
            <BackgroundLine top={-450} left={-580} deg={-180} zIndex={-1} />
        </div>
    )
}

export default BlockchainSupport
