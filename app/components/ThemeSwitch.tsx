"use client"

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@/app/ui/ThemeIcons';
import { useState, useEffect } from 'react'

export default function ThemeSwitch() {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    const isActive = theme === "light";

    return (
        <div onClick={toggleTheme} className='flex items-center'>
            <button className='w-5/6 items-center xsm:w-full rounded-full xsm:size-7 size-5 outline-offset-4 outline-blue dark:outline-blue'>
                {isActive ? <MoonIcon /> : <SunIcon />}
            </button>
        </div>
    )
};

