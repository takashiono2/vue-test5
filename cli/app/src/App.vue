<template>
  <div id="app">
    <Sidebar></Sidebar>
    <Main></Main>
  </div>
</template>

<script>
  import Sidebar from "./components/Sidebar.vue"
  import Main from "./components/Main.vue"
  
  export default {
    name: 'App',
    components: {
      Sidebar,
      Main
    }
  }
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  min-height: 100vh;
}
</style>

<!--中級#7
<template>
  <div id="app">
    <NinjaCode text="Hello NinjaCode!"></NinjaCode>
  </div>
</template>

<script>
  import NinjaCode from "./components/NinjaCode.vue"
  export default {
    components: {
      NinjaCode
    }
  }
</script>
-->

<!--#6
<template>
  <div id="app">
    <NinjaCode></NinjaCode>
  </div>
</template>

<script>
  import NinjaCode from "./components/NinjaCode.vue"
  export default {
    components: {
      NinjaCode
    }
  }
</script>

<style>
</style>
-->