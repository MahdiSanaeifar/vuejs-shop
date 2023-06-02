<template>
  <div>
    <h3>Edit the User</h3>
    <hr>
    <p class="alert alert-success">Loaded id is : {{ LoadedId }}</p>
    <hr>
    <router-link to="/404" class="btn btn-success">404</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LoadedId: this.$route.params.id
    };
  },
  watch: {
    $route(to, from) {
      this.LoadedId = to.params.id;
    }
  }
};
</script>
