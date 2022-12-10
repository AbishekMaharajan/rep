import $ from "dom7";
import Framework7 from "framework7/bundle";

// Import F7 Styles
import "framework7/css/bundle";

// Import Icons and App Custom Styles
import "../css/icons.css";
import "../css/app.css";

import routes from "./routes.js";
import store from "./store.js";
import App from "../app.f7.jsx";
const app = new Framework7({
  name: "App", // App name
  theme: "auto", // Automatic theme detection
  el: "#app", // App root element
  component: App, // App main component
  store: store, //store
  routes: routes, //router
});
