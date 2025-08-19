<template>
    <section id="content">
        <h2 class="subheader">{{ titulo }}</h2>
        <hr>
        <h1>este es MiComponente</h1>
        <h2>{{ subtitulo }}</h2>
        <hr>

        <h2>Reactividad</h2>
        <input type="text" v-model="nombre">
        Mi nombre es : <strong>{{ nombre }}</strong> 

        <h2>Directivas condicionales</h2>
        <input type="number" v-model="edad">
        Mi edad es : <strong>{{ edad }}</strong> 

        <!--condicionales en Vue-->
        <p class="alert-success-provisional" v-if="edad && edad >= 18 && edad < 65">
            Eres mayor de edad!!
        </p>

        <p class="alert-purple-provisional" v-else-if="edad && edad >= 65">
            Eres de avanzada edad!!
        </p>

        <p class="alert-danger-provisional" v-else>
            Eres menor de edad!!
        </p>

        <h2>Directiva iterativa</h2>
        <ol>
            <li v-for="pelicula in peliculas" :key="pelicula">{{ pelicula }}</li>
        </ol>

        <!--se muestra todo lo que esta dentro del data
        <pre>
            {{ $data }}
        </pre>
        -->

    </section>
</template>

<script>
export default{
    name: 'MiComponente',
    data(){
        return{
            titulo: 'Mi Componente',
            subtitulo: 'soy el subtitulo de mi componente',
            nombre: '',
            edad: '18',
            peliculas: ['Batman vs Superam', 'El señor de los anillos', 'Spiderman', 'Anabelle']
        }
    }
}
</script>