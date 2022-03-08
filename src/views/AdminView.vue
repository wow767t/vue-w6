<template>
  <h2>Admin</h2>
  <div class="container">
    <AdminNav />
    <!-- <router-link to="/admin-products">Products Database</router-link> | -->
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav.vue';

export default {
  components: {
    AdminNav,
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
