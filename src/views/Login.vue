<template>
  <div id='container'>
    <div id='left-container'>
      <h1 id='header'>{{ title }}</h1>
      <label>Username</label>
      <input type='text' name='username' id='username' placeholder='Type your username here' v-model='username'><br><br>
      <label>Password</label>
      <input type='password' name='password' id='password' v-model='password'><br>
      <router-link to='/home'>
        <button
          type='button'
          id='buttons'
          value='Sign in'
          name='sign in'
          v-on:click='this.signIn'
        >Sign in
        </button>
      </router-link>
      <router-link to='/signup'>
        <button
          type='button'
          id='buttons'
          value='Sign up'
          name='sign up'
        >Sign Up
        </button>
      </router-link><br><br>
      <a href='#'>Forgot my password!</a>
    </div>
    <div id='right-container'>

    </div>
  </div>
</template>

<script>
import UserService from '../services/user-service';

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
      const userService = new UserService();
      const response = await userService.signIn(this.username, this.password);

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