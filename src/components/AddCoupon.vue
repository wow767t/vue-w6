/
<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">新增優惠卷</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  name: 'AddCoupon',
  data() {
    return {
      modal: '',
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
          alert(res.data.message);
          this.$router.push('/admin');
          this.modal.hide();
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    isLoading() {
      const loader = this.$loading.show({
        // Optional parameters
        // container: this.fullPage ? true : this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
      });
      // simulate AJAX
      setTimeout(() => {
        loader.hide();
      }, 500);
    },
    onCancel() {
      console.log('User cancelled the loader.');
    },
  },
  mounted() {
    this.isLoading();
    this.modal = new Modal(this.$refs.modal);
    this.emitModal();
  },
};
</script>
