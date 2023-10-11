import { createApp } from "vue";
import routes from "./testingproject/routes/index";
import App from "./App.vue";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(pinia).use(routes).mount("#app");
