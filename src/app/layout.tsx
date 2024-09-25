import type { Metadata } from 'next'
import {
    rubik,
    sharpGroteskBook20,
    sharpGroteskMedium20,
    sharpGroteskMedium25,
} from '@/fonts/fonts'
import '../styles/global.scss'
import { getLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import Header from '@/components/header/Header'

export const metadata: Metadata = {
    title: 'UROBOROS',
    description: 'A Crypto Wallet For Everything Onchain',
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const locale = await getLocale()
    const messages = await getMessages()
    return (
        <html lang={locale}>
            <body
                className={`${sharpGroteskMedium20.variable}
                ${sharpGroteskBook20.variable}
                ${sharpGroteskMedium25.variable}
                ${rubik.className}
                `}
            >
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
