import React from 'react'
import SecureIcon from '@/screens/main/secureBlock/icons/SecureIcon'
import styles from './secureBlock.module.scss'
import { useTranslations } from 'next-intl'

const SecureBlock = () => {
    const t = useTranslations('MainPage')

    return (
        <div className={styles.secureBlockContainer}>
            <SecureIcon />
            <h2>{t('secure')}</h2>
        </div>
    )
}

export default SecureBlock
