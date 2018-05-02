<template>
  <div class="menu-center">
    <v-menu />
    <page/>
    <tips/>
  </div>
</template>

<script>
import VMenu from "./components/Menu";
// import Page from "./components/Page";
import Page from "./components/Onepage";
import Tips from "./components/Tips";

export default {
  components: {
    VMenu,
    Page,
    Tips
  },
  name: "app"
};
</script>

<style lang="less">
@import "./assets/css/reset.css";
@import "./assets/css/typed.css";
@import "./assets/css/slider.less";
@import "./assets/css/fullpage.css";

.menu-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.fp-tableCell {
  height: 100vh !important;
}
</style>
