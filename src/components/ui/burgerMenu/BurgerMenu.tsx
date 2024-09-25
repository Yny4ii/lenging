import styles from './burgerMenu.module.scss'
import React from 'react'
import BurgerIcon from '@/components/ui/burgerMenu/BurgerIcon'

const BurgerMenu = () => {
    return (
        <div className={styles.burgerMenuContainer}>
            <button>
                <BurgerIcon />
            </button>
        </div>
    )
}

export default BurgerMenu
