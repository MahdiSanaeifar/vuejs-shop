import Home from './Components/Home.vue';
import User from './Components/user/User.vue';
import UserEdit from './Components/user/UserEdit.vue';

export const Routes = [{
  path: '/',
  component: Home
}, {
  path: '/User',
  component: User
}, {
  path: '/UserEdit/:id',
  component: UserEdit
}]
