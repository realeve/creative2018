<template>
    <div class="section">
        <div class="slide white-text">
            <div class="wrap">
                <v-galaxy/>
                <h4>四、工艺分流调度系统</h4>
                <div class="content">
                    用大数据思维指导质量管理
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap white-bg">
                <h4>背景</h4>
                <div class="content">
                    <blockquote>前序的工作中我们实现了
                        <strong>信息流</strong>(数据信息和文字信息)的有效传递，尚未对
                        <strong>物流</strong>做任何控制，这也成为了2018年“质量提升年”的一个工作方向。</blockquote>

                </div>
            </div>
        </div>

        <div class="slide">
            <div class="wrap white-bg">
                <h4>背景</h4>
                <div class="content">
                    <p>本部分的工艺分流调度系统主要解决两个问题。</p>
                    <ol>
                        <li>人工大张随机抽检难以覆盖所有印刷机台</li>
                        <li>成钞公司综合立体库试运行后对
                            <strong>码后核查工艺分流产品(“四新产品”)的调度</strong>
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <h4>1.人工大张抽检自动排号</h4>
                <div class="content">
                    <blockquote>针对随机抽检难以覆盖所有机台的问题，我们设计了算法(风险最低/效率优先)实现了所有印刷工序机台的全覆盖。<br>经过2018年前12周的测试，实际抽检量仅比理论值多
                        <strong>0.5车/周</strong>。</blockquote>
                </div>
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section03/06.png" class="full-img" alt="工艺调度">
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <h4>2.质量系统对产品库的控制</h4>
                <ol>
                    <li>工艺人员
                        <strong>发布工艺分流任务</strong>(四新/异常品)</li>
                    <li>调度系统后台处理任务</li>
                    <li>调度系统向立体库发起调度指令</li>
                </ol>
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <img src="/static/img/section03/07.png" class="full-img" alt="工艺调度">
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <h4>迈向智能制造</h4>
                <div class="content">通过质量信息对物流的智能控制，让我们可以
                    <strong>根据前工序的生产情况自动决定产品后续的走向</strong>，实现成钞公司在智能制造中的初步探索。</div>
            </div>
            <arc-line :fill="'#0e0e2a'"></arc-line>
        </div>

    </div>
</template>