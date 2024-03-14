'use client'

import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import { signIn, signOut, useSession } from 'next-auth/react'

function AuthButton() {
    const { data: session } = useSession();

    if (session) {
        return <button className="text-dark dark:text-white mr-4" onClick={() => signOut()}>Sign out</button>
    }
    return (
        <>
            <button className="text-dark dark:text-white mr-4" onClick={() => signIn("Credentials", {callbackUrl: '/'})}>Sign in</button>
            <Link className="text-dark dark:text-white mr-4" href='/register'>Register</Link>
        </>
    )

}


export default function Header() {
    return (
        <header  className="mt-10 xsm:mt-16">
            <div className="absolute top-0 right-0">
                <menu className="flex flex-row">
                    <li><AuthButton /></li>
                </menu>
            </div>
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-bold tracking-[10px] text-white xsm:text-4xl tracking-[17px]"><Link href='/'>TODO</Link></h1>
                <ThemeSwitch />
            </div>
        </header>
    )
}
