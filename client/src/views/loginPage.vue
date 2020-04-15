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
                    <input type="email" placeholder="Insert email" name="email" id="email" style="margin: 3% 0;" v-model="email">
                    <label for="password">Password</label>
                    <input type="password" placeholder="Insert password" name="password" id="password" style="margin: 3% 0;" v-model="password">
                    <button type="submit" style="margin: 3% 0;" >Login</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginPage',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/admin/signin',
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then(({ data }) => {
          console.log('masuk')
          localStorage.setItem('access_token', data.access_token)
          this.$router.push('mainPage')
          // this.$toast.success('Hello welcome to Kanban Board', {
          // optional options Object
          // })
          // this.$emit('login')
        })
        .catch(err => {
          // const error = err.response.data.errors[0].message
          // this.$toast.error(error, {})
          console.log(err)
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
