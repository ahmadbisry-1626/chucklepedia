/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
                black: {
                    DEFAULT: '#171717',
                    'mate': '#212121',
                    'gray': '#303030'
                },
                primary: '#20e8d7'
            }
    	}
    },
    plugins: [require("tailwindcss-animate")],
}
