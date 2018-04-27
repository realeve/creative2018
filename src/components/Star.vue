<template>
  <div class="galaxy-star" :id="startId"></div>
</template>

<style lang="less">
.galaxy-star {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100vh;
}
</style>
<script>
import Particles from "particles.js";
// import Particles from "./particles.min";
import param from "./particlesSetting";
export default {
  computed: {
    startId() {
      return (
        "star_" +
        Math.random()
          .toString(36)
          .substring(2)
      );
    }
  },
  mounted() {
    particlesJS(this.startId, param);
  }
};
</script>