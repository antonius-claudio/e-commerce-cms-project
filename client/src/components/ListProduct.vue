<template>
    <tr>
        <td>{{product.name}}</td>
        <td>{{product.image_url}}</td>
        <td>{{product.price}}</td>
        <td>{{product.stock}}</td>
        <td>$0.87</td>
        <td><button class="btn red waves-effect waves-light" @click.prevent="deleteProduct">Delete</button></td>
    </tr> 
</template>
<script>
import { url } from '../utils.js';
import axios from 'axios';
const access_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjEsIlVzZXJFbWFpbCI6InVzZXIxQG1haWwuY29tIiwiaWF0IjoxNTg2NzY5MzU2fQ.1ssiiZlj6I2mhhZMFbt5soXRa4EP4k3h-IsVPOtp9OM';
export default {
    name: 'ListProduct',
    props: ['product'],
    methods: {
        deleteProduct() {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
            .then((result) => {
                if (result.value) {
                    console.log('List Product DeleteProduct method di list product')
                    this.$store.dispatch('deleteProduct', this.product.id);
                }
            })
        }
    },
}
</script>