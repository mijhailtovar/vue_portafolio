<template>
    <div class="general">
        <Slider texto="Bienvenido al curso de Vue de mijhail tovar" home="true"></Slider>
        <div class="center">
            <section id="content">
                <h2 class="subheader">Ultimos articulos</h2>


                <!--listado de articulos-->
                <div id="articles">
                    <Articles v-bind:articles="articles"></Articles>

                </div>

            </section>
            <Sidebar></Sidebar>
            <!--limpiar flotados-->
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Sidebar from './Sidebar.vue';
import Slider from './Slider.vue';
import Articles from './Articles.vue';
import Global from '@/Global';

export default {
    name: 'LastArticles',
    components: {
        Slider,
        Sidebar,
        Articles
    },
    mounted() {
        this.getLastArticles();
    },
    data() {
        return {
            url: Global.url,
            articles: null
        }
    },
    methods: {
        getLastArticles() {
            axios.get(this.url + 'articles/true')
                .then(res => {
                    if (res.data.status == 'success') {
                        this.articles = res.data.articles;

                        console.log(this.articles);
                    }
                    //console.log(res);
                })
        }
    }
}
</script>