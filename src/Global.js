// Global.js

// Vite usa import.meta.env, no process.env.
// La variable debe llamarse VITE_APP_API_URL.
var Global = {
    // Si la variable está definida en Vercel, úsala. Si no (local), usa localhost.
    // Aunque ya no usaremos el fallback de localhost si la forzamos en Vercel,
    // esta es la sintaxis correcta para leerla en un proyecto Vite.
    url: (import.meta.env.VITE_APP_API_URL || 'http://localhost:3900') + '/api/'
}

export default Global;