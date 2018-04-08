<template>
  <div class="section page">
    <video v-if="mobile" class="up_video" loop muted autoplay data-autoplay>
      <source src="../../static/video/theme.mp4" type="video/mp4">
    </video>
    <div class="wrap">
      <p class="tip">按
        <span class="key">F11</span> 键全屏<br><span class="key">↑</span> <span class="key">↓</span> <span class="key">←</span> <span class="key">→</span> 翻页</p>
      <div class="title">
        <div class="main_title">
          <h2>青年“创新创业”课题报告</h2>
          <h3>成钞公司质量管理系统开发与应用</h3>
          <small>印钞管理部 李宾</small>
        </div>
        <!-- <small class="footer">成都印钞有限公司</small> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.main_title {
  text-align: center;
  flex: 1;
  // margin-left: 30%;
  margin-top: 20%;
  width: 100%;
  .content;
  small {
    color: #fff;
    font-size: 22pt;
    padding: 0;
  }
  h2 {
    font-family: "lvjiande";
    font-size: 50pt;
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
  h3 {
    font-family: "lvjiande";
    font-size: 70pt;
    padding: 0 0 70px 0;
    margin-top:40px;
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
