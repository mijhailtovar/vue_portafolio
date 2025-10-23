// Global.js

// Vue expone las variables de entorno que empiezan con VUE_APP_
// Vercel inyectará el valor a process.env.VUE_APP_API_URL durante el build.
var Global = {
    // Usamos el valor que Vue encontró durante la compilación.
    // Añadimos '/api/' al final.
    url: process.env.VUE_APP_API_URL + '/api/'
}

export default Global;