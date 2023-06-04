<template>
  <div>
    <h3>doubleCounter is : {{ doubleCounter }}</h3>
    <h3>String Counter is : {{ stringCounter }}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  //props: ["counter"]
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"])
  }
  // {
  //   doubleCounter() {
  //     return this.$store.getters.doubleCounter;
  //   },
  //   stringCount() {
  //     return this.$store.getters.stringCounter;
  //   }
  // }
};
</script>
