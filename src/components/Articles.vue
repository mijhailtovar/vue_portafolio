<template>
    <section id="articles-component">
        <!--
        <div>
            <p>{{ $moment(FechaActual).format('YYYY-MM-DD') }}</p>
        </div>
        -->

        <div id="articles-list" v-if="articles && articles.length >= 1">
            <article class="article-item" v-for="article in articles" :key="article._id">
                <div class="image-wrap">
                    <img :src="url + 'get-image/' + article.image" :alt="article.title" v-if="article.image">
                    <img src="../assets/images/default.jpg" :alt="article.title" v-if="!article.image">
                </div>

                <h2>
                    <router-link :to="{ name: 'article', params: { id: article._id } }">
                        {{ article.title }}
                    </router-link>
                </h2>


                <span class="date">
                    {{ $moment(article.date).format('dddd, MMMM, YYYY') }}
                </span>
                <router-link :to="{ name: 'article', params: { id: article._id } }">
                    Leer mas
                </router-link>
                <!--limpiar flotados-->
                <div class="clearfix"></div>
            </article>
        </div>
        <div v-else-if="articles && articles.length < 1">
            NO hay articulos para mostrar
        </div>
        <div v-else>
            <h1>Cargando...</h1>
        </div>
    </section>

</template>

<script>
import Global from '@/Global';
import moment from 'moment';

export default {
    name: 'Articles',
    setup() {
        /*
        const date = new Date();
        const formattedDate = moment(date).format('YYYY-MM-DD HH:mm:ss');
        return { formattedDate };
        */
    },
    props: ['articles'],
    data() {
        return {
            url: Global.url,
            //FechaActual: new Date()
        }
    },
}
</script>