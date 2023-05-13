<template>
  <div class="col-md-6">
    <div class="border-child">
      <p>Age from parent is : {{ Age }}</p>
      <a @click="ChangeAge" class="btn btn-success">Change Age</a>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import { BusEvent } from "../main.js";
export default {
  props: {
    _age: Number
  },
  data: function() {
    return {
      Age: this._age
    };
  },
  methods: {
    ChangeAge() {
      this.Age = BusEvent.PublicAge;
      //this.$emit("changeAge", this.Age);
      //BusEvent.$emit("changeAge", this.Age);
      BusEvent.changeAge(BusEvent.PublicAge);
    }
  }
};
</script>


