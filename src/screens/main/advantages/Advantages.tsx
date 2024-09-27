import React from 'react'
import styles from './advantages.module.scss'
import AdvantagesSlider from '@/screens/main/advantages/advantagesSlider/AdvantagesSlider'
import BackgroundLine from '@/components/backgroundLine/BackgroundLine'

const Advantages = () => {
    return (
        <div className={styles.advantagesContainer}>
            <AdvantagesSlider />
            <BackgroundLine top={-200} left={-500} deg={-180} />
        </div>
    )
}

export default Advantages
