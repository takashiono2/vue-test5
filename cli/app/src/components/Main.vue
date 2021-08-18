<template>
  <div class="main-container">
    <router-view>
      <List></List>
      <Sample></Sample>
    </router-view>
  </div>
</template>
<script>
import List from './List'
import Sample from './Sample'
export default {
  components: {
    List,
    Sample
  }
}
</script>

<!--上級#03まで
<template>
  <div class="main-container">
    <List></List>
  </div>
</template>
<script>
  import List from "./List"
  
  export default{
    components: {
      List
    }
  }
</script>
-->

<style scoped>
  .main-container {
    width: 80%;
    background: #ddd;
  }
  .main-container h1 {
    padding-top: 50px;
  }
</style>
