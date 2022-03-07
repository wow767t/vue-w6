import { createApp } from 'vue';
import bootstrap from 'bootstrap';
// mitt
import mitt from 'mitt';
// axios
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(mitt);
app.use(VueAxios, axios);
app.use(router);
app.use(bootstrap);
app.mount('#app');
