import { IntegrateArray } from '@/screens/main/integrate/config'
import IntegrateCard from '@/screens/main/integrate/integrateCard/IntegrateCard'
import React from 'react'
import { useTranslations } from 'next-intl'
import styles from './mobileCards.module.scss'
export default function MobileCards() {
    const t = useTranslations('MainPage.integrate.cards')
    return (
        <div className={styles.cardsContainer}>
            {IntegrateArray.map((e) => (
                <IntegrateCard
                    key={e.text}
                    title={e.title}
                    icon={e.icon}
                    text={t(e.text)}
                />
            ))}
        </div>
    )
}
