import React from 'react'
import styles from './footerLink.module.scss'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

interface FooterLinkKey {
    blockKey: string
}

const FooterLink = ({ blockKey }: FooterLinkKey) => {
    const t = useTranslations('footer.blocks')
    const blockTitle = t(`${blockKey}.title`)
    const links = t.raw(`${blockKey}.links`)
    return (
        <div className={styles.footerLinkContainer}>
            <h4 className={styles.footerLinkTitle}>{blockTitle}</h4>
            <ul>
                {links.map((e: { url: string; text: string }) => (
                    <li key={e.text}>
                        <Link href={e.url}>{e.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterLink
