<template>
  <div class="section page">
    <video v-if="mobile" class="up_video" loop muted autoplay data-autoplay>
      <source src="../../static/video/theme.mp4" type="video/mp4">
    </video>
    <div class="wrap">
      <!-- <Flower/> -->
      <p class="tip" style="right:-20px;">按
        <span class="key">F11</span> 键全屏<br>
        <span class="key">↑</span>
        <span class="key">↓</span>
        <span class="key">←</span>
        <span class="key">→</span> 翻页</p>
      <div class="title">
        <div class="main_title">
          <h3>青年“创新创业”成果汇报</h3>
          <h2>成钞公司质量管理系统开发与应用</h2>
          <small>成都印钞有限公司 李宾</small>
        </div>
        <!-- <small class="footer">成都印钞有限公司</small> -->
      </div>
    </div>
  </div>
</template>

<script>
import Flower from "./flower";
export default {
  components: {
    Flower
  },
  // name: 'main',
  data() {
    return {
      mobile: process.env.NODE_ENV != "mobile"
    };
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/cnFont/lvjiande.css";

.up_video {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.content {
  z-index: 4;
}

.title {
  flex-direction: column;
  display: flex;
}

.main_title {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  flex: 1;
  // margin-left: 30%;
  width: 100%;
  .content;
  small {
    color: #fff;
    font-size: 16pt;
    border: 1px #fff solid;
    padding: 5px 10px;
    border-radius: 4px;
    position: absolute;
    bottom: 40px;
    // left: 40%;
  }
  h3 {
    // font-family: "lvjiande";
    font-size: 30pt;
    // background-image: -webkit-gradient(
    //   linear,
    //   0 0,
    //   right 0,
    //   from(#008aff),
    //   to(#40e4d5)
    // );
    // // #7f00ff, #e100ff
    // -webkit-background-clip: text;
    // background-clip: text;
    // -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
  h2 {
    // font-family: "lvjiande";
    font-size: 40pt;
    padding: 0 0 70px 0;
    margin-top: 40px;
  }
}

.footer {
  .content;
  text-align: center;
  margin-bottom: 10px;
  a {
    text-decoration: none;
    color: #fff;
    font-weight: 100;
    font-size: 14pt;
  }
}
</style>
