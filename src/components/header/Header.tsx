import React from 'react'
import BurgerMenu from '@/components/ui/burgerMenu/BurgerMenu'
import JoinWaitList from '@/components/ui/buttons/joinWaitList/JoinWaitList'
import Link from 'next/link'
import Logo from '@/components/icons/Logo'
import styles from './header.module.scss'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <Link href={'/'} className={styles.logoContainer}>
                <Logo />
                <span>UROBOROS</span>
            </Link>
            <JoinWaitList />
            <BurgerMenu />
        </header>
    )
}

export default Header
