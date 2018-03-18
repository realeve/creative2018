<template>
    <div class="section">
        <div class="slide dark-section">
            <div class="wrap">
                <h4>三、数据深度应用</h4>
                <div class="content">
                    以数据驱动决策
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <div class="content">
                    <h4>1.实时监控与推送</h4>
                    <p>我们通过提高数据采集频率实现了信息的实时监测，同时借助于ajax技术将异常信息通过腾讯通实时推送到桌面。</p>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section03/01.png" class="full-img" alt="消息推送">
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section03/02.png" class="full-img" alt="远程控制">
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section03/02-2.png" class="full-img" alt="在线监测">
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section03/03.png" class="full-img" alt="在线监测">
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section03/04.png" class="full-img" alt="在线监测">
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <div class="content">
                    <h4>2.助推扁平化管理</h4>
                    <p>2017年，我们又基于前面提到的数据平台开发了《工艺质量管理平台》，通过与数据平台的整合，实现了全流程信息的无缝沟通。</p>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/query/01.png" class="full-img" alt="全流程信息追溯">
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/query/02.png" class="full-img" alt="全流程信息追溯">
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/query/03.png" class="full-img" alt="全流程信息追溯">
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/query/04.png" class="full-img" alt="全流程信息追溯">
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/query/05.png" class="full-img" alt="全流程信息追溯">
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/query/06.png" class="full-img" alt="全流程信息追溯">
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/query/07.png" class="full-img" alt="全流程信息追溯">
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <div class="content">
                    <h4>3.智能数据分析</h4>
                    <p>通过对成钞公司生产与质量信息的整合与应用中，我们对相应的系统有了更深入的了解，
                        <strong>对于许多涉及技术层面的更深层次数据分析，我们采用了自动化的方式来实现标准化管理。</strong>
                    </p>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section02/18.png" class="full-img" alt="机检数据自动分析">
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section03/19.png" class="full-img" alt="机检数据自动分析">
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <div class="content">
                    <h4>4.辅助领导决策</h4>
                    <p>近几年来，成钞公司质量管理工作中
                        <a href="./static/img/section03/siyin.html" target="_blank">有许多决策都是基于数据的深度分析来决定</a>，在此期间，数据可视化技术起到了非常重要的作用。</p>
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section03/05.png" class="full-img" alt="机检数据自动分析">
            </div>
            <arc-line :fill="'#c0392b'"></arc-line>
        </div>

    </div>
</template>

<script>
import option from "../lib/option/section3";
export default {
  data() {
    return {
      option
    };
  }
};
</script>