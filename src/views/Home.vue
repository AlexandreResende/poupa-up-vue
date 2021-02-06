<template>
  <div id='container'>
    <Aside></Aside>
    <div id='content'>

    </div>
  </div>
</template>

<script>
import Aside from '../components/Aside'

export default {
  components: { Aside },
  name: 'Home',
  data() {},
  methods: {}
}
</script>

<style>
html, body {
  margin: 0;
}

#aside {
  position: absolute;
  height: 100%;
  width: 15%;
  background-color: #000000;
  opacity: 50%;
}
</style>