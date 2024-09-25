import React from 'react'
import styles from './advantages.module.scss'
import AdvantagesSlider from '@/screens/main/advantages/advantagesSlider/AdvantagesSlider'

const Advantages = () => {
    return (
        <div className={styles.advantagesContainer}>
            <AdvantagesSlider />
        </div>
    )
}

export default Advantages
