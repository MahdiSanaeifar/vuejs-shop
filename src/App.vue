<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="bordered">
          <h1>{{ msg }}</h1>
          <hr>
          <user-component></user-component>
          <div class="clearfix"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import User from "./components/User.vue";
export default {
  data() {
    return {
      msg: "this is the main component"
    };
  },
  components: {
    "user-component": User
  }
};
</script>

<style scoped>
.bordered {
  border: 2px solid red;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  background-color: lightgray;
}

.bordered h1 {
  text-align: center;
}
</style>

