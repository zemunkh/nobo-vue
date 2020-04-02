<template>
  <section>
    <Landing></Landing>
    <Explore></Explore>
  </section>
</template>


<script>
  import Landing from '../components/Landing.vue'
  import Explore from '../components/Explore.vue'

  export default {
    data() {
      return {

      }
    },
    components: { Landing, Explore }
  }
</script>