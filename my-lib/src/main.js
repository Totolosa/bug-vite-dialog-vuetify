// import * as components from "./components/index.js";

// const install = (app) => {
//   // Register all components
//   Object.entries(components).forEach(([componentName, component]) => {
//     app.component(componentName, component);
//   });
// };

// const plugin = {
//   install,
// };

// export default plugin;


// import { createApp }: from "vue";
// import { createVuetify } from "vuetify";

// const vuetify = createVuetify();

import {Test} from "@/components/index.js"

const MyComponentLibrary = {
  install: (app) => {
    app.component("Test", Test);
  },
};

export { MyComponentLibrary}
