import Home from "./Components/Home.vue";
import User from "./Components/user/User.vue";
import UserEdit from "./Components/user/UserEdit.vue";
import UserStart from "./Components/user/UserStart.vue";
import UserDetail from "./Components/user/UserDetail.vue";

export const Routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/User",
    component: User,
    children: [
      {
        path: "",
        component: UserStart
      },
      {
        path: "edit/:id",
        component: UserEdit,
        name: "editUser"
      },
      {
        path: "detail/:id",
        component: UserDetail
      }
    ]
  },
  {
    path:'/404',
    redirect:'/'
  },
  {
    path:'*',
    redirect:'/404'
  }
];
