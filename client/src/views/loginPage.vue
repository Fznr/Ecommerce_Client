<template>
  <div class="loginPage">
    <div class="loginCard">
        <div class="loginCardLeft">

        </div>
        <div class="loginCardRight">
            <div class="loginFormHead">
                <h1>Sign In</h1>
            </div>
            <div class="loginForm">
                <form v-on:submit.prevent="login">
                    <label for="email">Email</label>
                    <input type="email" placeholder="Insert email" name="email" id="email" style="margin: 3% 0;" v-model="payload.email">
                    <label for="password">Password</label>
                    <input type="password" placeholder="Insert password" name="password" id="password" style="margin: 3% 0;" v-model="payload.password">
                    <button type="submit" style="margin: 3% 0;" >Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    return {
      payload: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.payload)
        .then((data) => {
          console.log('masuk')
          localStorage.setItem('access_token', data.access_token)
          this.$toastr.s('Success!', 'Welcome to E-commerce')
          this.$router.push('mainPage')
        })
        .catch(err => {
          console.log(err.response.data.errors.map(el => el.message))
          const errors = err.response.data.errors.map(el => el.message)
          this.$toastr.e(errors)
        })
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$router.push('mainPage')
    }
  }
}
</script>

<style>

</style>
