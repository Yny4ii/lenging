import WalletIcon from '@/screens/main/advantages/advantagesSlider/icons/WalletIcon'
import ImportIcon from '@/screens/main/advantages/advantagesSlider/icons/ImportIcon'
import MevIcon from '@/screens/main/advantages/advantagesSlider/icons/MevIcon'
import NftIcon from '@/screens/main/advantages/advantagesSlider/icons/NftIcon'
import ControlledIcon from '@/screens/main/advantages/advantagesSlider/icons/ControlledIcon'
import NoGasIcon from '@/screens/main/advantages/advantagesSlider/icons/NoGasIcon'
import SwapIcon from '@/screens/main/advantages/advantagesSlider/icons/SwapIcon'

export const AdvantagesCardArray = [
    {
        icon: <WalletIcon />,
        cardName: 'wallet',
    },
    {
        icon: <NoGasIcon />,
        cardName: 'nogas',
    },
    {
        icon: <SwapIcon />,
        cardName: 'swap',
    },
    {
        icon: <ControlledIcon />,
        cardName: 'controlled',
    },
    {
        icon: <NftIcon />,
        cardName: 'nft',
    },
    {
        icon: <MevIcon />,
        cardName: 'mev',
    },
    {
        icon: <ImportIcon />,
        cardName: 'import',
    },
]
