require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';


import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import routes from './routes';
require('./main');

Vue.use(VueRouter);

Vue.component(
    'passport-clients',
    require('./components/passport/Clients.vue').default
);

Vue.component(
    'passport-authorized-clients',
    require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
    'passport-personal-access-tokens',
    require('./components/passport/PersonalAccessTokens.vue').default
);

let app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
}).$mount('#app');
