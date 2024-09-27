import React from 'react'
import styles from './footerLink.module.scss'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

interface FooterLinkKey {
    blockKey: string
    links: { id: string; url: string }[]
}

const FooterLink = ({ blockKey, links }: FooterLinkKey) => {
    const t = useTranslations(`footer.blocks.${blockKey}`)
    return (
        <div className={styles.footerLinkContainer}>
            <h4 className={styles.footerLinkTitle}>{t('title')}</h4>
            <ul>
                {links.map((e: { id: string; url: string }) => (
                    <li key={e.id}>
                        <Link href={e.url}>{t(e.id)}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterLink
