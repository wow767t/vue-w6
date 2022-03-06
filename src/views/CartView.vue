<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">品名</th>
          <th scope="col">數量</th>
          <th scope="col">單價</th>
          <th scope="col">總計</th>
          <th scope="col"></th>
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
            <button @click="deleItem(product.id)" type="button" class="btn btn-light">
              del
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{{ orderPrice }}</td>
          <td>
            <button @click="deleItemAll" type="button" class="btn btn-light">
              del all
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
const url = process.env.VUE_APP_URL;
const path = process.env.VUE_APP_PATH;
export default {
  data() {
    return {
      cart: [],
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
          console.log(res.data.message);
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
  },
  mounted() {
    this.getCart();
  },
};
</script>
