<template>
  <div>
    <main-page/>
    <Content/>
    <div class="section white-text">
      <div class="wrap">
        <v-galaxy/>
        <h4>背景</h4>
        <p class="content">
          本系统是根据公司质量管理需要自主开发完成。主要解决了四个问题：
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

    <v-chart :option="option1.infoIsland" :fill="'#313640'" />

    <div class="section light-section">
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

    <!-- <section1/> -->
    <div class="section white-text">
      <div class="wrap">
        <v-galaxy/>
        <h4>一、质量数据管理平台</h4>
        <p class="content">让数据栩栩如生
        </p>
      </div>
    </div>

    <div class="section">
      <div class="wrap">
        <img src="/static/img/section02/daterange.png" class="full-img">
      </div>
    </div>

    <div class="section light-section">
      <div class="wrap">
        <iframe src="/static/plan/table.html" class="full-page" frameborder="0"></iframe>
      </div>
    </div>

    <div class="section">
      <div class="wrap">
        <img src="/static/img/error/e1.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div>
    <div class="section">
      <div class="wrap">
        <img src="/static/img/error/e2.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div>

    <div class="section">
      <div class="wrap">
        <h4>2.数据可视化——以可视化数据驱动决策</h4>
        <blockquote>采用
          <strong>百度开源数据可视化库ECharts</strong>，实现了20多种图表的模块化封装。</blockquote>
      </div>
    </div>

    <div class="section">
      <div class="chart-gallery">
        <div class="chart-gallery-item">
          <t-chart content='(1)钞纸机检' :option="option.paperFakeDistribute" />
          <t-chart content='(2)钞纸机检' :option="option.fakeType" />
        </div>
        <div class="chart-gallery-item">
          <t-chart content='(3)钞纸机检' :option="option.paperWeight" />
          <t-chart content='(4)钞纸工艺质量' :option="option.physicIndex" />
        </div>
        <div class="chart-gallery-item">
          <t-chart content='(5)印码工序' :option="option.code" />
          <t-chart content='(6)机检开包量' :option="option.openNum" />
        </div>
      </div>
    </div>

    <div class="section">
      <div class="chart-gallery">
        <div class="chart-gallery-item">
          <t-chart content='(1)墨色分析' :option="option.inkAnay" />
          <t-chart content='(2)钞纸机检' :option="option.errCart" />
        </div>
        <div class="chart-gallery-item">
          <t-chart content='(3)钞纸机检' :option="option.errCart2" />
          <t-chart content='(4)钞纸工艺质量' :option="option.radar" />
        </div>
        <div class="chart-gallery-item">
          <t-chart content='(5)印码工序' :option="option.treemap" />
          <t-chart content='(6)机检开包量' :option="option.pareto" />
        </div>
      </div>
    </div>

    <div class="section light-section">
      <div class="wrap">
        <h4>3.模块化与组件化</h4>
        <div class="content">
          <strong>600个接口</strong>覆盖成钞公司印钞和钞纸各个业务点
        </div>
      </div>
    </div>

    <div class="section">
      <div class="wrap">
        <img src="/static/img/section01/info.svg" class="full-img" alt="系统构架">
      </div>
    </div>

    <div class="section">
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
          </ol>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="wrap">
        <img src="/static/img/section03/02-2.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div>
    <div class="section">
      <div class="wrap">
        <img src="/static/img/section03/03.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div>

    <!-- <div class="section">
      <div class="wrap">
        <img src="/static/img/section03/04.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div> -->

    <!-- <div class="section">
      <div class="wrap">
        <img src="/static/img/section03/04-2.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div> -->

    <div class="section">
      <div class="wrap">
        <img src="/static/img/section03/02.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div>
    <!-- <div class="section">
      <div class="wrap">
        <img src="/static/img/section03/20.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div> -->
    <!-- <div class="section">
      <div class="wrap">
        <img src="/static/img/section02/slider.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div> -->

    <!-- <section2/> -->
    <div class="section white-text">
      <div class="wrap">
        <v-galaxy/>
        <h4>二、工艺质量管理平台</h4>
        <p class="content">以问题为导向的PDCA管理模式</p>
      </div>
    </div>

    <div class="section">
      <div class="wrap white-bg">
        <h4>工艺质量管理过程中关注的问题</h4>
        <div class="content">
          <ol>
            <li>信息沟通的
              <strong>及时性</strong>
            </li>
            <li>工序间信息的
              <strong>有效传递</strong>
            </li>
            <li>
              问题
              <strong>及时关闭</strong>
            </li>
          </ol>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="wrap">
        <img src="/static/img/section01/infopub.jpg" class="full-img" alt="工艺质量管理平台">
      </div>
    </div>

    <div class="section light-section">
      <div class="wrap">
        <h4>1.消息自动推送</h4>
        <!-- <div class="content">
          <ul>
            <li>
              <strong>发布信息</strong>时，系统自动实时推送到责任人的桌面。</li>
            <li>
              <strong>进度更新</strong>时，系统自动实时推送,所有人员都能查看实施进度。</li>
          </ul>
        </div> -->
      </div>
    </div>
    <div class="section">
      <div class="wrap">
        <img src="/static/img/section03/01.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div>
    <div class="section light-section">
      <div class="wrap">
        <h4>2.工序间信息有效传递</h4>
        <div class="content">
          <ol>
            <li>
              <strong>覆盖所有用户</strong>：涉及
              <strong>印钞、钞纸</strong>相关部门的工艺、机检、班组长、部门领导、公司分管领导等160余人。</li>
            <li>
              <strong>系统间的高度整合</strong>：涉及的印钞车号和钞纸轴号自动关联到数据平台，方便查看原始信息。</li>
          </ol>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="wrap">
        <img src="/static/img/query/01.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div>
    <div class="section">
      <div class="wrap">
        <img src="/static/img/query/02.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div>
    <div class="section">
      <div class="wrap">
        <img src="/static/img/query/03.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div>
    <!-- <div class="section">
            <div class="wrap">
                <img src="/static/img/query/04.png" class="full-img" alt="工艺质量管理平台">
            </div>
        </div> -->
    <!-- <div class="section">
            <div class="wrap">
                <img src="/static/img/query/05.png" class="full-img" alt="工艺质量管理平台">
            </div>
        </div> -->

    <div class="section">
      <div class="wrap">
        <img src="/static/img/query/06.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div>
    <div class="section">
      <div class="wrap">
        <img src="/static/img/query/07.png" class="full-img" alt="工艺质量管理平台">
      </div>
    </div>

    <!-- <div class="section light-section">
            <div class="wrap">
                <h4>3.基于问题导向的管理</h4>
                <div class="content">
                    <ol>
                        <li>每项问题独立页面，实时跟踪，及时关闭。</li>
                        <li>根据质量管理的要求灵活设置分类模块：比如有
                            <strong>自下而上</strong>的《工艺质量隐患排查》(由机台人员自发参与)，也有
                            <strong>自上而下</strong>的《质量隐患整改通知》、《质量问题发布》等。</li>
                    </ol>
                </div>
            </div>
        </div> -->

    <!-- <div class="section">
      <div class="wrap">
        <h4>管理与信息的融合</h4>
        <div class="content">
          <blockquote>
            质量数据管理平台解决了
            <strong>数据信息</strong>的问题，<br> 工艺质量管理平台解决了
            <strong>文字信息</strong>的问题。<br> 通过信息技术与质量管理的有机结合，让成钞的质量管理工作更加高效运行。
          </blockquote>
        </div>
      </div>
      <arc-line :fill="'#0e0e2a'"></arc-line>
    </div> -->

    <bipage/>
    <!-- <section3/> -->
    <div class="section white-text">
      <div class="wrap">
        <v-galaxy/>
        <h4>四、工艺流转跟踪系统</h4>
        <div class="content">
          用大数据思维指导质量管理
        </div>
      </div>
    </div>
    <!-- <div class="section">
      <div class="wrap white-bg">
        <h4>背景</h4>
        <div class="content">
          <blockquote>前序的工作中我们实现了
            <strong>信息流</strong>(数据信息和文字信息)的有效传递，尚未对
            <strong>物流</strong>做任何控制，这也是我司2018“质量提升年”的工作方向。</blockquote>
        </div>
      </div>
    </div> -->

    <div class="section">
      <div class="wrap white-bg">
        <h4>背景</h4>
        <div class="content">
          <p>本部分的工艺流转跟踪系统主要解决三个问题。</p>
          <ol>
            <li>人工大张
              <strong>随机抽检</strong>难以覆盖所有印刷机台</li>
            <li>码后入立体库
              <strong>(四新产品)</strong>的调度
            </li>
            <li>机台将
              <strong>生产异常信息</strong>随大万通知到质量管理人员</li>
          </ol>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="wrap">
        <h4>1.人工大张抽检自动排号</h4>
        <p>从随机抽检到
          <strong>自动优选</strong>
        </p>
        <!-- <div class="content">
          <blockquote>经过2018年前12周的测试，实际抽检量仅比理论值多
            <strong>0.5车/周</strong>。</blockquote>
        </div> -->
      </div>
    </div>

    <div class="section">
      <div class="wrap">
        <img src="/static/img/section03/06.png" class="full-img" alt="工艺调度">
      </div>
    </div>

    <div class="section">
      <div class="wrap">
        <h4>2.四新/异常品管理</h4>
        <ol>
          <li>工艺人员发布
            <strong>四新计划</strong>
          </li>
          <li>调度系统后台处理任务，并向立体库发起
            <strong>调度指令</strong>
          </li>
          <li>系统根据四新任务完成情况
            <strong>实时跟踪、自动汇总</strong>
          </li>
        </ol>
      </div>
    </div>

    <div class="section">
      <div class="wrap">
        <img src="/static/img/section03/07.png" class="full-img" alt="工艺调度">
      </div>
    </div>

    <div class="section">
      <div class="wrap">
        <h4>3.生产异常信息跟踪</h4>
        <blockquote>
          机台人员发布信息(连续废、质量异常等)，当工序信息变更时实时推送给
          <strong>机检人员、工艺人员</strong>。
        </blockquote>
      </div>
    </div>

    <div class="section">
      <div class="wrap">
        <h4>迈向智能制造</h4>
        <div class="content">通过质量信息对物流的智能控制，我们可以根据前工序的生产情况
          <strong>控制产品流转</strong>，实现成钞公司在
          <strong>智能制造</strong>中的初步探索。</div>
      </div>
      <arc-line :fill="'#0e0e2a'"></arc-line>
    </div>
    <!-- <section4/> -->
    <div class="section white-text">
      <div class="wrap">
        <v-galaxy/>
        <h4>五、总结与规划</h4>
      </div>
    </div>
    <div class="section">
      <div class="wrap white-bg">
        <h4>1.总结</h4>
        <div class="content">
          <ol>
            <li>新技术的学习(
              <strong>jQuery、Vue.js、React.js、Node.js</strong>)。</li>
            <li>质量管理的重要工具。</li>
            <li>
              <span class="underline">数据采集和使用部分，各企业存在一定差异</span>,在2015年的行业统计分析报告中有详细的说明，此处不展开讨论。</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="section light-section">
      <div class="wrap">
        <h4>2.下一步计划</h4>
        <div class="content">
          <ol>
            <li>
              <strong>质量信息与物流</strong>的深度融合。</li>
            <li>
              <strong>细致的数据采集</strong>，比如凹印在线检测数据。</li>
            <li>
              <strong>重构数据系统</strong>，剥离核心业务，使其更易于推广应用(目前已基本完成)。</li>
          </ol>
        </div>
      </div>
    </div>
    <thanks/>
  </div>
