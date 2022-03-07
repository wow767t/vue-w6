<template>
  <ul class="nav justify-content-center">
  <li class="nav-item">
    <router-link class="nav-link" to="/admin-products">Products Database</router-link>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Disabled</a>
  </li>
</ul>
</template>

<script>
export default {
  name: 'AdminNav',
};
</script>
