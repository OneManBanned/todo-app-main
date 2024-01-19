import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        colors: {
            'dark': '#25273c',
            'white': '#ffffff',
            'white-border': '#e4e5f1',
            'dark-border': '#4d5066',
            'white-text': '#484b6a',
            'dark-text': '#cacde8',
            'blue-splash': '#3a7bfd',
            'gradient-one': '#57ddff',
            'gradient-two': '#c058f3',
        },
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
