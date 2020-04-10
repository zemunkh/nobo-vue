<template>
  <div class="user-info">
    <UserSecret msg="Secret page of vue js app"/>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
const fb = require('../firebaseConfig.js');
// @ is an alias to /src
import UserSecret from '@/components/UserSecret.vue'

export default {
  name: 'user-info',
  components: {
    UserSecret
  },
  methods: {
    logout: function() {
      fb.auth.signOut().then(() => {
        this.$router.replace('login')
      });
    }
  }
}
</script>
