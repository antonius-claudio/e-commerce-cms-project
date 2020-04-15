<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  component: {
  },
  methods: {
  },
  computed: {
    
  },
  beforeCreate() {
    console.log('---beforeCreate---');
  },
  created() {
    console.log('---created---');
    isLogged: { 
      console.log('---masuk created isLogged---');
      if(localStorage.getItem('access_token')){
        console.log(this.$store.state.isLogin)
        console.log('---masuk created isLogged if access_token---');
        this.$store.commit('SET_ISLOGIN', true);
        this.$store.commit('SET_ROLE', localStorage.getItem('role'));
        console.log(this.$store.state.isLogin)

        this.$router.push('products');
      }
    }
  },
  mounted() {
    console.log('---mounted---');
  },
  watch: {
    // isLogged: function(val, oldVal) {
    //   console.log('---watch isLogged---,', val);
    //   if(localStorage.getItem('access_token')){
    //     console.log('---if access_token watch isLogged---,');
    //   }
    // }
  },
}
</script>