<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Animation & Transition</h1>
        <hr>
        <a class="btn btn-success" @click="showAlert = !showAlert">Show / Hide Alerts</a>
        <div class="col-md-3">
          <select v-model="alertName" class="form-control">
            <option value="fade">fade</option>
            <option value="slide">slide</option>
          </select>
        </div>
        <br>
        <br>
        <!-- <transition :name="alertName" appear>
          <div class="alert alert-info" v-if="showAlert">this is alert</div>
        </transition>

        <transition :name="alertName" type="animation" appear>
          <div class="alert alert-info" v-show="showAlert">this is alert</div>
        </transition>

        <hr>-->
        <transition
          appear
          enter-active-class="animated fadeInUp"
          leave-active-class="animated fadeOutDown"
          mode="out-in"
        >
          <div class="alert alert-info" v-if="showAlert" key="info">this is info alert</div>
          <div class="alert alert-danger" v-else key="danger">this is danger alert</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      showAlert: true,
      alertName: "fade"
    };
  }
};
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: all ease 2s;
}

.fade-leave {
}

.fade-leave-active {
  transition: all ease 2s;
  opacity: 0;
}

.slide-enter {
  /* transform: translateY(40px); */
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 2s ease-in-out;
  transition: all ease 2s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 2s ease-in-out;
  transition: all ease 2s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(40px);
  }
  to {
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(40px);
  }
}
</style>
