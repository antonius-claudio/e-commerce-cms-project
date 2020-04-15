<template>
    <div>
        <form class="forminput" enctype="multipart/form-data">
            <div class="row">
                <div class="input-field col s6">
                    <input placeholder="Name" type="text" class="validate" v-model="nameProduct">
                </div>
                <div class="input-field col s6">
                    <input placeholder="Price" type="number" min="1" class="validate" v-model="priceProduct">
                </div>
                <div class="input-field col s6">
                    <input placeholder="Stock" type="number" min="1" class="validate" v-model="stockProduct">
                </div>
                <div class="input-field col s6">
                    <input placeholder="Url" type="text" class="validate" v-model="urlImgProduct">
                </div>
                <!--
                <div class="file-field input-field col s6">
                    <div class="btn">
                        <span>File</span>
                        <input type="file"  v-on:change="urlImgProduct">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                    </div>
                </div>
                -->
                <div class="input-field col s6">
                    <a class="waves-effect waves-light btn" @click.prevent="createProduct">create</a>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'FormAddProduct',
    data () {
        return {
            nameProduct: '',
            priceProduct: '',
            stockProduct: '',
            urlImgProduct: ''
        }
    },
    methods: {
        createProduct() {
            console.log('masuk method createProduct component formaddproduct')
            let inputForm = {
                name: this.nameProduct,
                price: this.priceProduct,
                stock: this.stockProduct,
                image_url: this.urlImgProduct
            }
            console.log(inputForm)
            this.$store.dispatch('createProduct', inputForm)
                .then((result) => {
                    this.nameProduct = '';
                    this.priceProduct = '';
                    this.stockProduct = '';
                    this.urlImgProduct = '';
                    this.$emit('viewFormFinish', false)
                    console.log('masuk then di formadd component', result)
                    Swal.fire(
                        'Success!',
                        'You have updated task!',
                        'success'
                        );
                })
                .catch((err) => {
                    console.log('masuk errr di formadd component', err)
                    let str = err.join('\n');
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: str,
                        showClass: {
                            popup: 'animated fadeInDown faster'
                        },
                        hideClass: {
                            popup: 'animated fadeOutUp faster'
                        }
                    })
                });
            
        }
    },
}
</script>
<style>
    .forminput {
        background-color: #ecebeb9e;
        padding: 20px;
    }
</style>