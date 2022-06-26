import { createRouter, createWebHistory } from "vue-router";
import TableVie from "../views/TableVie.vue";

const routes = [
  {
    path: "/",
    name: "TableVie",
    component: TableVie,
  },
  {
    path: "/user",
    name: "UserView",
    component: () => import("../views/UserView.vue"),
  },
  {
    path: "/table",
    name: "TableVie",
    component: () => import("../views/TableVie.vue"),
  },
  {
    path: "/icon",
    name: "IconView",
    component: () => import("../views/IconView.vue"),
  },
  {
    path: "/datapen",
    name: "DataPen",
    component: () => import("../views/DataPen.vue"),
  },
  {
    path: "/forto",
    name: "FortoVIew",
    component: () => import("../views/FortoView.vue"),
  },
  {
    path: "/me",
    name: "MeView",
    component: () => import("../views/MeView.vue"),
  },
  {
    path: "/hobi",
    name: "HobiView",
    component: () => import("../views/HobiView.vue"),
  },
  {
    path: "/dataadmin",
    name: "DataAdmin",
    component: () => import("../views/DataAdmin.vue"),
  },
  {
    path: "/editadmin/:id",
    name: "EditAdmin",
    component: () => import("../views/EditAdmin.vue"),
  },
  {
    path: "/addadmin",
    name: "AddAdmin",
    component: () => import("../views/AddAdmin.vue"),
  },
  {
    path: "/addpen",
    name: "AddPen",
    component: () => import("../views/AddPen.vue"),
  },
  {
    path: "/editpen/:id",
    name: "EditPen",
    component: () => import("../views/EditPen.vue"),
  },
  {
    path: "/datakepala",
    name: "DataKepala",
    component: () => import("../views/DataKepala.vue"),
  },
  {
    path: "/addkepala",
    name: "AddKepala",
    component: () => import("../views/AddKepala.vue"),
  },
  {
    path: "/editkepala/:id",
    name: "EditKepala",
    component: () => import("../views/EditKepala.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
