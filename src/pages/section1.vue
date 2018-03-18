<template>
    <div class="section">
        <div class="slide blue-section">
            <div class="wrap">
                <h4>一、系统整体介绍</h4>
                <p class="content">由各类
                    <strong>开源技术</strong>搭建起的质量信息管理平台</p>
            </div>
        </div>
        <v-chart :option="option.infoIsland" />

        <!-- <div class="slide">
            <div class="wrap">
                <h4>系统主要构架</h4>
                <div class="content" style="width:75%">
                    <img src="/static/img/section01/info.svg" alt="系统构架" width="100%" height="100%">
                </div>
            </div>
        </div> -->
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section01/info.svg" class="full-img" alt="系统构架" width="100%" height="100%">
            </div>
        </div>

        <!-- <v-page title="系统主要内容" content='<img src="/static/img/section01/info.svg" alt="系统构架" width="100%" height="100%">' /> -->

        <div class="slide light-section">
            <div class="wrap">
                <h4>基于ThinkPHP的数据管理平台</h4>
                <div class="content">
                    <p>通过对外部开源技术的吸收，目前的数据管理平台达到了
                        <strong>当需要与数据库交互时无需编写服务端代码</strong> 的效果，极大提升了开发效率。</p>

                    <blockquote class="margin-top-20">
                        该平台在成钞已接入生产、质量、机台作业等13个系统，同时也已经在公司多个子系统中多次使用。
                    </blockquote>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section01/infopub.jpg" class="full-img" alt="工艺质量管理平台">
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section01/kpi.jpg" class="full-img" alt="部门履职能力评价">
            </div>
        </div>

        <!-- <v-page title="" content='<img src="/static/img/section01/infopub.jpg" alt="工艺质量管理平台">' /> -->

        <!-- <v-page title="部门履职能力评价系统" content='<img src="/static/img/section01/kpi.jpg" alt="部门履职能力评价">' /> -->

        <div class="slide light-section">
            <div class="wrap">
                <h4>基于ThinkPHP的数据管理平台</h4>
                <div class="content">
                    <blockquote class="margin-top-20">
                        <p>数据管理平台主要面向于开发者，涵盖了主流的mysql/oracle/SQL Server三大数据库。</p>
                        <p>目前已经完成该部分功能的重构并开源在
                            <strong>github</strong>上，另外基于NodeJS方案(阿里巴巴Egg.js框架)的API管理模块也基本完成。</p>
                    </blockquote>
                </div>
            </div>
            <arc-line :fill="'#4fc08d'"></arc-line>
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