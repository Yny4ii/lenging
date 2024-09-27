import React from 'react'
import styles from './blur.module.scss'

interface BlurProps {
    top?: number
    left?: number
    right?: number
    bottom?: number
    zIndex?: number
}

const Blur = ({ zIndex, bottom, left, right, top }: BlurProps) => {
    const dynamicStyles = {
        top: top !== undefined ? `${top}px` : 'auto',
        left: left !== undefined ? `${left}px` : 'auto',
        right: right !== undefined ? `${right}px` : 'auto',
        bottom: bottom !== undefined ? `${bottom}px` : 'auto',
        zIndex: zIndex !== undefined ? `${zIndex}` : 1,
    }
    return (
        <div className={styles.blurContainer} style={dynamicStyles}>
            <svg
                width="1411"
                height="619"
                viewBox="0 0 1411 619"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g filter="url(#filter0_f_94_3572)">
                    <ellipse
                        cx="705.5"
                        cy="296.5"
                        rx="585.5"
                        ry="202.5"
                        fill="#00282E"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_f_94_3572"
                        x="0"
                        y="-26"
                        width="1411"
                        height="645"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
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
                            result="effect1_foregroundBlur_94_3572"
                        />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default Blur
