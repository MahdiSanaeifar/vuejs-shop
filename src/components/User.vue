<template>
  <div>
    <p>current UserName is : {{ UserName }}</p>
    <a @click="ChangeUserName" class="btn btn-success">ChangeUserName</a>
    <p>parent User.name is :{{ User.name }}</p>
    <p>user age in parent is : {{ Age }}</p>
    <hr>
    <user-first
      :user="User"
      :changeNameFn="changeNameInParent"
      :name="UserName"
      @changeName="changeNameByChild"
      :userAge="Age"
    ></user-first>
    <user-second :userAge="Age" :ChangeAge="changeAgeInParent"></user-second>
  </div>
</template>

<script>
import UserFirstChild from "./UserFirstChild.vue";
import UserSecondChild from "./UserSecondChild.vue";
export default {
  data: function() {
    return {
      UserName: "Mohammad",
      User: {
        name: "elnaz",
        family: "farhmand"
      },
      Age: 22
    };
  },
  components: {
    "user-first": UserFirstChild,
    "user-second": UserSecondChild
  },
  methods: {
    ChangeUserName: function() {
      this.UserName = "Iman";
    },
    changeNameByChild: function(event) {
      this.UserName = event;
    },
    changeNameInParent: function() {
      this.UserName = "changed in parent component";
    },
    changeAgeInParent() {
      this.Age = 25;
    }
  }
};
</script>
