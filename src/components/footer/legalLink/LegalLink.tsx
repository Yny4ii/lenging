import React from 'react'
import Link from 'next/link'
import styles from './legalLink.module.scss'

interface LegalLinkProps {
    title: string
    url: string
}

const LegalLink = ({ title, url }: LegalLinkProps) => {
    return (
        <Link href={url} className={styles.legalLinkContainer}>
            {title}
        </Link>
    )
}

export default LegalLink
