<template>
  <div class="modalAdd">
    <div class="modalAdd-content">
            <h3 style="display:flex; justify-content:center;">Edit Product</h3>
            <form style="display:flex; flex-direction:column; justify-content:space-between;" @submit.prevent="edit">
                    <label for="name">Name</label>
                    <input type="text area" placeholder="Insert name" name="name" id="name" style="margin: 3% 0;"  autocomplete="off" v-model="payload.name"><br>
                    <label for="image_url">image url</label>
                    <input type="text area" placeholder="Insert image_url" name="image_url" id="image_url" style="margin: 3% 0;"  autocomplete="off" v-model="payload.image_url"><br>
                    <label for="price">Price</label>
                    <input type="text area" placeholder="Insert price" name="price" id="price" style="margin: 3% 0;"  autocomplete="off" v-model="payload.price"><br>
                    <label for="stock">Stock</label>
                    <input type="text area" placeholder="Insert stock" name="stock" id="stock" style="margin: 3% 0;"  autocomplete="off" v-model="payload.stock"><br>
                    <!-- <input type="category" placeholder="Insert category" name="category" id="category" style="margin: 3% 0;"> -->
                    <button type="submit" style="margin: 3% 0;" >Edit</button>
                    <button type="submit" style="margin: 0 0;" @click="close">cancel</button>
                </form>
    </div>
</div>
</template>

<script>
export default {
  name: 'addProduct',
  data () {
    return {
      payload: {
        id: this.$store.state.products.id,
        name: this.$store.state.products.name,
        image_url: this.$store.state.products.image_url,
        price: this.$store.state.products.price,
        stock: this.$store.state.products.stock
      }
    }
  },
  methods: {
    close () {
      this.$router.push('/mainPage')
    },
    edit () {
      this.$store.dispatch('edit', this.payload)
        .then(data => {
          this.$router.push('/mainPage')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  computed: {
    products () {
      return this.$store.state.products
    }
  }
}
</script>

<style>

</style>
