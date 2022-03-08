<template>
  <h2>add edit dele item</h2>
  <AdminNav />
  <div class="container">
    <Pages />
  </div>
</template>

<script>
import Pages from '@/components/Pagination.vue';
import AdminNav from '@/components/AdminNav.vue';

const url = process.env.VUE_APP_URL;
// const path = process.env.VUE_APP_PATH;
export default {
  components: {
    Pages,
    AdminNav,
  },
  data() {
    return {
      coupons: [],
      pagination: {},
    };
  },
  methods: {
    checkUser() {
      this.$http
        .post(`${url}api/user/check`)
        .then((res) => {
          // console.log(res);
          console.log('login success: ', res.data.success);
        })
        .catch((err) => {
          console.dir(err);
          this.$router.push('/');
        });
    },
  },
  mounted() {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = myCookie;
    this.checkUser();
  },
};
</script>
