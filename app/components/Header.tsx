import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

export default function Header() {
    return (
        <header >
            <div className="absolute top-0 right-0">
                <menu className="flex flex-row">
                    <li><Link href="/register">Register</Link></li>
                    <li><Link href="/login">Login</Link></li>
                </menu>
            </div>
            <div className="flex flex-row justify-between">
                <h1 className="text-2xl font-bold tracking-[10px] text-white xsm:text-4xl tracking-[17px]">TODO</h1>
                <ThemeSwitch />
            </div>
        </header>
    )
}
