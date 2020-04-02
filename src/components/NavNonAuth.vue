<template>
    <b-navbar class="nonauth-bar" toggleable="lg" type="dark">
      <b-navbar-brand href="home"><img src="../assets/nobo_small.svg" alt="Nobo logo"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item><router-link to="/about" class="nav-link nav-link-grow-up">About</router-link></b-nav-item>
          <b-nav-item><router-link to="/login" class="nav-link nav-link-grow-up">Login</router-link></b-nav-item>
          <b-nav-item><router-link to="/signup" class="nav-link nav-link-grow-up">SignUp</router-link></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
// const fb = require('../firebaseConfig.js')
  export default {

  }
</script>



//   <header>
//     <section>
//       <div class="col1">
//         <router-link to="home"><img src="../assets/nobo_small.svg" alt="Nobo logo"></router-link>
//         <ul class="inline">
//           <li><input type="search" name="" id="email1" placeholder="Search book"></li>
//           <li><router-link to="about">About</router-link></li>
//           <li><router-link to="login">Login/SignUp</router-link></li>
//         </ul>
//       </div>
//     </section>
//   </header>
