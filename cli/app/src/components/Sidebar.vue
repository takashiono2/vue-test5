<template>
  <div>
    <nav class="nav-list-wrapper">
      <ul class="nav-list">
        <li class="nav-list-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/sample">Sample</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<!--上級編#03まで
<template>
  <div class="sidebar-container">
    <h1>Sidebar.vue</h1>
    <NavList></NavList>
  </div>
</template>
-->
<!--
<script>
import NavList from './NavList.vue'
export default {
  name: 'Sidebar',
  components: {
    NavList
  },
}
</script>
-->

<style scoped>
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


<!--
 中級編
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