import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入Login.vue组件
import Login from '@/components/Login.vue'

// 导入布局组件
import Index from '@/components/Index'

// 导入课程组件
import Course from '@/components/Course'

import Tree from '@/components/TestTree'

import Select from '@/components/TestSelect'

import Radio from '@/components/Radio'


Vue.use(VueRouter);

  const routes = [
    // 访问 / 也要跳转 到login
    {
      path:"/",
      //redirect:"/login"  // 重定向login
      redirect:"/index"
    },

    // 登录路由
    {
      path:"/login",
      name:"login",
      component:Login
    },

    // 布局路由
    {
      path:"/index",
      name:"index",
      component:Index,

      // 添加子路由，使用 children属性 来表示子路由
      children:[
        // 课程信息子路由
        {
          path:"/course",
          name:"course",
          component:Course
        },
        {
          path:"/tree",
          name:"tree",
          component:Tree
        },
        {
          path:"/select",
          name:"select",
          component:Select
        },
        {
          path:"/radio",
          name:"radio",
          component:Radio
        }
      ]
    }
];

const router = new VueRouter({
  routes
})

export default router
