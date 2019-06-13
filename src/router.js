import {Router} from 'svelte-easyroute-webpack'
import Home from "./views/Home.svelte";
import About from "./views/About.svelte";

export default new Router({
mode: "history", // "hash" or "history"
routes:[
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/about',
        component: About,
        name: 'About'
    }
]
})