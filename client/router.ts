import { Router } from "@vaadin/router";

const router = new Router(document.querySelector(".root"));

router.setRoutes([
  { path: "/", component: "home-page" },
  { path: "/signup", component: "signup-page" },
  { path: "/login", component: "login-page" },
  { path: "/profile", component: "my-profile" },
]);
