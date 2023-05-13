<template>
  <div class="col-md-6">
    <div class="border-child">
      <p>this is the first child</p>
      <p>parent user name is : {{ name }}</p>
      <p>user.name is :{{ user.name }}</p>
      <a @click="changeUserName" class="btn btn-success">change user.name</a>
      <hr>
      <a @click="changeName" class="btn btn-success">change name</a>
      <a @click="changeNameFn" class="btn btn-success">change name by function in parent</a>
      <hr>
      <p>user age in parent is : {{ userAge }}</p>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    changeNameFn: {
      type: Function
    },
    user: Object,
    userAge: Number
  },
  methods: {
    changeName: function() {
      this.gotName = "changed by function in child";
      this.$emit("changeName", this.gotName);
    },
    changeUserName: function() {
      this.user.name = "changed in child";
    }
  },
  data: function() {
    return {
      gotName: this.name
    };
  }
};
</script>

<style>
.border-child {
  border: 2px solid blue;
  border-radius: 5px;
  padding: 10px;
  background-color: orange;
}
</style>
