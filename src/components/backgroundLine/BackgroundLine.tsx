import React from 'react'
import styles from './backgroundLine.module.scss'

interface BackgroundLineProps {
    top?: number
    left?: number
    right?: number
    bottom?: number
    zIndex?: number
    deg?: number
}

const BackgroundLine = ({
    deg,
    bottom,
    top,
    zIndex,
    left,
    right,
}: BackgroundLineProps) => {
    const dynamicStyles = {
        top: top !== undefined ? `${top}px` : undefined,
        left: left !== undefined ? `${left}px` : undefined,
        right: right !== undefined ? `${right}px` : undefined,
        bottom: bottom !== undefined ? `${bottom}px` : undefined,
        zIndex: zIndex !== undefined ? zIndex : 0,
        transform: deg !== undefined ? `rotate(${deg}deg)` : 'rotate(0deg)',
    }
    return (
        <svg
            width="2619"
            height="1846"
            viewBox="0 0 2619 1846"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.lineContainer}
            style={dynamicStyles}
        >
            <g filter="url(#filter0_f_94_2964)">
                <path
                    d="M357 605L1185.5 1433.5L2262 357"
                    stroke="#2EFAEE"
                    strokeWidth="159"
                />
            </g>
            <defs>
                <filter
                    id="filter0_f_94_2964"
                    x="0.785156"
                    y="0.784912"
                    width="2617.43"
                    height="1845.15"
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
                        stdDeviation="150"
                        result="effect1_foregroundBlur_94_2964"
                    />
                </filter>
            </defs>
        </svg>
    )
}

export default BackgroundLine
