<template>
    <div class="sign-up">
        <p>Шинээр хэрэглэгч үүсгэх</p>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input :type="passwordInputType" v-model="password" placeholder="Password"><br>
        <button type="password" @click="switchVision">show / hide</button>
        <button @click="signUp">Sign Up</button><br>
        <span>Or go back to <router-link to="/login">login</router-link>.</span>
    </div>
</template>

<script>

  const fb = require('../firebaseConfig.js');

  export default {
    name: 'signUp',
    data() {
      return {
        email: '',
        password: '',
        passwordInputType: 'password'
      }
    },
    methods: {
      switchVision() {
          this.passwordInputType = this.passwordInputType === 'password' ? 'text' : 'password';
      },
      signUp: function() {
        fb.auth.createUserWithEmailAndPassword(this.email, this.password).then(
          (user) => {
            this.$router.replace('user-info');
            alert(user.additionalUserInfo);
          },
          (err) => {
            alert('Oops. ' + err.message)
          }
        );
      }
    }
  }
</script>

 <style scoped>
  .sign-up {
    margin-top: 40px;
  }
  input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
  }
  span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
  }
</style>