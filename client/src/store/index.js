import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import { url } from '../utils.js';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLogin: false,
        products: []
    },
    mutations: {
        SET_ISLOGIN(state, n) {
            state.isLogin = n;
        },
        SET_PRODUCTS(state, payload) {
            state.products = payload;
        },
        DELETE_PRODUCT(state, n) {
            state.products = state.products.filter(product => product.id !== n);
        },
        ADD_PRODUCT(state, payload) {
            state.products.push(payload);
        }
    },
    actions: {
        getProducts({ commit }) {
            console.log('masuk getProducts action di store')
            console.log(localStorage.getItem('access_token'))
            console.log(url + '/products')

            axios({
                url: url + '/products',
                method: 'GET',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then((result) => {
                console.log('masuk getProducts action di store then', result.data)
                commit('SET_PRODUCTS', result.data);
                console.log('get Products ', result.data)
            })
            .catch((err) => {
                console.log('masuk getProducts action di store errror', err.result.data.message);
            });
        },
        deleteProduct({ commit }, id) {
            console.log('masuk deleteProduct action di store', id);
            axios({
                url: url + `/products/${id}`,
                method: 'DELETE',
                headers: {
                    access_token: localStorage.getItem('access_token')
                }
            })
            .then((result) => {
                console.log('Then product delete di database');
                commit('DELETE_PRODUCT', id);
                // this.$emit('itemDelete', this.product.id);
            })
            .catch((err) => {
                console.log('error delete', err.response.data.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message,
                    showClass: {
                        popup: 'animated fadeInDown faster'
                    },
                    hideClass: {
                        popup: 'animated fadeOutUp faster'
                    }
                })
            });
        },
        createProduct({ commit }, payload) {
            console.log('masuk input form di store',payload);
            return new Promise ((resolve, reject) => {
                axios({
                    url: url + `/products`,
                    method: 'POST',
                    headers: {
                        access_token: localStorage.getItem('access_token')
                    },
                    data: {
                        name: payload.name,
                        price: payload.price,
                        stock: payload.stock,
                        image_url: payload.image_url
                    }
                })
                .then((result) => {
                    console.log('then create', result.data);
                    commit('ADD_PRODUCT', result.data);
                    resolve(true)
                })
                .catch((err) => {
                    console.log('error create', err.response.data.message);
                    reject(err.response.data.message)
                });
            })
        }
        
    }
});

export default store;