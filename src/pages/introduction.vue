<template>
  <div class="section">
    <div class="slide white-text">
      <div class="wrap">
        <v-galaxy/>
        <h4>背景</h4>
        <p class="content">
          <!-- 它的发展与公司对质量管理的要求息息相关(从
          <strong>数据驱动型质量管理模式</strong>到
          <strong>质量精细化管理</strong>直到今年的
          <strong>质量提升年</strong>)， -->
          本系统是自主开发完成。主要解决了四个问题：
        </p>
        <ol class="text-left">
          <li>整合现有的系统或数据库，连接
            <strong>数据孤岛</strong> (2014-2015)
          </li>
          <li>质量管理中的
            <strong>报表和图表</strong> (2016)
          </li>
          <li>
            <strong>工艺质量</strong>管理的信息传递 (2017)</li>
          <li>用质量信息控制
            <strong>产品物流</strong> (2018)
          </li>
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
      <arc-line :fill="'#0e0e2a'"></arc-line>
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