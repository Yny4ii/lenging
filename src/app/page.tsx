import styles from './page.module.scss'
import { useTranslations } from 'next-intl'

export default function Home() {
    const t = useTranslations('HomePage')
    return (
        <div>
            <h1 className={styles.test}>{t('title')}</h1>
            <h2 className={styles.t2}>{t('subTitle')}</h2>
        </div>
    )
}
