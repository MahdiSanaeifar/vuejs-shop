<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Routing</h1>
        <app-header></app-header>
        <hr>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Components/Header";
export default {
  components: {
    appHeader: Header
  }
};
</script>
