<template>
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <router-link class="nav-link" to="/admin-products">Products Database</router-link>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Customer Orders</a>
    </li>
    <li class="nav-item"></li>
    <li class="nav-item">
      <router-link class="nav-link" to="/admin-coupons">Coupons</router-link>
    </li>
    <li class="nav-item">
      <a @click.prevent="logout" class="nav-link" href="#">Log out</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AdminNav',
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$http
        .post('https://vue3-course-api.hexschool.io/v2/logout')
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          this.$router.push('/');
        })
        .catch((err) => {
          console.dir(err);
          console.log(err.response.data.message);
        });
    },
  },
  mounted() {},
};
</script>
