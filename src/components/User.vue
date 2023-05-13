<template>
  <div>
    <p>current age in parent is : {{ Age }}</p>
    <hr>
    <user-first :_age="Age"></user-first>
    <user-second :_age="Age" @changeAge="chageAge"></user-second>
  </div>
</template>

<script>
import UserFirstChild from "./UserFirstChild.vue";
import UserSecondChild from "./UserSecondChild.vue";
export default {
  components: {
    "user-second": UserSecondChild,
    "user-first": UserFirstChild
  },
  data: function() {
    return {
      Age: 22
    };
  },
  methods: {
    chageAge(age) {
      this.Age = age;
    }
  }
};
</script>
