<template>
  <div class="main-list-wrapper">
    <ul class="main-list">
      <ListItem v-for="dream in dreams" :dream="dream" :key="dream.id"></ListItem>
    </ul>
  </div>
</template>

<script>
  import ListItem from './ListItem'
  export default {
    components: {
      ListItem
    },
    data(){
      return {
        dreams:[
          { id: 1, name: "フルスタックエンジニアになりたい"},
          { id: 2, name: "バックエンドエンジニアになりたい"},
          { id: 3, name: "フロントエンドエンジニアになりたい"},
          { id: 4, name: "データサイエンティストになりたい"},
          { id: 5, name: "スティーブジョブズになりたい"}
        ]
      }
    }
  }
</script>

<style scoped>
  .main-list-wrapper{
    background: #fff;
    width: 80%;
    margin: 2rem auto;
    border-radius: 15px;
  }
  .main-list {
    padding: 2rem;
    text-align: left;
  }
</style>
