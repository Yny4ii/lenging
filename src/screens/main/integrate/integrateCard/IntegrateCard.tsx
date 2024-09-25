import React from 'react'
import styles from './integrateCard.module.scss'

interface IntegrateCardProps {
    icon: React.ReactNode
    text: string
    title: string
}

const IntegrateCard = ({ title, icon, text }: IntegrateCardProps) => {
    return (
        <div className={styles.integrateCardContainer}>
            <div className={styles.iconContainer}>{icon}</div>
            <h4>{title}</h4>
            <span>{text}</span>
        </div>
    )
}

export default IntegrateCard