</template>

<script>
import $ from "jquery";
import "fullpage.js";

import MainPage from "../pages/main";
import Introduction from "../pages/introduction";
import Content from "../pages/content";

// import section1 from "../pages/section1";
// import section2 from "../pages/section2";
import bipage from "../pages/bipage";
// import section3 from "../pages/section3";
// import section4 from "../pages/section4";

import Thanks from "../components/Thanks";

import option1 from "../lib/option/section1";
import option from "../lib/option/section2";
import TChart from "../components/Tinychart.vue";

export default {
  name: "page",
  components: {
    MainPage,
    Introduction,
    // section1,
    // section2,
    // section3,
    // section4,
    bipage,
    Thanks,
    Content,
    TChart
  },
  data() {
    return {
      option1,
      option
    };
  },
  computed: {
    el() {
      return $(this.$el);
    },
    // page初始化
    isInited: {
      get() {
        return this.$store.state.inited;
      },
      set(val) {
        this.$store.commit("setInitStatus", val);
      }
    },
    // 第二页打字效果初始化
    typeStatus: {
      get() {
        return this.$store.state.typeStatus;
      },
      set(val) {
        this.$store.commit("initTyped", val);
      }
    },
    tips: {
      get() {
        return this.$store.state.tips;
      },
      set(val) {
        this.$store.commit("setTips", val);
      }
    }
  },
  methods: {
    getAnchors() {
      let pages = {
        data: [1, 1, 3, 14, 11, 1, 8, 2, 2],
        desc: [
          "home",
          "content",
          "prePage",
          "1stPage",
          "2ndPage",
          "biPage",
          "3rdPage",
          "4thPage",
          "lastPage"
        ]
      };
      let anchors = [];
      pages.data.map(function(val, idx) {
        anchors.push(pages.desc[idx]);
        for (var i = 1; i < val; i++) {
          anchors.push("");
        }
      });
      return anchors;
    },
    setCurIdx(sectionIdx, slideIdx) {
      // let slideNum = $(`.section:nth(${sectionIdx - 1})`).find(".slide").length;
      // this.tips = slideNum > 1 ? `${slideIdx + 1}/${slideNum}` : "";
      this.tips = `${sectionIdx}/${$(".section").length}`;
    },
    init() {
      let params = {
        verticalCentered: true,
        css3: true,
        navigation: false,
        anchors: this.getAnchors(),
        menu: "#nav",
        easing: "easeInOutCubic",
        loopHorizontal: false,
        afterLoad: (anchorLink, index) => {
          // if (index == 2 && !this.typeStatus) {
          //   this.typeStatus = true;
          // }
          if (anchorLink === "lastPage") {
            this.$store.commit("initCanvas", true);
          }
          this.setCurIdx(index, 0);
        },
        afterSlideLoad: (anchorLink, index, slideAnchor, slideIndex) => {
          this.setCurIdx(index, slideAnchor);
        }
      };

      this.el.fullpage(params);
    }
  },
  mounted() {
    if (this.isInited) {
      return;
    }
    this.isInited = true;
    this.init();
  }
};
</script>

<style scoped lang="less">
.chart-gallery {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  .chart-gallery-item {
    width: 33.3%;
    height: 50vh;
  }
}
.black-bg {
  background: #0e0e2a; // rgb(41, 45, 62);
  color: #eee;
}

// .section {
//   .wrap {
//     .black-bg;
//     blockquote {
//       .black-bg;
//     }
//   }
// }
</style>
