import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      backgroundImage: {
        explosion: 'url("https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782851/bg-explosion_dbwtig.png")',
        circles: 'url("https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782850/circles_t5aajh.png")',
        circleStar: 'url("https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782849/circle-star_zhmwoh.svg")',
        site: 'url("https://res.cloudinary.com/dh9jli5uo/image/upload/v1692782853/site-bg_wiyfs9.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [],
}
export default config
