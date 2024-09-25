import localFont from 'next/font/local'
import { Rubik } from 'next/font/google'

export const sharpGroteskBook20 = localFont({
    src: './SharpGrotesk-Book20.otf',
    style: 'normal',
    variable: '--font-sharp-groteskB20',
})

export const sharpGroteskMedium20 = localFont({
    src: './SharpGrotesk-Medium20.otf',
    style: 'normal',
    variable: '--font-sharp-groteskM20',
})
export const sharpGroteskMedium25 = localFont({
    src: './SharpGrotesk-Medium25.otf',
    style: 'normal',
    variable: '--font-sharp-groteskM25',
})

export const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' })
