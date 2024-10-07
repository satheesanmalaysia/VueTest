import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// import KnowledgeBase from './views/HomeView';
import router from './router'; 
Vue.use(VueRouter)

new Vue({
	router,
	el: '#app',
	render: h => h(App)
});

// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import KnowledgeBase from './views/KnowledgeBase.vue';
// import CategoryDetails from './views/CategoryDetails.vue';

// Vue.use(VueRouter);

// const routes = [
//   {
//     path: '/',
//     name: 'KnowledgeBase',
//     component: KnowledgeBase,
//   },
//   {
//     path: '/category/:id',
//     name: 'CategoryDetails',
//     component: CategoryDetails,
//   },
// ];

// const router = new VueRouter({
//   mode: 'history',
//   routes,
// });

// export default router;
