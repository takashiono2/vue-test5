<template>
  <div class="main-container">
    <List></List>
  </div>
</template>

<script>
import List from './List'
  export default {
    components: {
      List
    }
  }
</script>

<style>
  .main-container {
    width: 80%;
    background: #ddd;
  }
  .main-container h1 {
    padding-top: 50px;
  }
</style>