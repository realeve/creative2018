<template>
    <div class="section">
        <div class="slide white-text">
            <div class="wrap">
                <v-galaxy/>
                <h4>四、工艺流转跟踪系统</h4>
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
                        <strong>物流</strong>做任何控制，这也是我司2018“质量提升年”的工作方向。</blockquote>
                </div>
            </div>
        </div>

        <div class="slide">
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

        <div class="slide">
            <div class="wrap">
                <h4>1.人工大张抽检自动排号</h4>
                <p>从随机抽检到
                    <strong>自动优选</strong>
                </p>
                <div class="content">
                    <blockquote>经过2018年前12周的测试，实际抽检量仅比理论值多
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
                <h4>2.质量系统对物流的控制</h4>
                <ol>
                    <li>工艺人员
                        <strong>发布工艺流转任务</strong>(四新/异常品)</li>
                    <li>调度系统后台处理任务，并向立体库发起调度指令</li>
                    <li>系统根据四新任务完成情况
                        <strong>实时跟踪进度、自动汇总生产/质量信息</strong>
                    </li>
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
                <h4>3.生产异常信息跟踪</h4>
                <blockquote>
                    机台人员发布信息(连续废、质量异常等)，当工序信息变更时实时推送给
                    <strong>机检人员、工艺人员</strong>。
                </blockquote>
            </div>
        </div>

        <div class="slide">
            <div class="wrap">
                <h4>迈向智能制造</h4>
                <div class="content">通过质量信息对物流的智能控制，让我们可以根据前工序的生产情况
                    <strong>自动决定产品后续的走向</strong>，实现成钞公司在
                    <strong>智能制造</strong>中的初步探索。</div>
            </div>
            <arc-line :fill="'#0e0e2a'"></arc-line>
        </div>

    </div>
</template>