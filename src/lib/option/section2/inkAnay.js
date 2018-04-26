export default {
  title: [
    { text: "9607T单开仪墨色得分分布图", x: "center", top: 10 },
    {
      text: "数据来源:质量综合管理系统",
      borderWidth: 0,
      textStyle: { fontSize: 10, fontWeight: "normal" },
      x: 5,
      y2: 0
    },
    {
      text: "上须: Q3 + 1.5 * IRQ \n下须: Q1 - 1.5 * IRQ\nIRQ: Q3-Q1",
      borderColor: "#999",
      borderWidth: 1,
      textStyle: { fontSize: 14 },
      x2: "5%",
      y: 70
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
  connectNulls: true,
  toolbox: {
    left: "left",
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      dataZoom: { show: true, yAxisIndex: "none" },
      magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
      restore: { show: true },
      saveAsImage: { show: true }
    },
    top: 10
  },
  calculable: true,
  tooltip: {
    backgroundColor: "rgba(255,255,255,0.95)",
    extraCssText:
      "padding:20px;color:#999;border-radius:5px;box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);",
    textStyle: { color: "#333" },
    trigger: "item",
    axisPointer: {
      type: "shadow",
      lineStyle: { color: "#aaa" },
      crossStyle: { color: "#aaa" },
      shadowStyle: { color: "rgba(128,200,128,0.1)" }
    }
  },
  dataZoom: [
    { type: "inside", realtime: true, start: 0, end: 100 },
    {
      show: false,
      realtime: true,
      start: 0,
      end: 100,
      height: 30,
      y2: 25,
      textStyle: { color: "#8392A5" },
      handleIcon:
        "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
      dataBackground: {
        areaStyle: { color: "#8392A5" },
        lineStyle: { opacity: 0.8, color: "#8392A5" }
      },
      handleStyle: {
        color: "#fff",
        shadowBlur: 3,
        shadowColor: "rgba(0, 0, 0, 0.6)",
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    },
    {
      show: false,
      yAxisIndex: 0,
      filterMode: "empty",
      width: 12,
      height: "70%",
      handleSize: 8,
      showDataShadow: false,
      right: 5,
      textStyle: { color: "#8392A5" },
      handleIcon:
        "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
      dataBackground: {
        areaStyle: { color: "#8392A5" },
        lineStyle: { opacity: 0.8, color: "#8392A5" }
      },
      handleStyle: {
        color: "#fff",
        shadowBlur: 3,
        shadowColor: "rgba(0, 0, 0, 0.6)",
        shadowOffsetX: 2,
        shadowOffsetY: 2
      }
    }
  ],
  legend: {
    data: [{ name: "得分", icon: "pin" }],
    x2: "5%",
    y: 40,
    itemGap: 20,
    textStyle: { fontSize: 16 },
    show: false
  },
  xAxis: [
    {
      name: "机台",
      nameTextStyle: { fontSize: 16 },
      axisTick: {
        show: true,
        length: 8,
        lineStyle: { color: "#aaa", width: 2 },
        alignWithLabel: true
      },
      axisLabel: { textStyle: { fontSize: 16 } },
      splitArea: { show: false },
      type: "category",
      boundaryGap: true,
      data: ["J98-3号", "J98-4号", "J98-7号"]
    }
  ],
  yAxis: [
    {
      name: "得分",
      nameLocation: "middle",
      nameGap: 35,
      nameTextStyle: { fontSize: 16 },
      type: "value",
      position: "left",
      scale: true,
      axisLabel: {
        show: true,
        interval: "auto",
        margin: 10,
        textStyle: { fontSize: 16 }
      },
      axisTick: { show: false },
      splitArea: { show: false }
    }
  ],
  series: [
    {
      name: "得分",
      type: "boxplot",
      data: [
        [
          21.346250000000005,
          25.017500000000002,
          26.695,
          27.465,
          31.136249999999997
        ],
        [12.739999999999997, 20.36, 22.62, 25.44, 33.06],
        [21.058750000000003, 24.76, 26.295, 27.2275, 30.928749999999994]
      ],
      tooltip: {
        backgroundColor: "rgba(255,255,255,0.95)",
        extraCssText:
          "padding:20px;color:#999;border-radius:5px;box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);",
        textStyle: { color: "#333" }
      }
    },
    {
      name: "得分",
      type: "scatter",
      data: [
        [0, 17.78],
        [0, 18.78],
        [0, 19.4],
        [0, 19.61],
        [0, 19.87],
        [0, 19.92],
        [0, 20.31],
        [0, 20.36],
        [0, 20.92],
        [0, 21.29],
        [2, 16.31],
        [2, 18.92],
        [2, 19.76],
        [2, 19.86],
        [2, 19.89],
        [2, 20.23],
        [2, 20.45],
        [2, 20.64],
        [2, 21.04]
      ],
      tooltip: {}
    }
  ],
  color: [
    "#61A5E8",
    "#7ECF51",
    "#EECB5F",
    "#E4925D",
    "#E16757",
    "#9570E5",
    "#605FF0",
    "#85ca36",
    "#1c9925",
    "#0d8b5f",
    "#0f9cd3",
    "#2f7e9b",
    "#2f677d",
    "#9b7fed",
    "#7453d6",
    "#3b1d98",
    "#27abb1",
    "#017377",
    "#015f63",
    "#b86868",
    "#5669b7",
    "#e5aab4",
    "#60b65f",
    "#98d2b2",
    "#c9c8bc",
    "#45c3dc",
    "#e17979",
    "#5baa5a",
    "#eaccc2",
    "#ffaa74"
  ]
};
