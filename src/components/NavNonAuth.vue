<template>
  <section>
      <b-navbar class="nonauth-bar" toggleable="lg" type="dark">
        <b-navbar-brand href="/home"><img src="../assets/nobo_small.svg" alt="Nobo logo"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item><router-link tag="li" to="/about" class="nav-link nav-link-grow-up">About</router-link></b-nav-item>
            <b-nav-item><router-link tag="li" to="/login" class="nav-link nav-link-grow-up">Login</router-link></b-nav-item>
            <b-nav-item><router-link tag="li" to="/signup" class="nav-link nav-link-grow-up">SignUp</router-link></b-nav-item>
            <b-nav-item><a @click="loginModal()">Login Modal</a></b-nav-item>
            <b-nav-item><a @click="signupModal()">SignUp Modal</a></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
      <transition name="fade">
        <div v-if="showLoginModal" class="p-modal">
          <div class="p-container">
            <a @click="closeModal" class="close">X</a>
            <h1>Hello Modal Signup</h1>
          </div>
        </div>
      </transition>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        showLoginModal: false,
        showSignupModal: false,
      }
    },
    methods: {
      loginModal() {
        this.showLoginModal = true;
      },
      closeModal() {
        this.showLoginModal = false;
        this.showSignupModal = false;
      },
      signupModal() {
        this.showSignupModal = true;
      }

    }
  }
</script>
