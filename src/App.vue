/**
el props setup en el script es importante, cambia la sintaxis a 
funciones definidas del Api y por lo tanto no se puede usar las funciones
data, methods o mounted
*/

<script>
import HelloWorld from './components/HelloWorld.vue'
import MiComponente from './components/MiComponente.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default{
  name: 'app',
  components: {
    HelloWorld,
    MiComponente,
    HeaderComponent,
    FooterComponent
  }
}

</script>

<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    
    <!--
      <LastArticles></LastArticles>
    -->
      <router-view></router-view>

      
    <FooterComponent></FooterComponent>
  </div>
</template>

<style>
/* Estilos del componente */
@import './assets/css/styles.css';
</style>