<template>
  <div class="container">
    <br>
    <div class="row">
      <div class="col-md-12">
        <div class="form-group">
          <label for="UserName">User Name</label>
          <input
            type="text"
            id="UserName"
            class="form-control"
            placeholder="enter user name"
            v-model="User.UserName"
          >
        </div>
        <div class="form-group">
          <label for="UserName">Email</label>
          <input
            type="text"
            id="Email"
            class="form-control"
            placeholder="enter email"
            v-model="User.Email"
          >
        </div>
        <button type="submit" class="btn btn-success" @click="submitForm">Send</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      User: {
        UserName: "",
        Email: ""
      }
    };
  },
  methods: {
    submitForm() {
      this.$http
        .post("https://vue-resource-32d1a.firebaseio.com/User.json", this.User)
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log(error);
          }
        );
    }
  }
};
</script>
