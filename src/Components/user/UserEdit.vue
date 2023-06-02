<template>
  <div>
    <h3>Edit the User</h3>
    <hr>
    <p class="alert alert-success">Loaded id is : {{ LoadedId }}</p>
    <hr>
    <div class="myDiv"></div>
    <router-link to="/404" class="btn btn-success" id="link">404</router-link>
    <div class="myDiv"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LoadedId: this.$route.params.id,
      IsConfirmed: false
    };
  },
  watch: {
    $route(to, from) {
      this.LoadedId = to.params.id;
    }
  },
  beforeRouteEnter(to, from, next) {
    next();
  },
  beforeRouteLeave(to, from, next) {
    this.IsConfirmed = confirm('آیا مطمین هستین؟');
    if (this.IsConfirmed) {
      next();
    } else {
      next(false);
    }
  }
};
</script>

<style>
.myDiv {
  height: 900px;
  background-color: aliceblue;
}
</style>
