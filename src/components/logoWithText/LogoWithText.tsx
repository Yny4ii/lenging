import React from 'react'
import Logo from '@/components/icons/Logo'
import Link from 'next/link'
import styles from './logoWithText.module.scss'

interface LogoWithTextProps {
    fill?: string
}

const LogoWithText = ({ fill }: LogoWithTextProps) => {
    return (
        <Link href={'/'} className={styles.logoWithTextContainer}>
            <Logo fill={fill} />
            <span style={{ color: fill ? fill : '#eee' }}>UROBOROS</span>
        </Link>
    )
}

export default LogoWithText
