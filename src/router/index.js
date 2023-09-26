import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '../stores/auth';

const token = localStorage.getItem('accessToken');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    }
  ],
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if(!authStore.isAuthenticated  &&  to.name !== 'home' && !token ){
    return{
      name:'home'
    }
  }
  else{
    return true;
  }

})

export default router;