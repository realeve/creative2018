<template>
  <div class="section">
    <div class="slide blue-gardiant-section">
      <div class="wrap">
        <h4>背景</h4>
        <p class="content">
          随着公司对质量管理要求的不断提升，我们开发了本系统，主要解决了生产质量管理中遇到的四类问题：
        </p>
        <ol class="text-left">
          <li>联结系统之间的数据孤岛</li>
          <li>数据自动采集、统计和分析</li>
          <li>信息及时传递</li>
          <li>用大数据思维指导质量管理</li>
        </ol>
      </div>
    </div>

    <v-chart :option="option.infoIsland" :fill="'#313640'" />

    <div class="slide light-section">
      <div class="wrap">
        <h4>设计方案</h4>
        <div class="content">
          <ul>
            <li>
              <a href="/static/plan/%E9%99%84%E4%BB%B61%EF%BC%9A%E8%B4%A8%E9%87%8F%E6%8E%A7%E5%88%B6%E4%B8%AD%E5%BF%83%E5%BA%94%E7%94%A8%E6%96%B9%E6%A1%88%E8%AE%BE%E8%AE%A1.svg" target="_blank">附件1：数据应用方案</a>
            </li>
            <li>
              <a href="/static/plan/%E9%99%84%E4%BB%B62%EF%BC%9A%E8%B4%A8%E9%87%8F%E6%8E%A7%E5%88%B6%E4%B8%AD%E5%BF%83%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86%E7%8E%B0%E7%8A%B6.svg" target="_blank">附件2：数据采集情况</a>
            </li>
            <li>
              <a href="/static/plan/%E8%B4%A8%E9%87%8F%E4%BF%A1%E6%81%AF%E8%BF%BD%E6%BA%AF.svg" target="_blank">附件3：全流程信息追溯</a>
            </li>
            <li>
              <a href="/static/plan/%E8%B4%A8%E9%87%8F%E4%BF%A1%E6%81%AF%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.svg" target="_blank">附件4：系统功能设计</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- <arc-line :fill="'#24243e'"></arc-line> -->
    </div>
  </div>
</template> 
<script>
import option from "../lib/option/section1";

export default {
  data() {
    return {
      option
    };
  }
};
</script>