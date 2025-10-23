var Global = {
    // Lee la variable de entorno, y si no existe (local), usa localhost
    // Vercel inyectará VUE_APP_API_URL
    url: process.env.VUE_APP_API_URL || 'http://localhost:3900'
}

// Asegúrate de que la URL termine en /api/ para mantener la consistencia en tu código
Global.url = Global.url + '/api/';

export default Global;