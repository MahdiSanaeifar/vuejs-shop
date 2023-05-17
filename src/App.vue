<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ title }}</h1>
        <hr>
        <p>{{ title | toUpper }}</p>
        <p>{{ title | toLower }}</p>
        <p>{{ title | toLower | toUpper }}</p>
      </div>
      <div class="clearfix"></div>
      <hr>
      <div class="form-group">
        <label>filter names :</label>
        <input type="text" class="form-control" v-model="filterText">
      </div>
      <ul>
        <li v-for="name in filteredNames" :key="name">{{ name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "Filters in Vue",
      names: ["mohammad", "milad", "iman", "elnaz", "reza", "shirin"],
      filterText: ""
    };
  },
  filters: {
    toUpper(value) {
      return value.toUpperCase();
    }
  },
  computed: {
    filteredNames() {
      return this.names.filter(element => {
        return element.match(this.filterText);
      });
    }
  }
};
</script>
