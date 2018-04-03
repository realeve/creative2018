<template>
    <div class="section">
        <div class="slide dark-section">
            <div class="wrap">
                <h4>三、工艺分流调度系统</h4>
                <div class="content">
                    用大数据指导质量管理。
                </div>
            </div>
        </div>
        <div class="slide">
            <div class="wrap">
                <h4>背景</h4>
                <div class="content">
                    <blockquote>前序的工作中我们实现了
                        <strong>信息流</strong>(数据信息和文字信息)的有效传递，尚未对
                        <strong>物流</strong>做任何控制，这也成为了2018年“质量提升年”的一个工作方向。本部分的工艺分流调度系统主要解决以下两个问题：</blockquote>
                    <ol class="margin-top-20">
                        <li>码后核查4%人工随机抽检无法覆盖所有印刷机台</li>
                        <li>成钞公司综合立体库试运行后对
                            <strong>码后核查工艺分流产品(“四新产品”)的调度</strong>
                        </li>
                    </ol>
                </div>
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <h4>1.系统自动生成人工抽检产品</h4>
                <div class="content">
                    <blockquote>针对随机抽检无法覆盖所有机台的问题，我们设计了专门的算法(风险最低/效率优先)实现了所有印刷工序机台的全覆盖，经过2018年前12周的测试，每周实际抽检量仅比理论值多0.5车。</blockquote>
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
                <h4>2.质量信息对立体库的控制</h4>
                <ol>
                    <li>产品工艺分流的环节
                        <strong>发布工艺分流任务</strong>(四新/异常品)</li>
                    <li>任务调度系统对所有任务自动定时扫描</li>
                    <li>调度系统对符合条件的产品向立体库发起调度指令</li>
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
                <div class="content">通过质量信息对物流的智能控制，让我们可以根据前工序的生产情况自动决定产品后续的走向，实现成钞公司在智能制造中的第一步探索。</div>
            </div>
            <arc-line :fill="'#c0392b'"></arc-line>
        </div>

    </div>
</template>