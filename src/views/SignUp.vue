<template>
  <div id='container'>
    <div id='left-container'>
      <h1 id='header'>{{ title }}</h1>
      <label>Username</label>
      <input
        type='text'
        name='username'
        id='username'
        placeholder='Type your username here'
        v-model='username'
      >
      <br><br>
      <label>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Type your email here'
        v-on:blur='validateEmail'
        v-model='email'
      >
      <br><br>
      <label>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        v-model='password'
      >
      <br>
      <label id='confirm_password_label'>Confirm password</label>
      <input
        type='password'
        name='password_confirmation'
        id='password_confirmation'
        v-on:blur='passwordMatches'
        v-model='passwordConfirmation'
      >
      <br>
      <button
        type='button'
        id='buttons'
        value='Submit'
        name='submit'
        v-bind:disabled='!doesPasswordMatch || !isEmailValid'
        v-on:click='signUp'
      >Submit</button>
    </div>
    <div id='right-container'>

    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      title: 'Create your account',
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      doesPasswordMatch: false,
      isEmailValid: false,
    }
  },
  methods: {
    validateEmail() {
      console.log('Email', this.isEmailValid);
      if (this.email.length !== 0) {
        const emailParts = this.email.split('@');

        if (emailParts.length < 2) {
          this.isEmailValid = false;
          alert('Invalid email');

          return;
        }

        if (!emailParts[1].includes('.')) {
          this.isEmailValid = false;
          alert('Invalid email');

          return;
        }
      }

      this.isEmailValid = true;
    },
    passwordMatches() {
      console.log('password', this.doesPasswordMatch);
      if (this.password.length === 0) {
        this.doesPasswordMatch = false;
        alert('Password can not be empty');

        return;
      }
      if (this.password !== this.passwordConfirmation) {
        this.doesPasswordMatch = false;
        alert('Password confirmation does not match password');

        return;
      }

      this.doesPasswordMatch = true;
    },
    async signup() {

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

#username, #password, #email, #password_confirmation {
  width: 20rem;
  height: 2rem;
}

#username {
  margin: 1rem 1rem 1rem 1rem;
}

#email {
  margin: -1rem -1rem 1rem 1rem;
}

#password {
  margin: -1rem 1rem 1rem 1rem;
}

#password_confirmation {
  margin: 0.7rem 1rem 1rem 1rem;
}

#confirm_password_label {
  margin-left: -4rem;
}

a {
  color: #FFFFFF;
}
</style>