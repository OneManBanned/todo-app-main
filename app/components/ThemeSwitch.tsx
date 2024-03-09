"use client"

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@/app/ui/ThemeIcons';
import { useState, useEffect } from 'react'

export default function ThemeSwitch() {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        const checkLocalStorage = localStorage.getItem("theme");
        if (!checkLocalStorage) {
            const checkDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
            setTheme(checkDarkTheme ? "dark" : "light");
        }
    }, [setTheme]);

    if (!mounted) {
        return null
    }

    const isActive = theme === "light";

    return (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className='flex items-center'>
            <button className='w-5/6 items-center xsm:w-full rounded-full xsm:size-7 size-5 outline-offset-4 outline-blue dark:outline-blue'>
                {isActive ? <MoonIcon /> : <SunIcon />}
            </button>
        </div>
    )
};

