import React from 'react'
import styles from './footer.module.scss'
import FooterLink from '@/components/footer/footerLink/FooterLink'
import SocialLink from '@/components/footer/socialsLink/SocialLink'
import { SocialLinks } from '@/components/footer/config'
import LogoWithText from '@/components/logoWithText/LogoWithText'
import LegalLink from '@/components/footer/legalLink/LegalLink'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerSummary}>
                <div className={styles.footerInfo}>
                    <LogoWithText />
                    <div className={styles.footerDescription}>
                        UROBOROS one place for all your crypto. Securely store,
                        swap, and send Crypto and NFTs across 300+ blockchains.
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
                    <LegalLink title={'Term of use'} url={'/'} />
                    <LegalLink title={'Cookie Preference'} url={'/'} />
                    <LegalLink title={'Cookie Preference'} url={'/'} />
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
