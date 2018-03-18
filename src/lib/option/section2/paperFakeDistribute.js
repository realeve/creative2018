export default {
  title: [
    { text: "纸机缺陷类型分布图", x: "center", top: 10 },
    {
      text: "数据来源:质量综合管理系统",
      borderWidth: 0,
      textStyle: { fontSize: 10, fontWeight: "normal" },
      x: 5,
      y2: 0
    },
    {
      text: "统计时间：20180101 - 20180314",
      borderWidth: 0,
      textStyle: { fontSize: 10, fontWeight: "normal" },
      x: 5,
      y2: 18
    },
    {
      text: "©成都印钞有限公司 技术质量部",
      borderColor: "#999",
      borderWidth: 0,
      textStyle: { fontSize: 10, fontWeight: "normal" },
      x: "right",
      y2: 3
    }
  ],
  grid: {
    left: "5%",
    right: "5%",
    top: "8%",
    bottom: "10%",
    containLabel: true
  },
  toolbox: {
    show: true,
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    },
    top: 10
  },
  tooltip: {
    trigger: "item",
    triggerOn: "mousemove",
    backgroundColor: "rgba(255,255,255,0.95)",
    extraCssText:
      "padding:20px;color:#999;border-radius:5px;box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);",
    textStyle: { color: "#333" }
  },
  series: {
    type: "sankey",
    data: [
      { name: "老线" },
      { name: "一般废" },
      { name: "严重废" },
      { name: "正面" },
      { name: "背面" },
      { name: "褶子" },
      { name: "透视" },
      { name: "其它区域" },
      { name: "安全线" },
      { name: "斑马区" },
      { name: "水印区" },
      { name: "白水印" },
      { name: "纸区" },
      { name: "黑水印" },
      { name: "其它类型" },
      { name: "尘埃" },
      { name: "开窗" },
      { name: "白点" },
      { name: "黑点" }
    ],
    links: [
      { source: "老线", target: "严重废", value: 1569984 },
      { source: "老线", target: "一般废", value: 586835 },
      { source: "一般废", target: "背面", value: 108025 },
      { source: "一般废", target: "透视", value: 337828 },
      { source: "一般废", target: "褶子", value: 39009 },
      { source: "一般废", target: "正面", value: 101973 },
      { source: "严重废", target: "背面", value: 204195 },
      { source: "严重废", target: "透视", value: 690311 },
      { source: "严重废", target: "褶子", value: 183789 },
      { source: "严重废", target: "正面", value: 491689 },
      { source: "正面", target: "安全线", value: 188592 },
      { source: "正面", target: "白水印", value: 23836 },
      { source: "正面", target: "斑马区", value: 117481 },
      { source: "正面", target: "黑水印", value: 41886 },
      { source: "正面", target: "水印区", value: 9929 },
      { source: "正面", target: "纸区", value: 211938 },
      { source: "背面", target: "安全线", value: 304 },
      { source: "背面", target: "白水印", value: 23584 },
      { source: "背面", target: "斑马区", value: 17122 },
      { source: "背面", target: "黑水印", value: 67786 },
      { source: "背面", target: "水印区", value: 29915 },
      { source: "背面", target: "纸区", value: 173509 },
      { source: "褶子", target: "其它区域", value: 403 },
      { source: "褶子", target: "纸区", value: 222395 },
      { source: "透视", target: "安全线", value: 207259 },
      { source: "透视", target: "白水印", value: 137462 },
      { source: "透视", target: "斑马区", value: 167227 },
      { source: "透视", target: "其它区域", value: 2055 },
      { source: "透视", target: "水印区", value: 241048 },
      { source: "透视", target: "纸区", value: 273088 },
      { source: "其它区域", target: "其它类型", value: 2458 },
      { source: "安全线", target: "其它类型", value: 207857 },
      { source: "安全线", target: "开窗", value: 188298 },
      { source: "斑马区", target: "白点", value: 33857 },
      { source: "斑马区", target: "尘埃", value: 47877 },
      { source: "斑马区", target: "黑点", value: 98511 },
      { source: "斑马区", target: "其它类型", value: 94802 },
      { source: "斑马区", target: "开窗", value: 26783 },
      { source: "水印区", target: "白点", value: 73724 },
      { source: "水印区", target: "尘埃", value: 31813 },
      { source: "水印区", target: "其它类型", value: 35904 },
      { source: "水印区", target: "黑点", value: 139451 },
      { source: "白水印", target: "白点", value: 52614 },
      { source: "白水印", target: "尘埃", value: 44722 },
      { source: "白水印", target: "其它类型", value: 54337 },
      { source: "白水印", target: "黑点", value: 33209 },
      { source: "纸区", target: "白点", value: 204231 },
      { source: "纸区", target: "尘埃", value: 225713 },
      { source: "纸区", target: "黑点", value: 214236 },
      { source: "纸区", target: "其它类型", value: 236750 },
      { source: "黑水印", target: "白点", value: 22982 },
      { source: "黑水印", target: "尘埃", value: 86690 }
    ],
    layout: "none",
    itemStyle: { normal: { borderWidth: 1, borderColor: "#aaa" } },
    lineStyle: { normal: { color: "source", curveness: 0.5, opacity: 0.5 } }
  }
};
