import React from 'react'
import BurgerMenu from '@/components/ui/burgerMenu/BurgerMenu'
import JoinWaitList from '@/components/ui/buttons/joinWaitList/JoinWaitList'
import styles from './header.module.scss'
import LogoWithText from '@/components/logoWithText/LogoWithText'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <LogoWithText fill={'#2EFAEE'} />
            <JoinWaitList />
            <BurgerMenu />
        </header>
    )
}

export default Header
