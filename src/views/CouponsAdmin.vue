<template>
  <h2>Coupons</h2>
  <AdminNav />
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th style="vertical-align: middle" scope="col"></th>
          <th style="vertical-align: middle" scope="col">優惠卷名稱</th>
          <th style="vertical-align: middle" scope="col">兌換碼</th>
          <th style="vertical-align: middle" scope="col">折扣</th>
          <th style="vertical-align: middle" scope="col">數量</th>
          <th style="vertical-align: middle" scope="col">有效期限</th>
          <th style="vertical-align: middle" scope="col">是否啟用</th>
          <th style="vertical-align: middle" scope="col">
            <button
            @click="openModal"
            type="button" class="btn btn-outline-primary">新增優惠卷</button>
            </th>
          <th style="vertical-align: middle" scope="col">
            <button @click="deleItemAll" type="button" class="btn btn-light">del all</button>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coupon in coupons" :key="coupon.id">
          <th scope="row"></th>
          <td style="vertical-align: middle">{{ coupon.title }}</td>
          <td style="vertical-align: middle">{{ coupon.code }}</td>
          <td style="vertical-align: middle">{{ coupon.percent }}</td>
          <td style="vertical-align: middle">{{ coupon.num }}</td>
          <td style="vertical-align: middle">{{ coupon.due_date }}</td>
          <td style="vertical-align: middle">{{ coupon.is_enabled }}</td>
          <td style="vertical-align: middle">
            <button type="button" class="btn btn-outline-warning">啟用編輯</button>
          </td>
          <td style="vertical-align: middle">
            <button type="button" class="btn btn-light">del</button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{{}}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
    <!-- <Pages /> -->
  </div>
  <AddCoupon
  @emit-modal="getModal"
  />
</template>

<script>
// import Pages from '@/components/Pagination.vue';
import AdminNav from '@/components/AdminNav.vue';
import AddCoupon from '@/components/AddCoupon.vue';

const url = process.env.VUE_APP_URL;
// const path = process.env.VUE_APP_PATH;
export default {
  components: {
    // Pages,
    AdminNav,
    AddCoupon,
  },
  data() {
    return {
      coupons: [],
      pagination: {},
      modal: '',
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
          this.$router.place('/');
        });
    },
    getCoupons() {
      // https://vue3-course-api.hexschool.io/v2/api/scott/admin/coupons?page=1
      this.$http
        .get('https://vue3-course-api.hexschool.io/v2/api/scott/admin/coupons?page=1')
        .then((res) => {
          console.log(res);
          this.coupons = res.data.coupons;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // get checkout modal & open modal
    getModal(obj) {
      this.modal = obj;
    },
    openModal() {
      this.modal.show();
    },
  },
  mounted() {
    const myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = myCookie;
    this.checkUser();
    this.getCoupons();
  },
};
</script>
