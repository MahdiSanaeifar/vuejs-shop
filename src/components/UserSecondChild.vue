<template>
  <div class="col-md-6">
    <div class="border-child">
      <p>user age in parent is : {{ userAge }}</p>
      <a @click="ChangeAge" class="btn btn-success">change Age</a>
    </div>
    <div class="clearfix"></div>
  </div>
</template>

<script>
export default {
  props: {
    userAge: Number,
    ChangeAge: Function
  }
};
</script>


