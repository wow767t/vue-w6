<template>
  <h2>{{ name }}</h2>
  {{ temp }}
  <CheckoutModal />
</template>

<script>
import CheckoutModal from '@/components/CheckoutModal.vue';
// mitt
import mitt from 'mitt';

const emitter = mitt();

export default {
  components: {
    CheckoutModal,
  },
  data() {
    return {
      name: 'test',
      temp: '..',
    };
  },
  methods: {},
  mounted() {
    emitter.on('mitt-temp', (data) => {
      console.log('mitt-on', data);
    });
  },
};
</script>
