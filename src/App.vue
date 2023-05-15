<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Create Custom Directives</h1>
        <hr>
        <p v-custom:textcolor.delayed="'yellow'">this paragraph has custom directive</p>
        <hr>
        <p v-test="{color:'blue',padding:'30px',fontSize:'2em'}">this paragraph has local directive</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {},
  directives: {
    test: {
      bind(el, binding, vnode) {
        el.style.padding = binding.value.padding;
        el.style.color = binding.value.color;
        el.style.fontSize = binding.value.fontSize;
        el.style.backgroundColor = "green";
      }
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}
</style>
