<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th style="vertical-align: middle" scope="col"></th>
          <th style="vertical-align: middle" scope="col">品名</th>
          <th style="vertical-align: middle" scope="col">數量</th>
          <th style="vertical-align: middle" scope="col">單價</th>
          <th style="vertical-align: middle" scope="col">總計</th>
          <th style="vertical-align: middle" scope="col">
            <button @click="deleItemAll" type="button" class="btn btn-light">del all</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in cart" :key="product.id">
          <th scope="row">
            <div>
              <img
                :style="{ backgroundImage: `url(${product.product.imageUrl})` }"
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
          <td style="vertical-align: middle">{{ product.product.title }}</td>
          <td style="vertical-align: middle">{{ product.qty }}</td>
          <td style="vertical-align: middle">{{ product.product.price }}</td>
          <td style="vertical-align: middle">{{ product.final_total }}</td>
          <td style="vertical-align: middle">
            <button @click="deleItem(product.id)" type="button" class="btn btn-light">del</button>
          </td>
        </tr>
      </tbody>
      <tfoot v-show="cart.length">
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{{ orderPrice }}</td>
          <td>
            <button @click="openModal" type="button" class="btn btn-outline-danger">結帳</button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
  <CheckoutModal @emit-modal="getModal" />
</template>

<script>
import CheckoutModal from '@/components/CheckoutModal.vue';

const url = process.env.VUE_APP_URL;
const path = process.env.VUE_APP_PATH;

export default {
  components: {
    CheckoutModal,
  },
  data() {
    return {
      cart: [],
      modal: '',
      // temp for test
      orderPrice: 0,
    };
  },
  methods: {
    getCart() {
      // https://vue3-course-api.hexschool.io/v2/api/scott/cart
      this.$http
        .get(`${url}api/${path}/cart`)
        .then((res) => {
          console.log(res);
          this.cart = res.data.data.carts;
          this.orderPrice = res.data.data.final_total;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // dele item (id)
    deleItem(id) {
      console.log('del', id);
      // https://vue3-course-api.hexschool.io/v2/api/scott/cart/-Mv8ZqixeQddTQSAcdoI
      this.$http
        .delete(`${url}api/${path}/cart/${id}`)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // dele item all
    deleItemAll() {
      this.$http
        .delete(`${url}api/${path}/carts`)
        .then((res) => {
          console.log(res);
          console.log(res.data.message);
          this.getCart();
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    // get checkout modal & open modal
    getModal(obj) {
      this.modal = obj;
    },
    openModal() {
      this.modal.show();
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
    this.getCart();
  },
};
</script>
