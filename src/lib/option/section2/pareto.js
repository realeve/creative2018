export default {
  toolbox: {},
  tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
  legend: { data: ["轴数", "Pareto"] },
  title: [
    { left: "center", text: "钞纸机检在线抽查原因分析(轴头轴尾)" },
    {
      text: "数据来源:质量综合管理系统",
      borderWidth: 0,
      textStyle: { fontSize: 10, fontWeight: "normal" },
      x: 5,
      y2: 0
    },
    {
      text: "统计时间：20170401 - 20170430",
      borderWidth: 0,
      textStyle: { fontSize: 10, fontWeight: "normal" },
      x: 5,
      y2: 18
    },
    {
      text: "©xx有限公司 xx部",
      borderColor: "#999",
      borderWidth: 0,
      textStyle: { fontSize: 10, fontWeight: "normal" },
      x: "right",
      y2: 3
    }
  ],
  xAxis: [
    {
      data: [
        "外观搓浆",
        "硬质白浆块",
        "纸尾夹带",
        "外观可剥离物",
        "压印",
        "毛布折子",
        "墨水",
        "死折子"
      ],
      name: "轴头轴尾",
      nameLocation: "center",
      nameGap: 25,
      nameTextStyle: { fontWeight: "bold" }
    }
  ],
  series: [
    {
      data: ["3", "3", "1", "1", "1", "1", "1", "1"],
      name: "轴数",
      type: "bar",
      smooth: true
    },
    {
      name: "Pareto",
      yAxisIndex: 1,
      data: [
        "25.00",
        "50.00",
        "58.33",
        "66.67",
        "75.00",
        "83.33",
        "91.67",
        "100.00"
      ],
      markLine: {
        symbol: "none",
        lineStyle: { normal: { type: "dot" } },
        data: [{ name: "80%", yAxis: 80, label: { normal: { show: false } } }]
      },
      type: "line",
      smooth: true,
      symbolSize: "4",
      symbol: "circle",
      lineStyle: {
        normal: {
          width: 2,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      }
    }
  ],
  yAxis: [
    {
      name: "轴数",
      nameLocation: "center",
      nameGap: 25,
      nameTextStyle: { fontWeight: "bold" }
    },
    {
      name: "帕累托(%)",
      nameLocation: "middle",
      nameGap: 15,
      nameTextStyle: { fontSize: 16 },
      type: "value",
      position: "right",
      scale: true,
      axisLabel: {
        show: true,
        interval: "auto",
        margin: 10,
        textStyle: { fontSize: 16 }
      },
      axisTick: { show: false },
      splitArea: { show: false },
      max: 100,
      min: 0
    }
  ],
  dataZoom: [
    { type: "inside", realtime: true, start: 0, end: 100, xAxisIndex: 0 },
    { type: "inside", realtime: true, start: 0, end: 100, yAxisIndex: 0 }
  ],
  grid: { right: 50 }
};
