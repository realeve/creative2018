<template>
    <div class="section">
        <div class="slide green-section">
            <div class="wrap">
                <h4>二、质量数据管理平台</h4>
                <p class="content">让数据栩栩如生</p>
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <h4>1.基于开源技术的自主开发平台</h4>
                <div class="content">
                    <ol>
                        <li>服务端：
                            <strong>Restful</strong>数据接口设计、
                            <strong>JWT</strong>无状态数据接口身份管理、PHP7（ThinkPHP)、
                            <strong>NodeJS</strong>（阿里巴巴
                            <strong>Egg.js</strong>框架）</li>
                        <li>前端：
                            <strong>ES6/ES7</strong>、
                            <strong>ajax</strong>动态刷新、目前最流行的
                            <strong>MVVM</strong>技术栈（Facebook 开源
                            <strong>React</strong>响应式框架、Redux状态管理、React-router路由管理、React-Redux、Redux-saga异步流控制）、阿里巴巴Ant Design设计体系（
                            <strong>Ant Design</strong>、Ant Design Pro、DVA、UMI）</li>
                        <li>解决方案：
                            <strong>github</strong>代码管理、
                            <strong>Webpack</strong>源码打包、Babel转码、谷歌PWA(渐进式应用开发)应用模型</li>
                        <li>数据可视化：百度开源可视化库
                            <strong>Echarts</strong>
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        <div class="slide light-section">
            <div class="wrap">
                <h4>2.传统的报表系统</h4>
                <div class="content">
                    传统的报表平台操作繁琐、功能单一。
                </div>
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section02/20.png" class="full-img" alt="改进与优化">
            </div>
        </div>

        <!-- <v-page content='<img src="/static/img/section02/20.png" class="full-img"  alt="改进与优化">' /> -->

        <div class="slide light-section">
            <div class="wrap">
                <h4>全业务覆盖</h4>
                <div class="content">
                    <p>以实现强大基础功能的前提下，我们实现了所有报表加载时间控制在
                        <strong>1秒</strong>以内，同时也保证了系统的模块化实现。</p>
                    <p>系统涉及的业务也覆盖了成钞公司从钞纸到印钞的各个工艺流程，
                        <span class="underline">各部门领导、工艺管理人员、机检管理人员、班长、机长</span>等均能找到所关注的数据。</p>
                    <p>借助于机台作业系统的数据，我们不仅实现了质量和生产信息的整合，同时对
                        <span class="underline">印版、油墨</span>等辅助料的信息也能做到汇总与追溯。</p>
                </div>
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <h4>2.数据可视化——以可视化数据驱动决策</h4>
                <div class="content">
                    <p>传统的数据系统中对数据可视化的功能支持较为单一，通过2015年一年以来的深入学习，我们将
                        <strong>百度的开源数据可视化库ECharts</strong>广泛应用到了成钞的生产应用中。</p>

                    <blockquote class="margin-top-20">除了公司的主业生产外，我们也尝试将数据可视化应用到了公司或行业的其它方面，比如人民银行反假宣传月的数据可视化大屏、公司内部的活动等。</blockquote>
                </div>
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section02/02.jpg" class="full-img" alt="品质成钞两周年">
            </div>
        </div>

        <!-- <v-page fill="true" content='<img src="/static/img/section02/02.jpg" class="full-img" alt="品质成钞两周年">' /> -->

        <!-- <v-page content='<img src="/static/img/section02/10.png" class="full-img" alt="数据可视化在生产上的应用">' /> -->

        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section02/10.png" class="full-img" alt="数据可视化在生产上的应用">
            </div>
        </div>

        <v-chart content='(1)钞纸机检' :option="option.paperFakeDistribute" />

        <v-chart content='(2)钞纸机检' :option="option.fakeType" />
        <v-chart content='(3)钞纸工艺质量' :option="option.paperWeight" />
        <!-- <v-page fill="true" title="直方图的应用——纸张定量分布测定" content='<img src="/static/img/section02/12.png" alt="直方图的应用——纸张定量分布测定">' /> -->

        <v-page content='<img src="/static/img/section02/13.png" class="full-img" alt="直方图的应用——更均匀分布的定量指标">' />

        <v-page content='<img src="/static/img/section02/14.png" class="full-img" alt="过程质量控制图——物理指标控制在上下限以内">' />

        <v-chart content='(5)印码工序' :option="option.code" />
        <v-chart content='(6)机检开包量' :option="option.openNum" />
        <v-chart content='(7)清分机废票' :option="option.qfj" />

        <div class="slide">
            <div class="wrap">
                <h4>通用性</h4>
                <div class="content">
                    <blockquote>
                        <p>为了保证报表和图表模块的通用性，我们对系统功能实现了良好的模块化封装，
                            <strong>实现了通过三步非常简单的操作便能添加一项新的报表或图表功能</strong>。
                        </p>
                        <p>在成钞公司目前运行的质量数据平台中共包含了500多张报表或图表，全部都基于以上模块实现，
                            <strong>没有编写额外的多余代码</strong>。</p>
                    </blockquote>
                </div>
            </div>
            <arc-line :fill="'#222'"></arc-line>
        </div>

    </div>
</template>

<script>
import option from "../lib/option/section2";

export default {
  data() {
    return {
      option
    };
  }
};
</script>