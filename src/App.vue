<template>
  <div class="container">
    <h1 id="header">Form</h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <div class="panel panel-primary">
          <div class="panel-heading">Form Inputs :</div>
          <div class="panel-body">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                class="form-control"
                placeholder="enter your email"
                v-model.lazy="user.email"
              >
            </div>
            <div class="form-group">
              <label for="age">Age</label>
              <input
                type="number"
                name="age"
                id="age"
                class="form-control"
                placeholder="enter your age"
                v-model="user.age"
              >
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="enter your password"
                v-model="user.password"
              >
            </div>
            <hr>
            <div class="form-group">
              <label>Message</label>
              <textarea class="form-control" v-model="message"></textarea>
            </div>
            <hr>
            <div class="col-md-4">
              <div class="form-group">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="ReciveMail" v-model="recieveTypes"> Recive Mail
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="ReciveMessages" v-model="recieveTypes"> Recive Messages
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <div class="checkbox">
                  <label>
                    <input type="checkbox" value="ReciveCalls" v-model="recieveTypes"> Recive Calls
                  </label>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <hr>
            <div class="col-md-4">
              <div class="form-group">
                <div class="radio">
                  <label>
                    <input type="radio" value="male" v-model="gender"> Male
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <div class="radio">
                  <label>
                    <input type="radio" value="female" id="ReciveMessages" v-model="gender"> Female
                  </label>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
            <hr>
            <div class="form-group">
              <select id="selectOptions" class="form-control" v-model="selectedPriority">
                <option v-for="item in priorities" :key="item">{{ item }}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="panel panel-primary">
          <div class="panel-heading">Input Results :</div>
          <div class="panel-body">
            <div>
              <span>Email :</span>
              <strong>{{ user.email }}</strong>
            </div>

            <div>
              <span>Age :</span>
              <strong>{{ user.age }}</strong>
            </div>

            <div>
              <span>Password :</span>
              <strong>{{ user.password }}</strong>
            </div>

            <div>
              <span>TextArea Message :</span>
              <strong style="white-space:pre">{{ message }}</strong>
            </div>
            <hr>
            <ul>
              <li v-for="item in recieveTypes" :key="item">{{ item }}</li>
            </ul>
            <hr>
            <div>
              <span>User Gender :</span>
              <strong>{{ gender }}</strong>
            </div>
            <div>
              <span>User Priority :</span>
              <strong>{{ selectedPriority }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        age: 22,
        password: ""
      },
      message: "",
      recieveTypes: [],
      gender: "male",
      priorities: ["high", "medium", "low"],
      selectedPriority: "low"
    };
  }
};
</script>

<style>
#header {
  text-align: center;
}

span {
  color: red;
  font-size: 1.5em;
}

textarea {
  resize: vertical;
}
</style>
