<template>
  <h2>add edit dele item</h2>
  <AdminNav/>
  <!-- <router-link to="/admin-products">Products Database</router-link> | -->
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th style="vertical-align: middle" scope="col"></th>
          <th style="vertical-align: middle" scope="col">品名</th>
          <th style="vertical-align: middle" scope="col">分類</th>
          <th style="vertical-align: middle" scope="col">原價</th>
          <th style="vertical-align: middle" scope="col">折扣價</th>
          <th style="vertical-align: middle" scope="col">上架</th>
          <th style="vertical-align: middle" scope="col">
            <button type="button" class="btn btn-outline-primary">add item</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <th scope="row">
            <div>
              <img
                :style="{ backgroundImage: `url(${product.imageUrl})` }"
                style="
                  height: 80px;
                  width: 80px;
                  background-size: cover;
                  background-position: center center;
                "
                alt=""
              />
            </div>
          </th>
          <td style="vertical-align: middle">{{ product.title }}</td>
          <td style="vertical-align: middle">{{ product.category }}</td>
          <td style="vertical-align: middle">{{ product.origin_price }}</td>
          <td style="vertical-align: middle">{{ product.price }}</td>
          <td style="vertical-align: middle ">
            <div class="form-check form-switch">
              <input
              v-model="product.is_enabled" :true-value="1" :false-value="0"
              class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
              <label class="form-check-label" for="flexSwitchCheckChecked"
                ></label>
            </div>
          </td>
          <td style="vertical-align: middle">
            <div class="btn-group">
              <button type="button" class="btn btn-outline-warning">edit</button>
              <button
                @click="productCRUD('delete', product.id)"
                type="button"
                class="btn btn-outline-danger"
              >
                delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pages @to-page="getProductsPage" :pages="pagination" />
  </div>
</template>

<script>
import Pages from '@/components/Pagination.vue';
import AdminNav from '@/components/AdminNav.vue';

const url = process.env.VUE_APP_URL;
const path = process.env.VUE_APP_PATH;
export default {
  components: {
    Pages, AdminNav,
  },
  data() {
    return {
      products: [],
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
    getProductsPage(page = 1) {
      this.$http
        .get(`${url}api/${path}/admin/products?page=${page}`)
        .then((res) => {
          // console.log(res);
          const { products, pagination } = res.data;
          this.products = products;
          this.pagination = pagination;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    // CRUD button
    productCRUD(type, id) {
      // console.log(type, id);
      // https://vue3-course-api.hexschool.io/v2/api/scott/admin/product/-MvTfje8NLr8gqphXNqH
      const baseURL = `${url}api/${path}/admin/product`;
      if (type === 'add') {
        console.log(type);
      } else if (type === 'delete') {
        this.$http
          .delete(`${baseURL}/${id}`)
          .then((res) => {
            console.log(res);
            console.log(res.data.message);
            this.getProductsPage();
          })
          .catch((err) => {
            console.error(err);
          });
      }
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
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = myCookie;
    this.checkUser();
    this.getProductsPage();
  },
};
</script>
