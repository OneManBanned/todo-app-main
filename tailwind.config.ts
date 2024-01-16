import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            screens: {
                'xsm': '375px',
            },
            backgroundImage: {
                'light-bimg': "url(/images/bg-desktop-light.jpg)",
                'dark-bimg': "url(/images/bg-desktop-dark.jpg)",
                'light-mb-bimg': "url(/images/bg-mobile-light.jpg)",
                'dark-mb-bimg': "url(/images/bg-mobile-dark.jpg)",
            },

        },
    },
    plugins: [],
}
export default config
