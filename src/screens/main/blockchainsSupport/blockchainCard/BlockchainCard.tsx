import React from 'react'
import styles from './blockchainCard.module.scss'

interface BlockchainCardProps {
    icon: React.ReactNode
    title: string
}

const BlockchainCard = ({ icon, title }: BlockchainCardProps) => {
    return (
        <div className={styles.blockchainCardContainer}>
            {icon}
            <h4>{title}</h4>
        </div>
    )
}

export default BlockchainCard
