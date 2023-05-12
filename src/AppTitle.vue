<template>
    <h1 class="test">{{ title }}</h1>

</template>


<script>
export default {
    data: function () {
        return {
            title: 'This is my custom title!'
        }
    }
}
</script>

<style scoped>
    .test  {
        background-color: red;
    }
</style>