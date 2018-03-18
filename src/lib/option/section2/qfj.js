export default {
  title: [
    { text: "清分机台平均每尺废票对比", x: "center", top: 10 },
    {
      text: "数据来源:机台作业系统",
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
      { name: "全好品" },
      { name: "全检品" },
      { name: "码后核查" },
      { name: "补品" },
      { name: "9602A" },
      { name: "9603A" },
      { name: "9604A" },
      { name: "9606A" },
      { name: "9607T" },
      { name: "国产清分机-1号" },
      { name: "国产清分机-2号" },
      { name: "国产清分机-3号" },
      { name: "挑残机-2号" },
      { name: "清分机-1号" },
      { name: "清分机-2号" },
      { name: "清分机-3号" },
      { name: "清分机-4号" },
      { name: "清分机-5号" },
      { name: "卢彬" },
      { name: "孙雅婧" },
      { name: "朱瑛" },
      { name: "李艳" },
      { name: "李菊" },
      { name: "杨冯" },
      { name: "杨敏" },
      { name: "杨莹" },
      { name: "杨靖姝" },
      { name: "王雄" },
      { name: "简炼" },
      { name: "蔡双双" },
      { name: "谢宇晨" },
      { name: "钟祖志" }
    ],
    links: [
      { source: "全好品", target: "9603A", value: 14.5 },
      { source: "全好品", target: "9607T", value: 13.14 },
      { source: "全检品", target: "9602A", value: 65.37 },
      { source: "全检品", target: "9603A", value: 75.18 },
      { source: "全检品", target: "9606A", value: 22 },
      { source: "全检品", target: "9607T", value: 110.12000000000002 },
      { source: "码后核查", target: "9602A", value: 158.35000000000002 },
      { source: "码后核查", target: "9603A", value: 62.69 },
      { source: "码后核查", target: "9604A", value: 217.69 },
      { source: "码后核查", target: "9606A", value: 115.89 },
      { source: "码后核查", target: "9607T", value: 248.74 },
      { source: "补品", target: "9602A", value: 3.25 },
      { source: "补品", target: "9603A", value: 26 },
      { source: "补品", target: "9604A", value: 9.29 },
      { source: "补品", target: "9607T", value: 49.69 },
      { source: "9602A", target: "国产清分机-1号", value: 47.519999999999996 },
      { source: "9602A", target: "国产清分机-3号", value: 14.67 },
      { source: "9602A", target: "挑残机-2号", value: 96.22 },
      { source: "9602A", target: "清分机-1号", value: 31.23 },
      { source: "9602A", target: "清分机-3号", value: 37.33 },
      { source: "9603A", target: "国产清分机-2号", value: 41.18 },
      { source: "9603A", target: "国产清分机-3号", value: 15.8 },
      { source: "9603A", target: "挑残机-2号", value: 6 },
      { source: "9603A", target: "清分机-2号", value: 60.72 },
      { source: "9603A", target: "清分机-3号", value: 54.67 },
      { source: "9604A", target: "国产清分机-1号", value: 36 },
      { source: "9604A", target: "国产清分机-2号", value: 40.72 },
      { source: "9604A", target: "国产清分机-3号", value: 60.11 },
      { source: "9604A", target: "挑残机-2号", value: 65.19 },
      { source: "9604A", target: "清分机-2号", value: 24.96 },
      { source: "9606A", target: "国产清分机-2号", value: 86.89 },
      { source: "9606A", target: "国产清分机-3号", value: 35 },
      { source: "9606A", target: "挑残机-2号", value: 16 },
      { source: "9607T", target: "国产清分机-2号", value: 39.870000000000005 },
      { source: "9607T", target: "国产清分机-3号", value: 94.52999999999999 },
      { source: "9607T", target: "挑残机-2号", value: 18.89 },
      { source: "9607T", target: "清分机-1号", value: 53.79 },
      { source: "9607T", target: "清分机-2号", value: 51.54 },
      { source: "9607T", target: "清分机-3号", value: 49.43 },
      { source: "9607T", target: "清分机-4号", value: 64.72 },
      { source: "9607T", target: "清分机-5号", value: 48.92 },
      { source: "国产清分机-1号", target: "孙雅婧", value: 64.07 },
      { source: "国产清分机-1号", target: "杨冯", value: 19.450000000000003 },
      { source: "国产清分机-2号", target: "李菊", value: 101.35 },
      { source: "国产清分机-2号", target: "杨敏", value: 64.56 },
      { source: "国产清分机-2号", target: "李艳", value: 42.75 },
      { source: "国产清分机-3号", target: "李菊", value: 65.16 },
      { source: "国产清分机-3号", target: "杨敏", value: 58.44 },
      { source: "国产清分机-3号", target: "李艳", value: 33.2 },
      { source: "国产清分机-3号", target: "杨冯", value: 41.41 },
      { source: "国产清分机-3号", target: "孙雅婧", value: 9.27 },
      { source: "国产清分机-3号", target: "杨莹", value: 12.63 },
      { source: "挑残机-2号", target: "孙雅婧", value: 61.07000000000001 },
      { source: "挑残机-2号", target: "杨冯", value: 48.95 },
      { source: "挑残机-2号", target: "朱瑛", value: 35.35 },
      { source: "挑残机-2号", target: "李艳", value: 49.6 },
      { source: "挑残机-2号", target: "杨敏", value: 7.33 },
      { source: "清分机-1号", target: "李艳", value: 40.03 },
      { source: "清分机-1号", target: "杨莹", value: 44.989999999999995 },
      { source: "清分机-2号", target: "杨靖姝", value: 69.79 },
      { source: "清分机-2号", target: "王雄", value: 67.43 },
      { source: "清分机-3号", target: "谢宇晨", value: 72.66 },
      { source: "清分机-3号", target: "朱瑛", value: 68.77 },
      { source: "清分机-4号", target: "钟祖志", value: 44.76 },
      { source: "清分机-4号", target: "简炼", value: 19.96 },
      { source: "清分机-5号", target: "卢彬", value: 24.52 },
      { source: "清分机-5号", target: "蔡双双", value: 24.4 }
    ],
    layout: "none",
    itemStyle: { normal: { borderWidth: 1, borderColor: "#aaa" } },
    lineStyle: { normal: { color: "source", curveness: 0.5, opacity: 0.5 } }
  }
};
