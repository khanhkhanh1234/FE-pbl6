import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("../components/Login.vue"),
          },
        {
            path: "/",
            name: "home",
            component: () => import("../components/UploadImage.vue"),
        },
        {
            path: "/data",
            name: "data",
            component: () => import("../components/DataDetect.vue"),
        },
        {
            path: "/register",
            name: "register",
            component: () => import("../components/Register.vue"),
        },
        {
            path: "/success",
            name: "success",
            component: () => import("../components/Success.vue"),
        },
    ],
});


export default router;
