import Vue from 'vue';
import VueRouter from 'vue-router';

// Make sure vue is using the router
Vue.use(VueRouter);

// Initialize VueRouter
export default new VueRouter({
  routes:[
    {
      path:'/',
      name: 'home',
      component: resolve => require(['./pages/Home.vue'], resolve)
    },
    {
      path:'/create',
      name: 'create',
      component: resolve => require(['./pages/Create.vue'], resolve),
      redirect: { name: 'create.goal' },
      children: [
        {
          path: 'goal',
          name: 'create.goal',
          component: resolve => require(['./pages/Goal.vue'], resolve),
        },
        {
          path: 'metrics',
          name: 'create.metrics',
          component: resolve => require(['./pages/Metrics.vue'], resolve),
        },
        {
          path: 'actions',
          name: 'create.actions',
          component: resolve => require(['./pages/Actions.vue'], resolve),
        }
      ]
    }
  ]
});