<template>
  <div>
    <h1>The User Page</h1>
    <button class="btn btn-success" @click="GoToHome">Go To Home</button>
    <hr>
    <transition enter-active-class="animated fadeIn">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      UserIds: this.$route.params.id
    };
  },
  methods: {
    GoToHome() {
      this.$router.push("/");
    }
  }
};
</script>
