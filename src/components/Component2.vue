<template>
  <div class="alert alert-success">
    <h1>this is component 2</h1>
    <hr>
    <slot name="paragraph"></slot>

    <slot name="header"></slot>
    <hr>
    <slot name="footer">
      <h3>this is default value for footer</h3>
    </slot>
  </div>
</template>

<script>
export default {
  activated() {
    console.log("component 2 is activated");
  },
  deactivated() {
    console.log("component 2 is deactivated");
  }
};
</script>
