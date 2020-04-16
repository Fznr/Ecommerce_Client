<template>
  <div class="modalAdd">
    <div class="modalAdd-content">
            <h3 style="display:flex; justify-content:center;">Add Product</h3>
            <form style="display:flex; flex-direction:column; justify-content:space-between;" @submit.prevent="add">
                    <label for="name">Name</label>
                    <input type="text area" placeholder="Insert name" name="name" id="name" style="margin: 3% 0;"  autocomplete="off" v-model="payload.name"><br>
                    <label for="image_url">image url</label>
                    <input type="text area" placeholder="Insert image_url" name="image_url" id="image_url" style="margin: 3% 0;"  autocomplete="off" v-model="payload.image_url"><br>
                    <label for="price">Price</label>
                    <input type="text area" placeholder="Insert price" name="price" id="price" style="margin: 3% 0;"  autocomplete="off" v-model="payload.price"><br>
                    <label for="stock">Stock</label>
                    <input type="text area" placeholder="Insert stock" name="stock" id="stock" style="margin: 3% 0;"  autocomplete="off" v-model="payload.stock"><br>
                    <!-- <input type="category" placeholder="Insert category" name="category" id="category" style="margin: 3% 0;"> -->
                    <button type="submit" style="margin: 3% 0;" >Add</button>
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
        name: '',
        image_url: '',
        price: '',
        stock: ''
      }
    }
  },
  methods: {
    close () {
      this.$router.push('/mainPage')
    },
    add () {
      this.$store.dispatch('create', this.payload)
        .then(data => {
          this.$toastr.s('Product Successfully Added')
          this.$router.push('/mainPage')
        })
        .catch(err => {
          console.log(err.response.data.errors.map(el => el.message))
          const errors = err.response.data.errors.map(el => el.message)
          if (errors.length > 1) {
            for (let i = 0; i < errors.length; i++) {
              this.$toastr.e(errors[i])
            }
          } else {
            this.$toastr.e(errors)
          }
        })
    }
  }
}
</script>

<style>

</style>
