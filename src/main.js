import { createApp } from 'vue';
import bootstrap from 'bootstrap';

// axios
import axios from 'axios';
import VueAxios from 'vue-axios';
// isLoading
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
app.use(bootstrap);
app.use(VueLoading);
app.mount('#app');
