<template>
    <div class="general">

        <div class="center">
            <section id="content">
                <h1 class="subheader">Peliculas</h1>

                <div class="mis-datos" v-if="misDatos">
                    <p v-html="misDatos"></p>
                    <br>
                    {{ concatenaYear(mayusculas(email), 'este es el mejor año') }}
                </div>

                <div class="favorita" v-if="favorita">
                    La pelicula marcada es:
                    <h3>{{ favorita.title }}</h3>
                </div>

                <!--listado de articulos-->
                <div id="articles">
                    <div v-for="pelicula in peliculasMayuscula" v-bind:key="pelicula.title">
                        <Pelicula v-bind:pelicula="pelicula" v-on:favorita="GestionarFavorita(pelicula)"></Pelicula>
                    </div>

                </div>

            </section>
            <Sidebar></Sidebar>
            <!--limpiar flotados-->
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Pelicula from './pelicula.vue';

export default {
    name: 'Peliculas',
    components: {
        Pelicula,
        Sidebar
    },
    // CORRECTO EN VUE 3
    methods: {
        GestionarFavorita(pelicula) {
            this.favorita = pelicula;
        },
        // Funciones movidas aquí
        mayusculas(value) {
            return value.toUpperCase();
        },
        concatenaYear(value, message) {
            var date = new Date();
            return value + ' ' + date.getFullYear() + ' ' + message;
        }
    },
    computed: {
        peliculasMayuscula() {
            var peliculasMod = this.peliculas;

            console.log(peliculasMod[0].title);
            for (let i = 0; i < this.peliculas.length; i++) {
                peliculasMod[i].title = peliculasMod[i].title.toUpperCase();
            }

            return peliculasMod;
        },
        misDatos() {
            return this.nombre + ' ' + this.apellido + '<br/>' + '<strong>Email</strong>: ' + this.email;
        }
    },

    data() {
        return {
            nombre: 'mijhail',
            apellido: 'tovar',
            email: 'mijhailtovar@gmail.com',
            favorita: null,
            peliculas: [
                { title: 'Batman vs Superman', year: 2017, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSPHsAg9qO7fesLRuks53bVvl7TYLrhmmxhg&s' },
                { title: 'Los Vengadores EndGame', year: 2020, image: 'https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/7b350a2f-0b3e-4033-8125-34c4d67e3bbe/compose?aspectRatio=1.78&format=webp&width=1200' },
                { title: 'Looper', year: 2006, image: "https://m.media-amazon.com/images/S/pv-target-images/f3946a55bbec57b041183ee0eb7121192769c96b950529bc75e4e0573d715eaa._UR1920,1080_.jpg" },
                { title: 'El niño y la garza', year: 2023, image: 'https://www.laprensagrafica.com/__export/1704344540116/sites/prensagrafica/img/2024/01/03/ffam04012024xxgarza262.jpg_423682103.jpg' }
            ]
        }
    }
}
</script>