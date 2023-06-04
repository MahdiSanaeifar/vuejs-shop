<template>
  <div>
    <a class="btn btn-success" @click="increment(10)">Increase</a>
    <a class="btn btn-success" @click="decrement(15)">Decrease</a>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["increment", "decrement"])
    // ...mapMutations(["increment", "decrement"])
    // Increase() {
    //   this.$store.commit("increment");
    // },
    // Decrease() {
    //   this.$store.commit("decrement");
    // }
  }
};
</script>
