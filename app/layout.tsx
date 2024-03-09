import type { Metadata } from 'next'
import Header from "./components/Header"
import SessionProvider from '@/app/ui/SessionProvider'
import { getServerSession } from 'next-auth'
import './globals.css'
import { jose } from './ui/fonts'
import Theme from './ui/themeProvider'


export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}


export default async function RootLayout(
    { children }: { children: React.ReactNode }) {

    const session = await getServerSession();

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${jose.className}
                antialiased dark:bg-dark-mb-bimg xsm:dark:bg-dark-bimg 
                bg-light-mb-bimg xsm:bg-light-bimg bg-repeat-x`}>
                <Theme attribute='class' defaultTheme='system' enableSystem>
                    <div className=" xsm:container xsm:mx-auto mx-6 xsm:max-w-[33rem] xsm:w-5/6 py-2">
                        <SessionProvider session={session}>
                            <Header />
                            {children}
                        </SessionProvider>
                    </div>
                </Theme>
            </body>
        </html>
    )
}
