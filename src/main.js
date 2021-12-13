import {createApp} from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faTwitter, faGithub, faGitlab, faDiscord, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import Home from "@/views/Home";
import Clients from "@/views/Clients";
import {createRouter, createWebHistory} from 'vue-router'

library.add(faTwitter, faGithub, faGitlab, faDiscord, faLinkedin)

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
    {path: '/', component: Home},
    {path: '/clients', component: Clients},
    {path: '/:pathMatch(.*)*', name: 'not-found', component: Home},
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(VueGtag, {
        config: {id: "UA-144368994-1"}
    })
    .mount('#app')
