<template>
  <div id='container'>
    <div id='left-container'>
      <h1 id='header'>{{ title }}</h1>
      <label>Username</label>
      <input type='text' name='username' id='username' placeholder='Type your username here' v-model='username'><br><br>
      <label>Password</label>
      <input type='password' name='password' id='password' v-model='password'><br>
      <router-link to='/home'><input type='button' id='buttons' value='Sign in' name='submit' v-on:click='this.signIn'></router-link>
      <router-link to='/signup'><input type='button' id='buttons' value='Sign up' name='sign up'></router-link><br><br>
      <a href='#'>Forgot my password!</a>
    </div>
    <div id='right-container'>

    </div>
  </div>
</template>

<script>
import PoupaUpService from '../services/poupa-up-service';

export default {
  name: 'Login',
  data() {
    return {
      title: 'Welcome to Poupa-up',
      username: '',
      password: '',
      signInResponse: {},
    }
  },
  methods: {
    async signIn() {
      const poupaUpService = new PoupaUpService();
      const response = await poupaUpService.signIn(this.username, this.password);

      this.signInResponse = response;
    }
  }
}
</script>

<style>
#container {
  position: absolute;
  width: 99.5%;
  height: 100%;
  overflow: hidden;
}

#left-container {
  position: absolute;
  width: 40%;
  height: 100%;
  margin-top: 15%;
}

#right-container {
  position: absolute;
  width: 60%;
  height: 100%;
  margin-left: 40%;
  background-image: url('../assets/finance-poupa-up.jpg');
  background-size: cover;
  opacity: 0.7;
}

input {
  width: 20rem;
  height: 3rem;
  margin: 40px 0 0;
  border-radius: 1rem;
}

#buttons {
  width: 15rem;
  height: 3rem;
  margin: 2rem 1rem 0rem 0rem;
  font-size: 1rem;
}

#username, #password {
  width: 20rem;
  height: 2rem;
}

#username {
  margin: 1rem 1rem 1rem 1rem;
}

#password {
  margin: 1rem 1rem 1rem 1rem;
}

a {
  color: #FFFFFF;
}
</style>