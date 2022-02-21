import Vue from 'vue'
import Router from "vue-router";

Vue.use(Router);

// 导入组件模块
const home = () => import('../pages/home')

const routes = [
    { 
      path: "/", 
      redirect: "/home" 
    },
    {
      path: "/home",
      name: "home",
      component: home
    }
  ];
  const router = new Router({
    routes
  })
//   router.beforeEach((to, from, next) => {
//     if (to.meta.title) {
//       //判断是否有标题
//       console.log(to.meta.title);
//       document.title = to.meta.title;
//     }
//     NProgress.start();
//     next();
//   });
//   router.afterEach((to, from) => {
//     NProgress.done(); // 结束Progress
//   });
  export default router