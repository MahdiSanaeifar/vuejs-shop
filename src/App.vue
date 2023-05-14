<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="bordered">
          <h1>{{ msg }}</h1>
          <hr>
          <a class="btn btn-success" @click="selectedComponent='app-component-1'">component 1</a>
          <a class="btn btn-success" @click="selectedComponent='app-component-2'">component 2</a>
          <hr>

          <keep-alive>
            <component :is="selectedComponent">
              <template v-if="selectedComponent=='app-component-1'">
                <div slot="header">
                  <h2>{{title1}}</h2>
                  <p>{{title1}}</p>
                </div>
                <p slot="paragraph">test</p>
                <div slot="footer">
                  <h3>sent footer</h3>
                </div>
              </template>

              <template v-if="selectedComponent=='app-component-2'">
                <div slot="header">
                  <h2>{{title2}}</h2>
                  <p>{{title2}}</p>
                </div>
                <p slot="paragraph">test</p>
                <div slot="footer">
                  <h3>sent footer</h3>
                </div>
              </template>
            </component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
export default {
  data() {
    return {
      msg: "this is the main component",
      title1: "title for component 1",
      title2: "title for component 2",
      selectedComponent: "app-component-1"
    };
  },
  components: {
    "app-component-1": Component1,
    "app-component-2": Component2
  }
};
</script>

<style scoped>
.bordered {
  border: 2px solid red;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  background-color: lightgray;
}
</style>

