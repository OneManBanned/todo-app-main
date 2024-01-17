import Image from 'next/image'
import Sun from '../../public/images/icon-sun.svg'
import Moon from '../../public/images/icon-moon.svg'

function MoonIcon() {
    return (
        <Image
            src={Moon}
            alt='dark theme'
        />
    )
}

function SunIcon() {
    return (
        <Image
            src={Sun}
            alt='light theme'
        />
    )
}

export { SunIcon, MoonIcon }
