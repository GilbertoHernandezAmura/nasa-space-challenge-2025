import defaultTheme from 'tailwindcss/defaultTheme';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
    // Asegúrate de que esta configuración de contenido apunte a tus archivos Astro/HTML/etc.
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                // Incorporamos Inter y mantenemos las fuentes por defecto como fallback
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                // Definimos el color 'nasa-blue' como un color extendido de Tailwind
                'nasa-blue': '#1F4599',
            },
        }
    },
    // Incluir el plugin de DaisyUI
    plugins: [daisyui],

    // Configuración específica de DaisyUI
    daisyui: {
        // Establece el tema 'light' y personaliza los colores de DaisyUI
        themes: [
            {
                light: {
                    // Estos colores provienen de la configuración original del HTML
                    "primary": "#1F4599", // Nuestro azul principal (nasa-blue)
                    "secondary": "#00d4ff", // Un color brillante de acento
                    "accent": "#4d79ff",
                    "neutral": "#3d4451",
                    "base-100": "#ffffff", // Fondo blanco
                    // El resto de los colores del tema 'light' se mantienen por defecto
                    "info": "#00c4ff",
                    "success": "#00c765",
                    "warning": "#e48f00",
                    "error": "#ff6879",
                },
            },
        ],
        // Opcional: añade directivas para que DaisyUI funcione mejor
        darkTheme: "light", // Asegura que siempre use el tema light si no especificas más
        logs: false,
    },
};