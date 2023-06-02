<template>
  <div>
    <h3>Edit the User</h3>
    <hr>
    <p class="alert alert-success">{{ LoadedId }}</p>
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
