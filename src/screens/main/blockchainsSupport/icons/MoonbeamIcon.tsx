import React from 'react'

const MoonbeamIcon = () => {
    return (
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <circle cx="22" cy="22" r="22" fill="#0E1024" />
            <rect
                x="3"
                y="6.67773"
                width="35"
                height="29"
                fill="url(#pattern0_2008_82)"
            />
            <defs>
                <pattern
                    id="pattern0_2008_82"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                >
                    <use
                        xlinkHref="#image0_2008_82"
                        transform="matrix(0.0172414 0 0 0.0208086 0 -0.00980975)"
                    />
                </pattern>
                <image
                    id="image0_2008_82"
                    width="58"
                    height="49"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    )
}

export default MoonbeamIcon
