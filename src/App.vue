<template>
  <Login/>
</template>

<script>
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body {
  padding-top: 0px !important;
  margin-top: 0px !important;
}
</style>
