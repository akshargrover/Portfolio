/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#12131b',
                surface: {
                    DEFAULT: '#1f1f27',
                    dim: '#12131b',
                    bright: '#383842',
                    low: '#1a1b23',
                    high: '#292932',
                    highest: '#34343d',
                },
                primary: {
                    DEFAULT: '#bec2ff',
                    container: '#5865f2', // blurple accent
                },
                inverse: {
                    primary: '#3f4cda',
                    surface: '#e3e1ed',
                    onSurface: '#2f3039'
                },
                secondary: {
                    DEFAULT: '#c4c6ce',
                    container: '#46494f'
                },
                text: {
                    main: '#e3e1ed',
                    variant: '#c6c5d7',
                    muted: '#8f8fa0'
                },
                discord: {
                    serverRail: '#12131b',
                    channelSidebar: '#1a1b23',
                    mainContent: '#1f1f27',
                    memberSidebar: '#292932',
                    hover: '#34343d',
                    accent: '#5865f2',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            spacing: {
                serverList: '72px',
                sidebar: '240px',
                memberList: '240px',
                gutter: '16px',
                itemGap: '8px',
                safeMargin: '20px'
            }
        },
    },
    plugins: [],
}
