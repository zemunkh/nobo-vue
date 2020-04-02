<template>
  <section id="profile">
    <div col="col1">
      <h3>Profile and User Info</h3>
      <p>Update your profile</p>

      <transition name="fade">
        <p v-if="showSuccess" class="success">Profile updated</p>
      </transition>

      <form @submit.prevent>
        <label for="fistname">First Name</label>
        <input v-model.trim="firstname" type="text" :placeholder="userProfile.firstname" id="firstname"/>

        <label for="lastname">Last Name</label>
        <input v-model.trim="lastname" type="text" :placeholder="userProfile.lastname" id="lastname"/>

        <button @click="updateProfile" class="button">Update Profile</button>
      </form>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        firstname: '',
        lastname: '',
        showSuccess: false
      }
    },
    computed: {
      ...mapState(['userProfile'])
    },
    methods: {
      updateProfile() {
        this.$store.dispatch('updateProfile', {
          firstname: this.firstname !== '' ? this.firstname : this.userProfile.firstname,
          lastname: this.lastname !== '' ? this.lastname : this.userProfile.lastname
        })

        this.firstname = ''
        this.lastname = ''

        this.showSuccess = true

        setTimeout(() => { this.showSuccess = false }, 2000)
      }
    }
  }
</script>