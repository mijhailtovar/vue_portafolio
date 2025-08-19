<template>
    <div class="general">

        <div class="center">
            <section id="content">
                <article class="article-item article-detail" v-if="article">
                    <div class="image-wrap" v-if="article.image">
                        <img :src="url + 'get-image/' + article.image" :alt="article.title">

                    </div>

                    <h1 class="subheader">{{ article.title }}</h1>
                    <span class="date">
                        {{ $moment(article.date).format('dddd, MMMM, YYYY') }}
                    </span>

                    <p>{{ article.content }}</p>

                    <!--limpiar flotados-->
                    <div class="clearfix"></div>

                    <router-link :to="'/editar/' + article._id" class="btn btn-warning">Editar</router-link>
                    <a @click="deleteArticle(article._id)" class="btn btn-danger">Eliminar</a>

                </article>

            </section>
            <Sidebar></Sidebar>
            <!--limpiar flotados-->
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>

import Sidebar from './Sidebar.vue';
import Global from '@/Global';
import axios from 'axios';
import swal from 'sweetalert';

export default {
    name: 'Article',
    components: {
        Sidebar
    },
    data() {
        return {
            url: Global.url,
            article: null
        }
    },
    mounted() {
        var articleId = this.$route.params.id;
        this.getArticle(articleId);
    },
    methods: {
        getArticle(articleId) {
            axios.get(this.url + 'article/' + articleId).then(res => {
                if (res.data.status == 'success') {
                    this.article = res.data.article;
                }
            });
        },
        deleteArticle(articleId) {

            swal({
                title: "¿Estas seguro de querer borrar el articulo?",
                text: "Si lo borras no podras recuperarlo",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {

                        axios.delete(this.url + 'article/' + articleId)
                            .then(response => {
                                swal(
                                    'Articulo borrado!!',
                                    'El articulo se ha borrado correctamente',
                                    'info'
                                );

                                this.$router.push('/blog');
                            });

                    } else {
                        swal("UFFF casi!!, no  has borrado nada");
                    }
                });



        }
    }
}
</script>
