import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: {}
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    }
  },
  actions: {
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: 'http://localhost:3000/admin/signin',
          data: {
            email: payload.email,
            password: payload.password
          }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    findAll (context, payload) {
      console.log('masuk')
      axios({
        method: 'GET',
        url: 'http://localhost:3000/product',
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('SET_PRODUCTS', data.Product)
          // console.log(data.Product)
          // this.products = data.Product
          // this.task= data.Task
        })
        .catch(err => {
          console.log(err)
        })
    },
    hapus (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'DELETE',
          url: 'http://localhost:3000/product/' + payload,
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    create (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'POST',
          url: 'http://localhost:3000/product',
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            name: payload.name,
            image_url: payload.image_url,
            price: payload.price,
            stock: payload.stock
          }
        })
          .then(({ data }) => {
            resolve(data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
})

export default store
