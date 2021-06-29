import { createRouter, createWebHistory } from "vue-router";
import EventList from "../views/EventList.vue";
import EventDetails from "@/views/EventDetails.vue";
import About from "../views/About.vue";
//check change commit
const routes = [{
        path: "/",
        name: "EventList",
        component: EventList,
    },
    {
        path: "/event/:id",
        name: "EventDetails",
        //now we can send in route params as component props
        props: true,
        component: EventDetails
    },
    {
        path: "/about",
        name: "About",
        component: About
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;