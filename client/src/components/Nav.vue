<template>
    <nav>
        <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <!--<li>
                <router-link to="/">
                    Login
                </router-link>
            </li>-->
            <li>
                <router-link to="/products">
                    Products
                </router-link>
            </li>
            <li>
                <a @click.prevent="logout">
                    Logout
                </a>
            </li>
        </ul>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Nav',
    methods: {
        logout() {
            console.log('masuk logout')
            localStorage.removeItem('access_token');
            localStorage.removeItem('email');
            localStorage.removeItem('id');
            this.$store.commit('SET_ISLOGIN', false);
            this.$router.push('/');
        },
    },
}
</script>