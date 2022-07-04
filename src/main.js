import { createApp } from 'vue'
import Vuex from "vuex"
import App from '@/App.vue'
import Auth from "@/store/auth"
import LoadScript from "vue-plugin-load-script";
import {router} from "@/router";
import { BootstrapVue3 } from 'bootstrap-vue-3'

 let app = createApp(App);
 app.config.globalProperties.Auth = Auth;

 app.use(BootstrapVue3);
 app.use(LoadScript);
 app.use(router);
 app.use(Vuex);
 app.mount('#app');

