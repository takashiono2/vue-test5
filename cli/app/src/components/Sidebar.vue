<template>
  <div class="sidebar-container">
    <h1>Sidebar.vue</h1>
    <NavList></NavList>
  </div>
</template>

<script>
import NavList from './NavList.vue'
export default {
  name: 'Sidebar',
  components: {
    NavList
  },
}
</script>

<style>
  .sidebar-container {
    width: 20%;
    background: #fff;
  }
  .sidebar-container h1 {
    border-bottom: 1px solid #40b983;
    padding: 20px 0;
    color: #40b983;
  }
</style>

<!-- 中級編
<template>
  <div class="sidebar-container">
    <h1>Sidebar.vue</h1>
  </div>
</template>
<style>
  .sidebar-container {
    width: 20%;
    background: #fff;
  }
  .sidebar-container h1 {
    padding-top: 50px;
  }
</style>
-->