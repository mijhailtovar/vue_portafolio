import { createApp } from 'vue'
import App from './App.vue'
// 1. Importa las nuevas funciones de vue-router
import { createRouter, createWebHistory } from 'vue-router'

// Importa tus componentes como ya lo hacías
import LastArticles from './components/LastArticles.vue';
import MiComponente from './components/MiComponente.vue';
import HelloWorld from './components/HelloWorld.vue';
import Blog from './components/Blog.vue';
import Formulario from './components/Formulario.vue';
//formulario de prueba
import Formulario_2 from './components/Formulario_2.vue';

import Pagina from './components/Pagina.vue';
import ErrorComponent from './components/ErrorComponent.vue';
import Peliculas from './components/Peliculas.vue';
//importa moment para las fechas
import moment from 'moment';
import Search from './components/Search.vue';
import Redirect from './components/Redirect.vue';
import Article from './components/Article.vue';
import CreateArticle from './components/CreateArticle.vue';
import EditArticle from './components/EditArticle.vue';


// 2. Define tus rutas (esto se mantiene casi igual)
const routes = [
    { path: '/home', component: LastArticles },
    { path: '/blog', component: Blog },
    { path: '/articulo/:id', name: 'article' ,component: Article },
    { path: '/editar/:id', name: 'edit' ,component: EditArticle },
    { path: '/crear-articulo', name: 'create' ,component: CreateArticle },
    { path: '/formulario', component: Formulario },
    { path: '/pagina/:id?', name:'pagina', component: Pagina },
    { path: '/peliculas', name:'peliculas', component: Peliculas },
    {path: '/buscador/:searchString', component: Search},
    { path: '/redirect/:searchString', component: Redirect },

    { path: '/ultimos-articulos', component: LastArticles },
    { path: '/mi-componente', component: MiComponente },
    { path: '/hola-mundo', component: HelloWorld },
    { path: '/', component: LastArticles },
    //pagina 404 o pagina de error
    { path: '/:pathMatch(.*)*', name: 'not-found', component: ErrorComponent },
    

];

// 3. Crea la instancia del router con las nuevas funciones
const router = createRouter({
    history: createWebHistory(), // Esto reemplaza al antiguo `mode: 'history'`
    routes, // Tu arreglo de rutas
});

// 4. Crea la aplicación, usa el router y móntala
const app = createApp(App);
app.use(router); // Así se instalan los plugins en Vue 3
app.config.globalProperties.$moment = moment; //configura moment como una propiedad Global
app.mount('#app');