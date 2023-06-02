<template>
  <div>
    <ul class="nav nav-pills">
      <router-link tag="li" active-class="active" to="/" exact>
        <a>Home</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/User">
        <a>User</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/UserEdit/1">
        <a>UserEdit 1</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/UserEdit/2">
        <a>UserEdit 2</a>
      </router-link>
      <!-- <li role="presentation" class="active">
        <router-link to="/">Home</router-link>
      </li>-->
      <!-- <li role="presentation">
        <router-link to="/User">User</router-link>
      </li>-->
    </ul>
  </div>
</template>
