<template>
    <div class="login-body">
      <div class="row formlog">
        <div class="col s4 offset-s4 boxlog">
          <h5 class="titleform">Login</h5>
          <hr>
          <div class="input-field col s12 inputcolor">
            <input placeholder="email" type="text" class="validate" v-model="emailLogin">
          </div>
          <div class="input-field col s12 inputcolor">
            <input placeholder="password" type="password" class="validate" v-model="passwordLogin">
          </div>
          <div class="input-field col s12 right">
            <button class="btn waves-effect waves-light" type="submit" @click.prevent="login">Submit
              <i class="material-icons right">send</i>
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'FormLogin',
    data() {
    return {
      emailLogin:'',
      passwordLogin:''
    }
  },
  methods: {
    login() {
      let inputLogin = {
        email: this.emailLogin,
        password: this.passwordLogin
      };
      console.log('Method login', inputLogin);
      this.$store.dispatch('loginUser', inputLogin)
      .then((result) => {
        console.log('method login di form login', result)
        Swal.fire({
          icon: 'success',
          title: `Wellcome ${result}`,
          showConfirmButton: false,
          timer: 1500
        })
        this.$router.push('/products');
      })
      .catch((err) => {
        console.log('method error login di form login', err)
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
      });
      // this.$store.commit('SET_ISLOGIN', true);
      // localStorage.setItem('access_token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOjEsIlVzZXJFbWFpbCI6InVzZXIxQG1haWwuY29tIiwiaWF0IjoxNTg2NzY5MzU2fQ.1ssiiZlj6I2mhhZMFbt5soXRa4EP4k3h-IsVPOtp9OM');
      // this.$router.push('products');
    }
  },
}
</script>
<style>
  .formlog {
    margin-top:15%;
  }
  .boxlog {
    background-color: #caead1b5;
    border-radius: 10px;
  }
  .right {
    text-align: right;
  }
  .titleform {
    font-size: 2em;
    text-align: center;
    color: #f1798a;
    text-shadow: 0px 2px 2px rgba(109, 66, 66, 0.4);
  }
  .inputcolor {
    color: #4e4848;
  }
  .inputcolor ::placeholder {
    color: #d06464;
  }
</style>