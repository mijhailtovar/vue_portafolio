<template src="./CreateArticle.html"></template>

<script>
import Sidebar from './Sidebar.vue';
import Global from '@/Global';
import Article from '@/models/Article';
import axios from 'axios';
//importaciones de los validadores del formulario
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
//alertas
import swal from 'sweetalert';

export default {
    name: 'EditArticle',
    components: {
        Sidebar
    },
    data() {
        return {
            url: Global.url,
            file: '',
            article: new Article('', '', null, ''),
            submitted: false,
            isEdit: true
        }
    },

    // 1. INICIALIZACIÓN DE VUELIDATE
    setup: () => ({ v$: useVuelidate() }),

    // 2. REGLAS DE VALIDACIÓN
    validations() {
        return {
            article: { // La estructura debe coincidir con el objeto en data()
                title: { required }, // El campo 'nombre' es requerido
                content: { required } // El campo 'apellidos' es requerido
            }
        }
    },

    mounted() {
        //console.log(this.article);
        var articleId = this.$route.params.id;
        this.getArticle(articleId);
    },
    methods: {
        fileChange() {
            this.file = this.$refs.file.files[0];
            console.log(this.file);
        },
        getArticle(articleId) {
            axios.get(this.url + 'article/' + articleId).then(res => {
                if (res.data.status == 'success') {
                    this.article = res.data.article;
                }
            });
        },

        save() {
            this.submitted = true;
            //id del articulo
            var articleId = this.$route.params.id;

            // Llama a la validación de todos los campos
            const isFormCorrect = this.v$.$validate();

            // Si la validación falla, nos detenemos aquí
            if (!isFormCorrect) {
                console.error('Formulario inválido');
                return;
            } else {

                // Si todo está correcto, continuamos con la lógica
                console.log("Formulario válido. Datos del usuario:");
                console.log(this.article);
                // Aquí iría tu lógica para enviar los datos a un backend, etc.

                axios.put(this.url + 'article/' + articleId, this.article)
                    .then(response => {
                        if (response.data.status == 'success') {

                            // Subida de archivo - adjuntar el fichero con un formdata
                            if (this.file != null && this.file != undefined && this.file != '') {
                                const formData = new FormData();

                                formData.append(
                                    'file0',
                                    this.file,
                                    this.file.name
                                );

                                var articleId = response.data.article._id;
                                axios.post(this.url + 'upload-image/' + articleId, formData)
                                    .then(response => {
                                        if (response.data.article) {

                                            swal(
                                                'Articulo editado',
                                                'el articulo se ha editado correctamente :)',
                                                'success'
                                            );

                                            this.article = response.data.article;
                                            this.$router.push('/articulo/' + this.article._id);
                                        } else {
                                            // mostrar alerta de error
                                            swal(
                                                'Creacion fallida',
                                                'el articulo NO se ha editado bien!!',
                                                'error'
                                            );
                                        }
                                    })
                                    .catch(error => {
                                        console.log(error);
                                    });
                            } else {
                                swal(
                                    'Articulo editado correctamente',
                                    'el articulo se ha EDITADO correctamente :)',
                                    'success'
                                );
                                // en caso de que no se envie un archivo
                                this.article = response.data.article;
                                this.$router.push('/articulo/' + this.article._id);
                            }

                        }
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }


        }
    }
}
</script>