<script>


export default {

  name: 'HelloWorld',
  props: {
    msg: String
  },
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      texto: "hola mundo desde el componente!!",
      count: 0
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++
    }
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`The initial count is ${this.count}.`)
  },
  //nombre de los componentes
  components: {
    
  }
}
</script>

<template>

  <section id="content">
    <h2 class="subheader">{{ texto }}</h2>
    <hr>

    <button @click="increment">El contador es: {{ count }}</button>
  </section>

</template>

<style scoped>
button {
  font-size: 30px;
}
</style>
