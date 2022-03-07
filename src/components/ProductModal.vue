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
            <span> {{product.title}} </span>
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
              style="width: 500px; height:400px;
              background-position: center center; background-size:cover"
              class="img-fluid" alt="" />
            </div>
            <div class="col-sm-6">
              <span class="badge bg-primary rounded-pill"></span>
              <p>商品描述：{{product.description}}</p>
              <p>商品內容：</p>
              <div class="h5">元</div>
              <del class="h6">原價 {{product.origin_price}} 元</del>
              <div class="h5">現在只要 {{product.price}} 元</div>
              <div>
                <div class="input-group">
                  <input type="number" class="form-control" min="1" />
                  <button
                  @click="open"
                  type="button" class="btn btn-primary">加入購物車
                  </button>
                </div>
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

export default {
  name: 'ProductModal',
  props: ['product'],
  data() {
    return {
      modal: '',
      name: 'scott',
    };
  },
  methods: {
    sentModal() {
      this.$emit('sent-modal', this.modal);
    },
    // get target product by ID
    getProduct() {
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
    this.sentModal();
  },
};
</script>
