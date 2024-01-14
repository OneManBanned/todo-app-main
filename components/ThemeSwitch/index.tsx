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
        <div onClick={toggleTheme}>
            <button>
                {isActive ? <SunIcon /> : <MoonIcon />}
            </button>
        </div>
    )
};

