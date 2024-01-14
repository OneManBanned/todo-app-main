import Image from 'next/image'

function MoonIcon() {
    return (
        <Image
            src='/images/icon-moon.svg'
            alt='dark theme'
            width={200}
            height={200}
        />
    )
}

function SunIcon() {
    return (
        <Image
            src='/images/icon-sun.svg'
            alt='light theme'
            width={200}
            height={200}
        />
    )
}

export { SunIcon, MoonIcon }