/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                'deep-blue': '#07041a',
                'deep-blue-2': '#11102b',
                blue: '#2CBCE9',
                red: '#A12568',
                yellow: '#FEC260',
                grey: '#ededed',
                'dark-grey': '#757575',
                'opaque-black': 'rgba(0,0,0,0.35)'
            },
            boxShadow: {
                'custom-blue': '6px 7px 41px -3px rgba(2, 203, 206, 0.46)'
            },
            borderColor: {
                rainblue: 'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)'
            },
            backgroundImage: (theme) => ({
                'gradient-rainbow':
            'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',

                'gradient-rainblue':
            'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)'
            }),
            fontFamily: {
                playfair: ['Playfair Display', 'serif'],
                opensans: ['Open Sans', 'sans-serif'],
                quicksand: ['Quicksand', 'sans-serif']
            },
            content: {
                brush: "url('/brush.png')"
            }
        },
        screens: {
            xs: '480px',
            ss: '620px',
            sm: '768px',
            md: '1060px',
            lg: '1200px',
            xl: '1700px'
        }
    },
    plugins: []
}
