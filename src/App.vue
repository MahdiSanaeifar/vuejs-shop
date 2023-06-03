<template>
  <div class="container">
    <h1>Vuex</h1>
    <hr>
    <app-result></app-result>
    <hr>
    <h2>another result</h2>
    <another-result></another-result>
    <hr>
    <app-counter></app-counter>
  </div>
</template>

<script>
import Counter from "./Components/Counter";
import Result from "./Components/Result";
import AnotherResult from "./Components/AnotherResult";
export default {
  components: {
    appCounter: Counter,
    appResult: Result,
    anotherResult: AnotherResult
  }
};
</script>
