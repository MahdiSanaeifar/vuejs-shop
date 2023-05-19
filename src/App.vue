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
    <hr>
    <div class="row">
      <div class="col-md-12">
        <button class="btn btn-success" @click="GetUsers">Get Users</button>
        <br>
        <br>
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="user in Users"
            :key="user.Email"
          >{{ user.UserName }} - {{ user.Email }}</li>
        </ul>
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
      },
      Users: [],
      resource: {}
    };
  },
  methods: {
    submitForm() {
      // this.$http.post("User.json", this.User).then(
      //   response => {
      //     console.log(response);
      //   },
      //   error => {
      //     console.log(error);
      //   }
      // );

      // this.resource.save({}, this.User);
      this.resource.SaveUser(this.User);
    },
    GetUsers() {
      this.$http
        .get("User.json")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resutlArray = [];
          for (let key in data) {
            resutlArray.push(data[key]);
          }
          this.Users = resutlArray;
        });
    }
  },
  created() {
    const customActions = {
      SaveUser: { url: "User.json", method: "POST" },
      EditUser: { url: "Car.json", method: "PUT" }
    };

    this.resource = this.$resource("User.json", {}, customActions);
  }
};
</script>
