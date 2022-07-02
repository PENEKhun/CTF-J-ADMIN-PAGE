import { createApp } from 'vue'
import Vuex from "vuex"
import App from '@/App.vue'
import Auth from "@/store/auth"
import LoadScript from "vue-plugin-load-script";
import {router} from "@/router";


let app = createApp(App);
 app.config.globalProperties.Auth = Auth;

app.use(LoadScript);
app.use(router);
app.use(Vuex);
app.mount('#app');

