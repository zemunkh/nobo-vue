<template>
  <div id="app">
    <header id="nav">
        <NavNonAuth v-if="!currentUser"></NavNonAuth>
        <Navigation v-if="currentUser"></Navigation>
    </header>

    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

    
    <footer class="footer">
        <span class="text-muted">@2020 nobo solution .llc</span>
    </footer>

  </div>
  
</template>

<script>
  import { mapState } from 'vuex'
  import NavNonAuth   from './components/NavNonAuth.vue'
  import Navigation   from './components/Navigation.vue'


export default {
    data() {
      return {

      }
    },
    components: { NavNonAuth, Navigation },
    computed: {
      ...mapState(['currentUser'])
    }

}
</script>

<style lang="scss" scoped>
   @import './assets/scss/app.scss';

   .fade-enter-active, .fade-leave-active {
     transition: all .2s ease
   }
   .fade-enter, .fade-leave-active {
     opacity: 0;
   }
</style>