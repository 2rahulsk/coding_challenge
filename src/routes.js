import UserDetails from './UserDetails.vue';
import Main from './Main.vue';

export const routes = [
  {path:'/userDetails',name:'userDetails',component: UserDetails},
  {path:'/',name:'main',component: Main}
];
