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
          url: 'https://polar-dusk-05144.herokuapp.com/admin/signin',
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
    editPage (context, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url: 'https://polar-dusk-05144.herokuapp.com/product/' + payload,
          headers: {
            access_token: localStorage.access_token
          }
        })
          .then(({ data }) => {
            context.commit('SET_PRODUCTS', data.Product[0])
            resolve(data)
          })
          .catch(err => {
            console.log(err)
            reject(err)
          })
      })
    },
    findAll (context, payload) {
      console.log('masuk')
      axios({
        method: 'GET',
        url: 'https://polar-dusk-05144.herokuapp.com/product',
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
          url: 'https://polar-dusk-05144.herokuapp.com/product/' + payload,
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
          url: 'https://polar-dusk-05144.herokuapp.com/product',
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
    },
    edit (_, payload) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'PUT',
          url: 'https://polar-dusk-05144.herokuapp.com/product/' + payload.id,
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
