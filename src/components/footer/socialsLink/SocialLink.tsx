import React from 'react'
import Link from 'next/link'
import styles from './socialLink.module.scss'

interface SocialLinkProps {
    icon: React.ReactNode
    url: string
}

const SocialLink = ({ icon, url }: SocialLinkProps) => {
    return (
        <Link href={url} className={styles.socialLinkContainer}>
            {icon}
        </Link>
    )
}

export default SocialLink
