import VueRouter from "vue-router";
import Vue from 'vue';
import Welcome from '../Welcome.vue';
import MultiCounter from '../MultiCounter.vue';
import FirstPage from '../FirstPage.vue';
Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {
            path: "/",
            component: FirstPage
        },
        {
            path: "/welcome/:username",
            component: Welcome,
            props: true,
            children: [{
                path: "counter",
                name: "counter",
                component: MultiCounter
            }]
        },

        {
            path: '/todoList', redirect: '/',
            name: "todoList"
        }

    ]


})