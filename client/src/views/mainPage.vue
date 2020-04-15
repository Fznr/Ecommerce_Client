<template>
  <div class="mainPage">
      <div class="navbar">
        <div>
        <router-link to="/mainPage" class="routerLink">Home</router-link>
        </div>
        <div>
        <router-link to="/addProduct" class="routerLink">Create</router-link>
        </div>
        <div>
        <button v-on:click="logout">Logout</button>
        </div>
      </div>
      <div>
        <productList />
      </div>
  </div>
</template>

<script>
import productList from '../components/productList'
export default {
  name: 'mainPage',
  components: { productList },
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created () {
    if (!localStorage.access_token) {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
