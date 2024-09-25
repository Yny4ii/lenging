import React from 'react'
import styles from './advantagesCard.module.scss'

interface AdvantagesCardProps {
    title: string
    text: string
    icon: React.ReactNode
}

const AdvantagesCard = ({ text, title, icon }: AdvantagesCardProps) => {
    return (
        <div className={styles.advantagesCardContainer}>
            <h4>{title}</h4>
            {icon}
            <span>{text}</span>
        </div>
    )
}

export default AdvantagesCard
