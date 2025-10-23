// Global.js

// 1. Define la URL base de tu API de Railway
const RAILWAY_URL = 'https://backendportafolionodejs-production.up.railway.app';

var Global = {
    // 2. Lee la variable de entorno VUE_APP_API_URL, y si no existe (local), usa localhost.
    // Usamos el operador || para establecer un valor por defecto.
    // Además, tu código espera que la URL termine en /api/
    url: (process.env.VUE_APP_API_URL || 'http://localhost:3900') + '/api/'
}

// Opcional: Si no quieres que use localhost para las imágenes, puedes forzar la URL de Railway
/*
var Global = {
    url: (process.env.VUE_APP_API_URL || RAILWAY_URL) + '/api/'
}
*/

export default Global;