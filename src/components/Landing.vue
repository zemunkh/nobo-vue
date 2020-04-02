<template>
    <main>
      <section id="card">
        <b-form>
          <h1>Connect to your library</h1>
          <b-form-group id="fullname-group" label="Your Name:" label-for="fullname">
            <b-form-input id="fistname" v-model="form.fistname" required placeholder="Fistname"></b-form-input>
            <b-form-input id="lastname" v-model="form.lastname" required placeholder="Lastname"></b-form-input>
          </b-form-group>

          <b-form-group id="email-group" label="Email address:" label-for="email">
            <b-form-input id="email" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
          </b-form-group>

          <b-form-group id="password-group" label="Password:" label-for="password">
            <b-form-input id="password" v-model="form.password" type="password" required placeholder="Enter your password"></b-form-input>
          </b-form-group>

          <b-button id="submit-btn" type="submit" variant="primary">Submit</b-button>
        </b-form>
      </section>
    </main>
</template>


<script>

  export default {
    data() {
      return {
        form: {
          email: '',
          firstname: '',
          lastname: '',
          password: '',
        },
        show: true
      }
    },
  }
</script>


<style lang="scss">
   @import '../assets/scss/app.scss';
</style>