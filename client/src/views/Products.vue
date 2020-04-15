<template>
    <div>
        <Nav/>
        <div class="container">
            <div class="row">
                <div class="col s6">
                    <h5>Products</h5>
                </div>
                <div class="col s6 divAddButton">
                    <a class="btn-floating btn-large waves-effect waves-light red" @click.prevent="formAddProduct"><i class="material-icons">add</i></a>
                </div>
            </div>
            <hr>
            <FormAddProduct v-if="viewForm" @viewFormFinish="viewFormFinish" />
            <table class="highlight responsive-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image Url</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <ListProduct 
                        v-for="product in products" 
                        :key="product.id" 
                        :product="product"
                    ></ListProduct>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import ListProduct from '../components/ListProduct.vue';
import FormAddProduct from '../components/FormAddProduct.vue';
import Nav from '../components/Nav.vue';
export default {
    name: "Products",
    components: {
        ListProduct,
        Nav,
        FormAddProduct
    },
    data(){
        return {
            viewForm: false
        }
    },
    methods: {
        formAddProduct() {
            console.log('masuk method form add product')
            this.viewForm = !this.viewForm;
        },
        viewFormFinish() {
            this.viewForm = !this.viewForm;
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    created() {
        console.log('masuk create Product')
        if(this.$store.state.isLogin){
            console.log('masuk create Product if islogin true')
            this.$store.dispatch('getProducts'); // jalanin action getProducts di store tapi tidak di simpan
        }
    },
}
</script>
<style>
    .container {
        margin-top: 50px;
    }
    .divAddButton{
        display: flex;
        justify-content: end;
    }
</style>