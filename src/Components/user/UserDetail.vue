<template>
  <div>
    <h3>Some User Details</h3>
    <hr>
    <div class="alert alert-info">parameter form url is : {{ $route.params.id }}</div>
    <hr>
    <router-link :to="'/user/edit/'+$route.params.id" class="btn btn-warning">Edit User</router-link>
    <router-link
      :to="{name:'editUser', params:{id:$route.params.id}}"
      class="btn btn-warning"
    >Edit User</router-link>
    <router-link :to="link" class="btn btn-warning">Edit User with query</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "editUser",
        params: { id: this.$route.params.id },
        // query: { name: "mohammad", family: "ordookhani" },
        hash: "#link"
      }
    };
  }
};
</script>
