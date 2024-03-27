/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'

// import {vuetify, MyComponentLibrary} from "my-lib";
import { MyComponentLibrary} from "my-lib";

export function registerPlugins (app) {
  app.use(vuetify)
  app.use(MyComponentLibrary)
}
