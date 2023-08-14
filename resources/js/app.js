import { createApp } from 'vue/dist/vue.esm-bundler.js'
import store from './store';
import Survey from "./Pages/Survey.vue";
import AllSurveys from "./Pages/AllSurveys.vue";


const app = createApp({});

app.use(store);
app.component('Survey', Survey);
app.component('AllSurveys', AllSurveys);

app.mount('#app');


