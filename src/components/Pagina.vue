<template>
    <div class="general">
        <Slider
            texto="Pagina de pruebas"
        ></Slider>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Pagina de pruebas</h2>
                <h3>{{ id_desde_url }}</h3>
                <button @click="actualizarNombre()">Actualizar nombre</button>
                <button @click="redirigirAlBlog()">Redirigir</button>
                <h4>{{ nombre }}</h4>

            </section>
            <Sidebar></Sidebar>
            <!--limpiar flotados-->
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Slider from './Slider.vue';

export default {
    name: 'Pagina',
    components: {
        Slider,
        Sidebar
    }, 
    //hook que se ejecuta cuando se crea el componente
    created() {
        console.log('componente creado!!');
    },
    //el hook del ciclo de vida que se ejecuta cuando se monta el componente
    mounted() {
        this.id_desde_url = this.$route.params.id
    },
    //hook que se ejecuta cuando se actualiza el componente
    updated() {
        console.log('Componente actualizado!!');
    },
    destroyed() {
        console.log('Componente eliminado!!');
    },
    //el metodo que define propiedades
    data() {
        return {
            id_desde_url: null,
            nombre: 'Victor Robles'
        };
    },
    methods: {
        actualizarNombre() {
            this.nombre = 'MIJHAIL TOVAR';
            console.log(this.nombre);
        },
        redirigirAlBlog() {
            this.$router.push('/blog');
        }
    }

}
</script>