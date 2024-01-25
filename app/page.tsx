'use client'

import { SessionProvider } from "next-auth/react"

export default function Home() {


    return (
    <SessionProvider session={session}>
    <h2>Hello World</h2>
    </SessionProvider>
    )
}
