export default {
  title: [
    { text: "103-G-7T定量分布直方图", x: "center", top: 10 },
    {
      text: "数据来源:质量综合管理系统",
      borderWidth: 0,
      textStyle: { fontSize: 10, fontWeight: "normal" },
      x: 5,
      y2: 0
    },
    {
      text: "统计时间：20180101 - 20180319",
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
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      dataZoom: { show: true },
      restore: { show: true },
      magicType: { type: ["line", "bar"] },
      saveAsImage: { show: true }
    },
    top: 10
  },
  tooltip: {
    trigger: "axis",
    showDelay: 0,
    backgroundColor: "rgba(255,255,255,0.95)",
    extraCssText:
      "padding:20px;color:#999;border-radius:5px;box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);",
    textStyle: { color: "#333" },
    axisPointer: { type: "cross" }
  },
  xAxis: [
    {
      type: "value",
      axisTick: { show: false, alignWithLabel: true },
      boundaryGap: false,
      scale: true,
      axisLabel: { show: true },
      axisLine: { show: true }
    }
  ],
  yAxis: [
    {
      type: "value",
      scale: true,
      position: "left",
      axisLabel: { show: true, interval: "auto", margin: 8 },
      axisTick: { show: false },
      axisLine: { show: true }
    }
  ],
  series: [
    {
      type: "bar",
      barWidth: "99.3%",
      label: { normal: { show: true, position: "insideTop" } },
      data: [
        [92.3, 1],
        [92.5, 0],
        [92.7, 2],
        [92.9, 3],
        [93.1, 3],
        [93.3, 13],
        [93.5, 22],
        [93.7, 21],
        [93.9, 24],
        [94.1, 20],
        [94.3, 45],
        [94.5, 44],
        [94.7, 90],
        [94.9, 42],
        [95.1, 35],
        [95.3, 61],
        [95.5, 82],
        [95.7, 54],
        [95.9, 31],
        [96.1, 22],
        [96.3, 39],
        [96.5, 32],
        [96.7, 26],
        [96.9, 11],
        [97.1, 8],
        [97.3, 18],
        [97.5, 6],
        [97.7, 3],
        [97.9, 0]
      ]
    }
  ]
};
