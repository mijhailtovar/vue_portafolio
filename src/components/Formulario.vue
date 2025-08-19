<template>
    <div class="general">
        <div class="center">
            <section id="content">
                <h2 class="subheader">Formulario</h2>

                <form class="mid-form" @submit.prevent="mostrarUsuario()">
                    <div class="form-group">
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" v-model="user.nombre">
                        <div v-if="v$.user.nombre.$error">
                            <span class="form-error" v-for="error in v$.user.nombre.$errors" :key="error.$uid">
                                ¡El nombre es requerido y debe tener mas de 4 letras!
                            </span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="apellidos">Apellidos</label>
                        <input type="text" name="apellidos" v-model="user.apellidos">
                        <div v-if="v$.user.apellidos.$error">
                             <span class="form-error" v-for="error in v$.user.apellidos.$errors" :key="error.$uid">
                                ¡El apellido es requerido y debe tener mas de 4 letras!
                            </span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="bio">Biografia</label>
                        <textarea name="bio" v-model="user.bio"></textarea>
                        <div v-if="v$.user.bio.$error">
                             <span class="form-error" v-for="error in v$.user.bio.$errors" :key="error.$uid">
                                ¡la biografia es requerida y debe tener mas de 10 letras!
                            </span>
                        </div>
                    </div>

                    <div class="form-group radibuttons">
                        <input type="radio" name="genero" value="hombre" checked v-model="user.genero"> Hombre
                        <input type="radio" name="genero" value="mujer" v-model="user.genero"> Mujer
                        <input type="radio" name="genero" value="otro" v-model="user.genero"> Otro
                    </div>

                    <div class="clearfix"></div>
                    <input type="submit" value="Enviar" class="btn btn-success">
                </form>

                <div class="datos" v-if="submitted && user.nombre && user.apellidos">
                     <h3>{{ user.nombre + ' ' + user.apellidos }}</h3>
                </div>

            </section>
            <Sidebar></Sidebar>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<style>
    .form-error {
        color: red;
        font-size: 1em;
        margin-top: 5px;
        display: block;
    }
</style>

<script>
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength  } from '@vuelidate/validators';
import Sidebar from './Sidebar.vue';

export default {
    name: 'Formulario',
    components: {
        Sidebar
    },
    // 1. INICIALIZACIÓN DE VUELIDATE
    setup: () => ({ v$: useVuelidate() }),

    // 2. REGLAS DE VALIDACIÓN
    validations() {
        return {
            user: { // La estructura debe coincidir con el objeto en data()
                nombre: { required, minLength: minLength(4) }, // El campo 'nombre' es requerido
                apellidos: { required, minLength: minLength(4) }, // El campo 'apellidos' es requerido
                bio: { required, minLength: minLength(10) }
            }
        }
    },

    data() {
        return {
            submitted: false, // Una bandera para saber si ya se intentó enviar
            user: {
                nombre: '',
                apellidos: '',
                bio: '',
                genero: 'hombre' // Es buena práctica inicializarlo
            }
        }
    },
    
    methods: {
        // 3. MÉTODO DE ENVÍO CON VALIDACIÓN
        async mostrarUsuario() {
            this.submitted = true;
            // Llama a la validación de todos los campos
            const isFormCorrect = await this.v$.$validate();

            // Si la validación falla, nos detenemos aquí
            if (!isFormCorrect) {
                console.error('Formulario inválido');
                return;
            }

            // Si todo está correcto, continuamos con la lógica
            console.log("Formulario válido. Datos del usuario:");
            console.log(this.user);
            // Aquí iría tu lógica para enviar los datos a un backend, etc.
        }
    }
}
</script>