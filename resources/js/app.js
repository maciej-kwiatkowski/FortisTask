import { createApp } from 'vue/dist/vue.esm-bundler.js'
import store from './store';

const app = createApp({});

app.use(store);
app.mount('#app');
