<template>
  <div class="container ">
    <h2>Products List Page</h2>
    <div class="row
    row-cols-lg-4
    row-cols-md-3
    row-cols-1 g-5">
      <div v-for="product in products" :key="product.id" class="col">
        <div class="card" style="width: 18rem">
          <img
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
            style="height: 250px; backgroundSize: cover; backgroundPosition: center center"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <div class="btn-group">
            <button
            :targetId="product.id"
            @click="openModal(product)" type="button"
            class="btn btn-primary">查看更多
            </button>
            <button @click="addToCart(product.id)" type="button"
            class="btn btn-warning">加入購物車
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  <Pages
    @to-page="getProductsPage"
    :pages="pagination"/>
  </div>
  <ProductModal
    @sent-modal="getModal"
    :product="targetProduct"
  />
</template>

<script>
import Pages from '@/components/Pagination.vue';
import ProductModal from '@/components/ProductModal.vue';

const url = process.env.VUE_APP_URL;
const path = process.env.VUE_APP_PATH;

export default {
  components: {
    Pages, ProductModal,
  },
  data() {
    return {
      products: [],
      targetProduct: [],
      pagination: {},
      modal: '',
    };
  },
  methods: {
    getProductsPage(page = 1) {
      this.$http
        .get(`${url}api/${path}/products?page=${page}`)
        .then((res) => {
          // console.log(res);
          const { products, pagination } = res.data;
          this.products = products;
          this.pagination = pagination;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // 加入購物車
    addToCart(id) {
      const params = {
        data: {
          product_id: id,
          qty: 1,
        },
      };
      this.$http
        .post(`${url}api/${path}/cart`, params)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    // get COMPO modal
    getModal(obj) {
      this.modal = obj;
    },
    // open product modal
    openModal(product) {
      this.modal.show();
      this.targetProduct = product;
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
    this.getProductsPage();
  },
};
</script>
