import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        banner:'url(/images/banner.webp)',
        contactBg:'url(/images/contactImage.webp)',
      },
      backgroundColor: {
        overlay:'rgba(0,0,0,0.6)',
        chatBg:'#EEEEEE'
      },
      strokeWidth: {
        '2': '20px',
      }
    },
  },
  plugins: [],
}
export default config
