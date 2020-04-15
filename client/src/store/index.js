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
        },
        UPDATE_PRODUCT(state, payload) {
            let index = state.products.findIndex(product => product.id === payload.id);
            state.products[index].name = payload.name;
            state.products[index].image_url = payload.image_url;
            state.products[index].price = payload.price;
            state.products[index].stock = payload.stock;
            console.log('state.products[index]... di update product', state.products[index])
            console.log('payload... di update product', payload)
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
            return new Promise ((resolve, reject) => {
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
                    resolve(true);
                })
                .catch((err) => {
                    console.log('error delete', err.response.data.message);
                    reject(err.response.data.message)
                });
            })
        },
        createProduct({ commit }, payload) {
            console.log('masuk createProduct action di store',payload);
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
        },
        updateProduct({ commit }, payload) {
            console.log('masuk updateProduct action di store', payload);
            return new Promise ((resolve, reject) => {
                axios({
                    url: url + `/products/${payload.id}`,
                    method: 'PUT',
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
                    console.log('then updated sebelum commit', result.data);
                    commit('UPDATE_PRODUCT', result.data);
                    resolve(true)
                })
                .catch((err) => {
                    console.log('error create', err.response.data.message);
                    reject(err.response.data.message)
                });
            })
        }
    },
    getters: {
        getProductById: (state) => (id) => {
            console.log('masuk getters getProductbyId action di store')
            return state.products.find(product => product.id === id)
        },
    }
});

export default store;