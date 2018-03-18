<template>
  <div class="section about">
    <div class="wrap">
      <h4>背景</h4>
      <div class="typed">
        <span id="type1"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";

export default {
  computed: {
    typeStatus() {
      return this.$store.state.typeStatus;
    }
  },
  watch: {
    typeStatus() {
      this.init();
    }
  },
  methods: {
    init() {
      new Typed("#type1", {
        strings: [
          `2014年，码后核查工艺在成钞公司不断推进，多机型不同数据结构的机检系统并行，给机检管理带来了许多不便。<br><br>
           2015年，借着行业第三届统计分析报告的契机，我们开始了《印钞机检大数据分析与应用探讨》，提出了在成钞公司印钞机检数据应用的方案。<br><br>
           2016至2017年，我们针对公司印钞、钞纸两大专业自主开发了质量信息管理平台，其功能涵盖到了钞纸和印钞生产的所有流程，极大提升了质量管理的效率。<br><br>
           2018年，在总公司行业青年双创平台的基础上，我们将系统中核查功能模块分离出来，打造更具通用性的数据平台。`
        ],
        shuffle: true,
        typeSpeed: 40
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>