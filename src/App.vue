<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Routing</h1>
        <app-header></app-header>
        <hr>
        <transition enter-active-class="animated fadeIn">
          <router-view></router-view>
        </transition>
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
