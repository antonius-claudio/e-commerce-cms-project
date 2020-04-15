<template>
  <div class="container">
    <FormLogin/>
  </div>
</template>

<script>
import FormLogin from '../components/FormLogin.vue';

export default {
  name: "Home",
  components: {
    FormLogin
  },
};
</script>