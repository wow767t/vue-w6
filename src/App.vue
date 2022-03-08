<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/products">Products List Page</router-link> |
    <router-link to="/cart">Cart List Page</router-link> |
    <router-link @click="loginCheck" to="">Admin</router-link> |
    <router-link to="/about">About</router-link>
    <!-- <h2 v-hide>bb</h2> -->
  </div>
  <router-view />
  <LoginModal
  @emit-modal="getModal"
  />
</template>

<script>
import LoginModal from '@/components/LoginModal.vue';

export default {
  components: {
    LoginModal,
  },
  data() {
    return {
      modal: '',
    };
  },
  methods: {
    // https://vue3-course-api.hexschool.io/v2/api/user/check
    loginCheck() {
      this.$http
        .post('https://vue3-course-api.hexschool.io/v2/api/user/check')
        .then((res) => {
          console.log(res);
          this.$router.push('/admin');
        })
        .catch((err) => {
          console.dir(err);
          alert(err.response.data.message);
          this.modal.show();
        });
    },
    // get checkout modal & open modal
    getModal(obj) {
      this.modal = obj;
    },
  },
  mounted() {
  },
};
</script>
<style lang="scss">
@import 'bootstrap';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
