tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    dark: '#0b1120',      // Background luar
                    navy: '#0f172a',      // Primary Navbar/Footer (Slate 900)
                    card: '#1e293b',      // Card Background (Slate 800)
                    hover: '#334155',     // Card Hover (Slate 700)
                    cyan: '#06b6d4',      // Accent Cyan (Cyan 500)
                    cyanHover: '#0891b2', // Accent Cyan Hover (Cyan 600)
                    light: '#f8fafc'
                }
            }
        }
    }
}