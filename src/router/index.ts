import Layout from '@/layout/index.vue'
import i18n from '@/locales/i18n'
import Home from '@/views/Home/index.vue'
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

export const configRoutes = {
  path: '/lottery/config',
  name: 'Config',
  component: () => import('@/views/Config/index.vue'),
  children: [
    {
      path: '',
      redirect: '/lottery/config/person',
    },
    {
      path: '/lottery/config/person',
      name: 'PersonConfig',
      component: () => import('@/views/Config/Person/PersonConfig.vue'),
      meta: {
        title: i18n.global.t('sidebar.personConfiguration'),
        icon: 'person',
      },
      children: [
        {
          path: '',
          redirect: '/lottery/config/person/all',
        },
        {
          path: '/lottery/config/person/all',
          name: 'AllPersonConfig',
          component: () => import('@/views/Config/Person/PersonAll.vue'),
          meta: {
            title: i18n.global.t('sidebar.personList'),
            icon: 'all',
          },
        },
        {
          path: '/lottery/config/person/already',
          name: 'AlreadyPerson',
          component: () => import('@/views/Config/Person/PersonAlready.vue'),
          meta: {
            title: i18n.global.t('sidebar.winnerList'),
            icon: 'already',
          },
        },
        // {
        //     path:'other',
        //     name:'OtherPersonConfig',
        //     component:()=>import('@/views/Config/Person/OtherPersonConfig.vue'),
        //     meta:{
        //         title:'其他配置',
        //         icon:'other'
        //     }
        // }
      ],
    },
    // {
    //   path: '/lottery/config/prize',
    //   name: 'PrizeConfig',
    //   component: () => import('@/views/Config/Prize/PrizeConfig.vue'),
    //   meta: {
    //     title: i18n.global.t('sidebar.prizeConfiguration'),
    //     icon: 'prize',
    //   },
    // },
    // {
    //   path: '/lottery/config/global',
    //   name: 'GlobalConfig',
    //   redirect: '/lottery/config/global/all',
    //   meta: {
    //     title: i18n.global.t('sidebar.globalSetting'),
    //     icon: 'global',
    //   },
    //   children: [
    //     {
    //       path: '/lottery/config/global/face',
    //       name: 'FaceConfig',
    //       component: () => import('@/views/Config/Global/FaceConfig.vue'),
    //       meta: {
    //         title: i18n.global.t('sidebar.viewSetting'),
    //         icon: 'face',
    //       },
    //     },
    //     {
    //       path: '/lottery/config/global/image',
    //       name: 'ImageConfig',
    //       component: () => import('@/views/Config/Global/ImageConfig.vue'),
    //       meta: {
    //         title: i18n.global.t('sidebar.imagesManagement'),
    //         icon: 'image',
    //       },
    //     },
    //     {
    //       path: '/lottery/config/global/music',
    //       name: 'MusicConfig',
    //       component: () => import('@/views/Config/Global/MusicConfig.vue'),
    //       meta: {
    //         title: i18n.global.t('sidebar.musicManagement'),
    //         icon: 'music',
    //       },
    //     },
    //   ],
    // },
    // {
    //   path: '/lottery/config/readme',
    //   name: 'Readme',
    //   component: () => import('@/views/Config/Readme/index.vue'),
    //   meta: {
    //     title: i18n.global.t('sidebar.operatingInstructions'),
    //     icon: 'readme',
    //   },
    // },
  ],
}
const routes = [
  {
    path: '/',
    redirect: '/lottery/home',
  },
  {
    path: '/lottery',
    component: Layout,
    redirect: '/lottery/home',
    children: [
      {
        path: '/lottery/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/lottery/demo',
        name: 'Demo',
        component: () => import('@/views/Demo/index.vue'),
      },
      configRoutes,
    ],
  },
];
const envMode=import.meta.env.MODE;
const router = createRouter({
    // 读取环境变量
  history: envMode==='file'?createWebHashHistory():createWebHashHistory(envMode === 'production' ? '/lottery/' : '/'),
  routes,
})

export default router
