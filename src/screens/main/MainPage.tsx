'use client'
import React from 'react'
import SecureBlock from '@/screens/main/secureBlock/SecureBlock'
import BlockchainSupport from '@/screens/main/blockchainsSupport/BlockchainSupport'
import Integrate from '@/screens/main/integrate/Integrate'

const MainPage = () => {
    return (
        <main>
            <SecureBlock />
            <Integrate />

            <BlockchainSupport />
        </main>
    )
}

export default MainPage
