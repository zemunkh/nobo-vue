<template>
  <div class="login">
    <transition>
      <div v-if="performingRequest" class="loading">
        <p>Ачааллаж байна...</p>
      </div>
    </transition>
    <section>
      
      <div class="col1" :class="{ 'signup-form': !showLoginForm && !showForgotPassword }">
        <transition name="fade">
          <form v-if="showLoginForm" @submit.prevent>
            <h1>Welcome back</h1>

            <label for="email1">Email</label>
            <input v-model.trim="loginForm.email" type="text" placeholder="y@email.com" id="email1" />

            <label for="password1">Password</label>
            <input v-model.trim="loginForm.password" type="password" placeholder="Password" id="password1" />

            <button @click="login" class="button">Log In</button>

            <div class="extras">
              <a @click="togglePasswordReset">Forgot Password? </a>
              <a @click="toggleForm">Create an Account</a>
            </div>
          </form>
        </transition>
        <transition name="fade">
          <form v-if="!showLoginForm && !showForgotPassword" @submit.prevent>
            <h1>Get Started</h1>

            <label for="firstname">First name</label>
            <input v-model.trim="signupForm.firstname" type="text" placeholder="First name" id="name" />

            <label for="lastname">Last name</label>
            <input v-model.trim="signupForm.lastname" type="text" placeholder="Last name" id="title" />

            <label for="email2">Email</label>
            <input v-model.trim="signupForm.email" type="text" placeholder="you@email.com" id="email2" />

            <label for="password2">Password</label>
            <input v-model.trim="signupForm.password" type="password" placeholder="min 6 character" id="password2" />   

            <button @click="signup" class="button">Sign Up</button>       

            <div class="extras">
              <a @click="toggleForm">Back to Log In</a>
            </div>
          </form>
        </transition>

        <transition name="fade">
          <form v-if="showForgotPassword" @submit.prevent class="password-reset">
            <div v-if="!passwordResetSuccess">
              <h1>Reset Password</h1>
              <p>We will send you an email to reset your password</p>

              <label for="email3">Email</label>
              <input v-model.trim="passwordForm.email" type="text" placeholder="@email.com" id="email3" />

              <button @click="resetPassword" class="button">Submit</button>

              <div class="extras">
                  <a @click="togglePasswordReset">Back to Log In</a>
              </div>
            </div>
            <div v-else>
              <h1>Email has sent!</h1>
              <p>Please check your email for a link to reset your password</p>
              <button @click="togglePasswordReset" class="button">Back to login</button>
            </div>
          </form>
        </transition>
        <transition name="fade">
          <div v-if="errorMsg !== ''" class="error-msg">
            <p>{{ errorMsg }}</p>
          </div>
        </transition>
      </div>
      <div class="col2">
        <h1>Nobo</h1>
        <p>Welcome to the <a href="https://nobo.mn" target="_blank">nobo app</a>
        Your book is you treasure</p>
      </div>
      <!-- <h3>Sign In</h3>
      <input type="text" v-model="email" placeholder="Email"><br>
      <input type="password" v-model="password" placeholder="Password"><br>
      <button @click="login">Connection</button>
      <p>You don't have an account ? You can <router-link to="/sign-up">create one</router-link></p> -->
    </section>

  </div>
</template>

<script>
  const fb = require('../firebaseConfig.js')


  export default {
    data() {
      return {
        loginForm: {
          email: '',
          password: ''
        },
        signupForm: {
          firstname: '',
          lastname: '',
          email: '',
          password: ''
        },
        passwordForm: {
          email: ''
        },
        showLoginForm: true,
        showForgotPassword: false,
        passwordResetSuccess: false,
        performingRequest: false,
        errorMsg: ''
      }
    },
    methods: {
      toggleForm() {
        this.errorMsg = ''
        this.showLoginForm = !this.showLoginForm
      },
      togglePasswordReset() {
        if (this.showForgotPassword) {
          this.showLoginForm = true
          this.showForgotPassword = false
          this.passwordResetSuccess = false
        } else {
          this.showLoginForm = false
          this.showForgotPassword = true
        }
      },
      login() {
        this.performingRequest = true

        fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(() => {
            var user = fb.auth.currentUser;
            // console.log("User id: ", user.uid)
            
            this.$store.commit('setCurrentUser', user)
            this.$store.dispatch('fetchUserProfile')
            this.performingRequest = false
            this.$router.push('/home')
        }).catch(err => {
            this.performingRequest = false
            this.errorMsg = err.message
        })
      },
      signup() {
        this.performingRequest = true

        fb.auth.createUserWithEmailAndPassword(this.signupForm.email, this.signupForm.password).then(() => {
            var user = fb.auth.currentUser;
            console.log("User id: ", user.uid)
            this.$store.commit('setCurrentUser', user)
            // stack in here, $store undefined error
            fb.usersCollection.doc(user.uid).set({
                firstname: this.signupForm.firstname,
                lastname: this.signupForm.lastname
            }).then(() => {
                this.$store.dispatch('fetchUserProfile')
                this.performingRequest = false
                this.$router.push('/home')
            }).catch(err => {
                this.performingRequest = false
                this.errorMsg = err.message
            })
        }).catch(err => {
            console.log("Creating user: ", err)
            this.performingRequest = false
            this.errorMsg = err.message
        })
      },
      resetPassword() {
        this.performingRequest = true

        fb.auth.sendPasswordResetEmail(this.passwordForm.email).then(() => {
          this.performingRequest = false
          this.passwordResetSuccess = true
          this.passwordForm.email = ''
        }).catch(err => {
          console.log(err)
          this.performingRequest = false
          this.errorMsg = err.message
        })
      }      
    }
  
  }
</script>

