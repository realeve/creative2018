<template>
    <div class="section">
        <div class="slide white-text">
            <div class="wrap">
                <v-galaxy/>
                <h4>一、质量数据管理平台</h4>
                <p class="content">让数据栩栩如生</p>
            </div>
        </div>

        <!-- <div class="slide">
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
        </div> -->

        <!-- <div class="slide light-section">
            <div class="wrap">
                <h4>2.传统的报表系统</h4>
                <div class="content">
                    传统的报表平台操作繁琐、功能单一。
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section02/jtzy.png" class="full-img" alt="传统的报表系统">
            </div>
        </div> -->
        <!-- <div class="slide">
            <div class="wrap white-bg">
                <h4>1.传统的报表系统</h4>
                <img src="/static/img/section02/jtzy2.png" class="full-img" alt="传统的报表系统">
            </div>
        </div> -->

        <!-- <div class="slide light-section">
            <div class="wrap">
                <h4>统一的报表参数</h4>
                <div class="content">
                    <a href="http://localhost/qualitytable?tid=77&fixheader=0&tstart=20170501&tend=20170530" target="_blank">
                        提取印制行业报表的共有属性————时间</a>
                </div>
            </div>
        </div> -->

        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section02/daterange.png" class="full-img">
            </div>
        </div>

        <div class="slide light-section">
            <div class="wrap">
                <iframe src="/static/plan/table.html" class="full-page" frameborder="0"></iframe>
            </div>
        </div>

        <!-- <div class="slide">
            <div class="wrap">
                <img src="/static/img/section01/1.png" class="full-img">
            </div>
        </div> -->

        <!-- <div class="slide">
            <div class="wrap">
                <img src="/static/img/section02/20.png" class="full-img">
            </div>
        </div> -->
        <!-- <v-page content='<img src="/static/img/section02/20.png" class="full-img"  alt="改进与优化">' /> -->

        <div class="slide">
            <div class="wrap">
                <h4>2.数据可视化——以可视化数据驱动决策</h4>
                <blockquote>采用
                    <strong>百度开源数据可视化库ECharts</strong>，实现了20多种图表的模块化封装。</blockquote>
            </div>
        </div>

        <!-- <div class="slide">
            <div class="wrap">
                <img src="/static/img/section02/10.png" class="full-img" alt="数据可视化在生产上的应用">
            </div>
        </div -->
        <div>
            <div>
                <v-chart content='(1)钞纸机检' :option="option.paperFakeDistribute" />
                <v-chart content='(2)钞纸机检' :option="option.fakeType" />
            </div>
            <div>
                <v-chart content='(3)钞纸机检' :option="option.paperWeight" />
                <v-chart content='(4)钞纸工艺质量' :option="option.physicIndex" />
            </div>
            <div>
                <v-chart content='(5)印码工序' :option="option.code" />
                <v-chart content='(6)机检开包量' :option="option.openNum" />
            </div>
        </div>
        <!-- <v-page content='<img src="/static/img/section02/13.png" class="full-img" alt="直方图的应用——更均匀分布的定量指标">' /> -->
        <!-- <v-page content='<img src="/static/img/section02/14.png" class="full-img" alt="过程质量控制图——物理指标控制在上下限以内">' /> -->
        <!-- <v-chart content='(2)钞纸机检' :option="option.paperWeight2" /> -->
        <!-- <div class="slide">
            <div class="wrap">
                <img src="/static/img/section02/13.png" class="full-img" alt="直方图的应用——更均匀分布的定量指标">
            </div>
        </div> -->
        <!-- <div class="slide">
            <div class="wrap">
                <img src="/static/img/section02/14.png" class="full-img" alt="过程质量控制图——物理指标控制在上下限以内">
            </div>
        </div> -->

        <!-- <div class="slide">
            <div class="wrap">
                <h4>3.模块化实现</h4>
                <div class="content">
                    <blockquote>
                        通过模块化的设计，保证了系统功能的快速开发迭代。
                    </blockquote>
                </div>
            </div>
        </div> -->

        <div class="slide light-section">
            <div class="wrap">
                <h4>3.全业务覆盖</h4>
                <div class="content">
                    <strong>600个接口</strong>实现成钞公司印钞和钞纸质量管理的各个业务点
                </div>
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section01/info.svg" class="full-img" alt="系统构架">
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <h4>4.与印制行业深度结合的特色功能</h4>
                <div class="content">
                    <ol style="margin-top:0">
                        <li>钞纸、印钞
                            <strong>全流程</strong>信息追溯，车号/冠号信息
                            <strong>批量追溯</strong>
                        </li>
                        <li>钞纸
                            <strong>检测指标</strong>范围动态分析</li>
                        <li>印钞产品
                            <strong>缺陷图像</strong>快速在线查看</li>
                        <li>印钞质量
                            <strong>实时监控与智能预警</strong>
                        </li>
                        <li>核查产品
                            <strong>作废情况智能分析</strong>
                        </li>
                        <li>
                            <strong>机检漏废</strong>原因自动分析</li>
                        <li>质量信息
                            <strong>每日实时推送</strong>
                        </li>
                        <li>...</li>
                    </ol>
                </div>
            </div>
            <arc-line :fill="'#0e0e2a'"></arc-line>
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