<template>
  <section>
    <Search></Search>
    <Explore></Explore>
  </section>
</template>


<script>
  import Explore from '../components/Explore.vue'
  import Search from '../components/Search.vue'
  export default {
    data() {
      return {

      }
    },
    components: { Explore, Search } 
  }
</script>