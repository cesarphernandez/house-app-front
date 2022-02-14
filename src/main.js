// import Vuetify from 'vuetify'
// import 'vuetify/dist/vuetify.min.css'
import { createApp } from "vue";
import App from "./App.vue";

// Styles
import "@/assets/css/tailwind.css";
import "bootstrap/dist/css/bootstrap.min.css";

import router from "@/router";

createApp(App).use(router).mount("#app");

// new createApp({
//   render: (h) => h(App),
// }).$mount("#app");
