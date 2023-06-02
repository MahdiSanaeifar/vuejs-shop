<template>
  <div>
    <h1>The User Page</h1>
    <button class="btn btn-success" @click="GoToHome">Go To Home</button>
  </div>
</template>

<script>
export default {
  methods:{
    GoToHome(){
      this.$router.push('/');
    }
  }
}
</script>
