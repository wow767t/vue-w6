<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Admin</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-floating mb-4">
            <input
              v-model="identity.username"
              class="form-control"
              type="email"
              name=""
              id="username"
              placeholder="email"
            />
            <label for="username">email</label>
          </div>
          <div class="form-floating mb-4">
            <input
              type="password"
              id="password"
              placeholder="password"
              class="form-control mt-3"
              required
              v-model="identity.password"
            />
            <label for="password">password</label>
          </div>
          <button @click="login" type="button" class="btn btn-secondary btn-lg w-100">登入</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  name: 'LoginModal',
  data() {
    return {
      modal: '',
      identity: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    emitModal() {
      this.$emit('emit-modal', this.modal);
    },
    // login
    login() {
      this.$http
        .post('https://vue3-course-api.hexschool.io/v2/admin/signin', { ...this.identity })
        .then((res) => {
          // console.log(res);
          const { expire, token } = res.data;
          document.cookie = `myToken=${token}; expires=${expire} `;
          alert(res.data.message);
          this.$router.push('/admin');
          this.modal.hide();
        })
        .catch((err) => {
          // console.dir(err);
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.emitModal();
  },
};
</script>
