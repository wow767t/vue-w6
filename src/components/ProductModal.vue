<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span> {{ product.title }} </span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <img
                :style="{ backgroundImage: `url(${product.imageUrl})` }"
                style="
                  width: 500px;
                  height: 400px;
                  background-position: center center;
                  background-size: cover;
                "
                class="img-fluid"
                alt=""
              />
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill"></span>
              <p>商品描述：{{ product.description }}</p>
              <p>商品內容：</p>
              <div class="h5">元</div>
              <del class="h6">原價 {{ product.origin_price }} 元</del>
              <div class="h5">現在只要 {{ product.price }} 元</div>
              <div class="input-group col">
                <select
                class="form-select" aria-label="Default select example">
                  <option v-for="num in 5" :key="num" :value="num">{{ num }}</option>
                </select>
                <button @click="addToCart(product.id, 2)" type="button" class="btn btn-warning">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

const url = process.env.VUE_APP_URL;
const path = process.env.VUE_APP_PATH;

export default {
  name: 'ProductModal',
  props: ['product'],
  data() {
    return {
      modal: '',
      qty: null,
    };
  },
  methods: {
    sentModal() {
      this.$emit('sent-modal', this.modal);
    },
    // 加入購物車
    addToCart(id) {
      const params = {
        data: {
          product_id: id,
          qty: 1,
        },
      };
      console.log(params);
      this.$http
        .post(`${url}api/${path}/cart`, params)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          this.modal.hide();
        })
        .catch((err) => {
          console.dir(err);
        });
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.sentModal();
  },
};
</script>
