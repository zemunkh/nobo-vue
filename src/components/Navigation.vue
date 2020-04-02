<template>
  <section>
    <header>
      <div class="col1">
        <router-link to="home"><img src="../assets/nobo_small.svg" alt="Nobo logo"></router-link>
        <ul class="inline">
          <li><router-link to="/home">About</router-link></li>
          <li><router-link to="/about">Saved</router-link></li>
          <li><router-link to="/about">Messages</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>  
    </header>
  </section>

</template>

<script>
const fb = require('../firebaseConfig.js')
  export default {
    methods: {
      logout() {
        fb.auth.signOut().then(() => {
          this.$store.dispatch('clearData')
          this.$router.push('/login')
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>












