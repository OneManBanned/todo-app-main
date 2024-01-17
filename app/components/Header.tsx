import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
    return (
        <header className="flex flex-row justify-between">
            <h1 className="text-2xl font-bold tracking-[10px] text-white xsm:text-4xl tracking-[17px]">TODO</h1>
            <ThemeSwitch />
        </header>
    )
}
