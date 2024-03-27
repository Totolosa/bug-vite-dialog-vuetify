import * as components from "./components/index.js";

const install = (app) => {
  // Register all components
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};

const plugin = {
  install,
};

export default plugin;