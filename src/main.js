import { createApp } from 'vue'
import Vuex from "vuex"
import App from '@/App.vue'
import Auth from "@/store/auth"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
 import {router} from "@/router";


let app = createApp(App);
 app.config.globalProperties.Auth = Auth;

app.use(router);
app.use(Vuex);
app.mount('#app');

