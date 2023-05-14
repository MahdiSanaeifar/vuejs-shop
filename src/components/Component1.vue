<template>
  <div class="alert alert-danger">
    <h1>{{ title }}</h1>
    <a class="btn btn-warning" @click="title='title changed'">change title</a>
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
  data: function() {
    return {
      title: "title in component 1"
    };
  },
  destroyed() {
    console.log("component 1 is destroyed");
  }
};
</script>
