<template>
  <div class="productList">
    <productCard v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>
import axios from 'axios'
import productCard from './productCard'
export default {
  name: 'productList',
  components: {
    productCard
  },
  data () {
    return {
      products: {}
    }
  },
  methods: {
    findAll () {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/product',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          // console.log(data.Product)
          this.products = data.Product
          console.log(this.products)
          // this.task= data.Task
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  created () {
    this.findAll()
  }
}
</script>

<style>

</style>
