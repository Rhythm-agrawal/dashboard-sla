import { createApp } from "vue";
import App from "./App.vue";
import HighchartsVue from "highcharts-vue";

import "./assets/main.css";

const app = createApp(App);

// Use the HighchartsVue plugin, register <highcharts> component
app.use(HighchartsVue);

// Mount the application
app.mount("#app");
