import React from 'react'
import styles from './footer.module.scss'
import FooterLink from '@/components/footer/footerLink/FooterLink'
import SocialLink from '@/components/footer/socialsLink/SocialLink'
import { SocialLinks } from '@/components/footer/config'
import LogoWithText from '@/components/logoWithText/LogoWithText'
import LegalLink from '@/components/footer/legalLink/LegalLink'
import { useTranslations } from 'next-intl'

const Footer = () => {
    const t = useTranslations('footer')
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerSummary}>
                <div className={styles.footerInfo}>
                    <LogoWithText />
                    <div className={styles.footerDescription}>
                        {t('description')}
                    </div>
                    <div className={styles.socialLinksContainer}>
                        {SocialLinks.map((e, i) => (
                            <SocialLink key={i} icon={e.icon} url={e.url} />
                        ))}
                    </div>
                </div>
                <div className={styles.linksContainer}>
                    <FooterLink blockKey={'ecosystem'} />
                    <FooterLink blockKey={'about'} />
                    <FooterLink blockKey={'developers'} />
                    <FooterLink blockKey={'governance'} />
                </div>
            </div>
            <div className={styles.legalContainer}>
                <div>© 2024 UROBOROS</div>
                <div className={styles.legalLinksContainer}>
                    <LegalLink title={t('legal.term')} url={'/'} />
                    <LegalLink title={t('legal.cookie')} url={'/'} />
                </div>
            </div>
        </div>
    )
}

export default Footer

{
    /*<div className={styles.imgContainer}>*/
}
{
    /*    <Image*/
}
{
    /*        src={'/UroborosFooter.png'}*/
}
{
    /*        width={642}*/
}
{
    /*        height={642}*/
}
{
    /*        alt={'Uroboros'}*/
}
{
    /*    />*/
}
{
    /*</div>*/
}
