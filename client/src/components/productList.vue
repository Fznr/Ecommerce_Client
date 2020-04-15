<template>
  <div class="productList">
    <productCard v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<script>

import productCard from './productCard'
export default {
  name: 'productList',
  components: {
    productCard
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('findAll')
  }
}
</script>

<style>

</style>
