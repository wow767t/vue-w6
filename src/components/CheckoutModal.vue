<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">訂購人資訊</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body p-4">
          <form>
            <div class="mb-3">
              <label for="name" class="form-label">收件人姓名</label>
              <input
                v-model="userData.user.name"
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                placeholder="請輸入姓名"
                rules="required"
              />
              <!-- <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage> -->
            </div>

            <div class="mb-3">
              <label for="tel" class="form-label">收件人電話</label>
              <input
                v-model="userData.user.tel"
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                placeholder="請輸入電話"
              />
              <!-- <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage> -->
            </div>

            <div class="mb-3">
              <label for="address" class="form-label">收件人地址</label>
              <input
                v-model="userData.user.address"
                id="address"
                name="地址"
                type="text"
                class="form-control"
                placeholder="請輸入地址"
                rules="required"
              />
              <!-- <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage> -->
            </div>

            <div class="mb-4">
              <label for="message" class="form-label">留言</label>
              <textarea
                v-model="userData.message"
                name=""
                id="message"
                class="form-control"
                cols="30"
                rows="10"
              >
              </textarea>
            </div>
            <div class="text-end">
              <button @click.prevent="mittTemp" class="btn btn-danger">送出訂單</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
// mitt
import mitt from 'mitt';

const emitter = mitt();

export default {
  name: 'CheckoutModal',
  data() {
    return {
      modal: '',
      userData: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      // temp
      temp: 'temp',
    };
  },
  methods: {
    emitModal() {
      this.$emit('emit-modal', this.modal);
    },
    mittTemp() {
      console.log('emit');
      emitter.emit('mitt-temp', this.temp);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.emitModal();
    // this.modal.show();
    console.log(emitter);
  },
};
</script>
