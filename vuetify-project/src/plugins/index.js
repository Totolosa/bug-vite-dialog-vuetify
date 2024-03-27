/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'

import lib from "my-lib";

export function registerPlugins (app) {
  app.use(vuetify)
  app.use(lib)
}
