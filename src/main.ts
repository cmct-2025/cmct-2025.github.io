// import { createApp } from 'vue'
import "./style.scss";
import App from "./App.vue";
import { routes } from "./router";
import { ViteSSG } from "vite-ssg";

// createApp(App)
//   .use(router)
//   .mount('#app')

export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({}) => {
    // install plugins etc.
  }
);
