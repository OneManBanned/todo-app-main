import type { Metadata } from 'next'
import './globals.css'
import {jose} from './ui/fonts'

import Theme from './ui/themeProvider'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout(
  { children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className={`${jose.classname} antialiased dark:bg-dark-mb-bimg xsm:dark:bg-dark-bimg bg-light-mb-bimg xsm:bg-light-bimg bg-no-repeat`}>
        <Theme attribute='class' defaultTheme='system' enableSystem>
          {children}
        </Theme>
      </body>
    </html>
  )
}
