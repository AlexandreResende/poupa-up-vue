<template>
  <div id='aside'>
    <ul>
      <li>Home</li>
      <li>Incomes</li>
      <li>Expenses</li>
      <li>Graphs</li>
      <li>Monthly Report</li>
      <li>Import CSV</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Aside'
}
</script>

<style>
#aside {
  position: absolute;
  height: 100%;
  width: 15%;
  background-color: #000000;
  opacity: 50%;
}

ul {
  list-style-type: none;
  font-size: 1.5rem;
  margin-top: 15rem;
  margin-left: -3rem;
}

li {
  padding: 1rem;
  color: red;
}
</style>