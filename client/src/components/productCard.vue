<template>
    <div class="productCard">
        <h1>{{product.name}}</h1>
        <img :src="product.image_url" alt="" height="40%" width="50%">
        <h3>Price:</h3>
        <h4>{{product.price}}</h4>
        <h3>Stock:</h3>
        <h4>{{product.stock}}</h4>
        <button>Edit</button><br>
        <button v-on:click="hapus(product.id)">Delete</button>
    </div>
</template>

<script>
export default {
  name: 'productCard',
  props: ['product'],
  methods: {
    hapus (id) {
      this.$store.dispatch('hapus', id)
        .then(data => {
          this.$store.dispatch('findAll')
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
