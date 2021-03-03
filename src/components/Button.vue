<template>
  <button
    id='buttons'
  >{{ buttonName }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonName: {
      type: String,
      required: true,
      default: 'Missing value'
    }
  },
}
</script>

<style>
#buttons {
  width: 15rem;
  height: 3rem;
  margin: 2rem 1rem 0rem 0rem;
  font-size: 1rem;
}
</style>