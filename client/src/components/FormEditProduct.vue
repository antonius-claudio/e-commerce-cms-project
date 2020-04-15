<template>
    <div>
        <form class="forminput" enctype="multipart/form-data">
            <h5>Form Edit</h5>
            <hr>
            <div class="row">
                <div class="input-field col s6">
                    <input placeholder="Name" type="text" class="validate" v-model="nameEdit">
                </div>
                <div class="input-field col s6">
                    <input placeholder="Price" type="number" min="1" class="validate" v-model="priceEdit">
                </div>
                <div class="input-field col s6">
                    <input placeholder="Stock" type="number" min="1" class="validate" v-model="stockEdit">
                </div>
                <div class="input-field col s6">
                    <input placeholder="Url" type="text" class="validate" v-model="urlImgEdit">
                </div>
                <!--
                <div class="file-field input-field col s6">
                    <div class="btn">
                        <span>File</span>
                        <input type="file"  v-on:change="urlImgEdit">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                    </div>
                </div>
                -->
                <div class="input-field col s2">
                    <a class="waves-effect waves-light btn" @click.prevent="editProduct">update</a>
                </div>
                <div class="input-field col s2">
                    <a class="waves-effect waves-light btn" @click.prevent="cancelProduct">cancel</a>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'FormEditProduct',
    data() {
        return {
            nameEdit: '',
            priceEdit: '',
            stockEdit: '',
            urlImgEdit: ''
        }
    },
    methods: {
        editProduct() {
            console.log('masuk form edit product method editproduct')
            let inputUpdateForm = {
                name: this.nameEdit,
                price: this.priceEdit,
                stock: this.stockEdit,
                image_url: this.urlImgEdit,
                id: this.id
            }
            console.log(inputUpdateForm);
            this.$store.dispatch('updateProduct', inputUpdateForm)
                .then((result) => {
                    Swal.fire(
                    'Success!',
                    'Product Successfully Updated.!',
                    'success'
                    )
                    this.$router.push('/products');
                })
                .catch((err) => {
                    Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: err,
                            showClass: {
                                popup: 'animated fadeInDown faster'
                            },
                            hideClass: {
                                popup: 'animated fadeOutUp faster'
                            }
                        })
                })
        },
        cancelProduct() {
            console.log('cancel product')
            this.$router.push('/products');
        },
        getAndSetData(id) {
            let data = this.$store.getters.getProductById(id);
            console.log('product', data)
            this.nameEdit = data.name;
            this.priceEdit = data.price;
            this.stockEdit = data.stock;
            this.urlImgEdit = data.image_url;
        }
    },
    computed: {
        id: function () {
            console.log('masuk computed id ', this.$route.params.id)
            return this.$route.params.id;
        }
    },
    created() {
        console.log('masuk form edit product method editproduct')
        this.getAndSetData(this.$route.params.id);
    },
    mounted() {
        console.log('masuk mounted editproduct')
    },
    updated() {
        console.log('masuk updated editproduct')
    },
    watch: {
        id : function (val, oldVal) {
            console.log('watch id ', val)
            if(val !== oldVal){
                this.getAndSetData(val);
            }
        }
    },
}
</script>