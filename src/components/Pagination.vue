<template>
  <nav aria-label="Page navigation example" class="mt-4">
  <ul class="pagination">
    <li class="page-item">
      <a @click.prevent="openPage(pages.current_page-1)"
      class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for="num in pages.total_pages" :key="num"
    @click.prevent="openPage(num)"
    class="page-item"><a class="page-link" href="#">{{num}}</a></li>
    <li class="page-item">
      <a @click.prevent="openPage(pages.current_page+1)"
      class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'Pages',
  props: ['pages'],
  emits: ['to-page'],
  data() {
    return {
      pagesData: {},
    };
  },
  methods: {
    openPage(page) {
      console.log('page', page);
      this.$emit('to-page', page);
    },
  },
};
</script>
