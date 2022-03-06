<template>
  <div class="container mt-5">
    <!-- justify-content-center 置中 -->
    <div class="row justify-content-center mb-4">
      <div class="col-4 border p-4 rounded-3 border-secondary border-2">
        <h2 class="h2 mb-4">請先登入</h2>
        <div class="form-floating mb-4">
          <input
            v-model="account"
            class="form-control"
            type="email"
            name=""
            id="name"
            placeholder="email"
            required
          />
          <label for="name">email</label>
        </div>
        <div class="form-floating mb-4">
          <input
            v-model="password"
            type="password"
            id="password"
            placeholder="password"
            class="form-control mt-3"
            required
          />
          <label for="password">password</label>
        </div>
        <button @click="login" type="button" class="btn btn-secondary btn-lg w-100">登入</button>
      </div>
    </div>
  </div>
</template>

<script>
const url = process.env.VUE_APP_URL;

export default {
  data() {
    return {
      account: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('login');
      const data = {
        username: this.account,
        password: this.password,
      };

      this.$http
        .post(`${url}admin/signin`, data)
        .then((res) => {
          console.log(res);
          const { token, expired } = res.data;
          document.cookie = `myToken=${token}; expires=${expired};`;
          alert(res.data.message);
          this.$router.push({ path: '/admin' });
        })
        .catch((err) => {
          console.dir(err);
          alert(err.response.data.message);
          this.account = '';
          this.password = '';
        });
    },
  },
};
</script>
