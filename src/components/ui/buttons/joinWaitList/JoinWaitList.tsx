import React from 'react'
import Link from 'next/link'
import styles from './joinWaitList.module.scss'
import {useTranslations} from "next-intl";

const JoinWaitList = () => {
    const t = useTranslations('Header')
    return <Link href={'#'} className={styles.joinWaitListContainer}>{t("joinWaitList")}</Link>
}

export default JoinWaitList
