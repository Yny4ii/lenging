import React from 'react'
import styles from './blur.module.scss'

// interface BlurProps {
//     x: number | string
//     y: number | string
//     zIndex: number
// }

const Blur = () => {
    return (
        <div className={styles.blurContainer}>
            <svg
                width="1411"
                height="252"
                viewBox="0 0 1411 252"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_f_95_7512)">
                    <ellipse
                        cx="705.5"
                        cy="322.5"
                        rx="585.5"
                        ry="202.5"
                        fill="#00282E"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_95_7512"
                        x="0"
                        y="0"
                        width="1411"
                        height="645"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feGaussianBlur
                            stdDeviation="60"
                            result="effect1_foregroundBlur_95_7512"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default Blur
