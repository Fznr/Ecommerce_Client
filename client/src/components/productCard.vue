<template>
    <div class="productCard">
        <h1>{{product.name}}</h1>
        <img :src="product.image_url" alt="" height="50%" width="50%">
        <h3>Price:</h3>
        <h4>{{product.price}}</h4>
        <h3>Stock:</h3>
        <h4>{{product.stock}}</h4>
        <button>Edit</button><br>
        <button>Delete</button>
    </div>
</template>

<script>
export default {
  name: 'productCard',
  props: ['product']
}
</script>

<style>

</style>
