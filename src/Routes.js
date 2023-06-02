import Home from "./Components/Home.vue";


//import User from "./Components/user/User.vue";
// import UserEdit from "./Components/user/UserEdit.vue";
// import UserStart from "./Components/user/UserStart.vue";
// import UserDetail from "./Components/user/UserDetail.vue";

var User = resolve => {
  require.ensure(['./Components/user/User.vue'], () => {
    resolve(require('./Components/user/User.vue'));
  });
};

var UserEdit = resolve => {
  require.ensure(['./Components/user/UserEdit.vue'], () => {
    resolve(require('./Components/user/UserEdit.vue'));
  });
};

var UserStart = resolve => {
  require.ensure(['./Components/user/UserStart.vue'], () => {
    resolve(require('./Components/user/UserStart.vue'));
  });
};

var UserDetail = resolve => {
  require.ensure(['./Components/user/UserDetail.vue'], () => {
    resolve(require('./Components/user/UserDetail.vue'));
  });
};


export const Routes = [{
    path: "/",
    component: Home
  },
  {
    path: "/User",
    component: User,
    children: [{
        path: "",
        component: UserStart
      },
      {
        path: "edit/:id",
        component: UserEdit,
        name: "editUser",
        beforeEnter: (to, from, next) => {
          console.log('enter in route user edit ....');
          next();
        }
      },
      {
        path: "detail/:id",
        component: UserDetail
      }
    ]
  },
  {
    path: '/404',
    redirect: '/'
  },
  {
    path: '*',
    redirect: '/404'
  }
];
