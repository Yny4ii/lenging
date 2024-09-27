import React from 'react'
import SecureBlock from '@/screens/main/secureBlock/SecureBlock'
import BlockchainSupport from '@/screens/main/blockchainsSupport/BlockchainSupport'
import Integrate from '@/screens/main/integrate/Integrate'
import Advantages from '@/screens/main/advantages/Advantages'
import HeroSection from '@/screens/main/heroSection/HeroSection'

const MainPage = () => {
    return (
        <main>
            <HeroSection />
            <Advantages />
            <SecureBlock />
            <Integrate />
            <BlockchainSupport />
        </main>
    )
}

export default MainPage
