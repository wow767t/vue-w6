<template>
  <div class="container border">
    <h2>Products List Page</h2>
    <div class="row row-cols-4 g-5">
      <div v-for="product in products" :key="product.id" class="col">
        <div class="card" style="width: 18rem">
          <img
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
            style="height: 250px; backgroundSize: cover; backgroundPosition: center center"
          />
          <div class="card-body">
            <h5 class="card-title">{{ product.title }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <button @click="addToCart(product.id)" type="button"
            class="btn btn-primary">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  <Pages @to-page="getProductsPage"
    :pages="pagination"/>
  </div>
</template>

<script>
import Pages from '@/components/Pagination.vue';

const url = process.env.VUE_APP_URL;
const path = process.env.VUE_APP_PATH;

export default {
  components: {
    Pages,
  },
  data() {
    return {
      products: [],
      pagination: {},
    };
  },
  methods: {
    getProductsPage(page = 1) {
      this.$http
        .get(`${url}api/${path}/products?page=${page}`)
        .then((res) => {
          console.log(res);
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
          console.log(res.data.message);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
  mounted() {
    this.getProductsPage();
  },
};
</script>
