export default {
  title: [
    { text: "码后核查各检测站缺陷数对比", x: "center", top: 10 },
    {
      text: "数据来源:质量综合管理系统",
      borderWidth: 0,
      textStyle: { fontSize: 10, fontWeight: "normal" },
      x: 5,
      y2: 0
    },
    {
      text: "统计时间：20180420 - 20180426",
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
    right: "15%",
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
    trigger: "axis",
    axisPointer: {
      type: "shadow",
      lineStyle: { color: "#aaa" },
      crossStyle: { color: "#aaa" },
      shadowStyle: { color: "rgba(128,200,128,0.1)" }
    }
  },
  dataZoom: [{ type: "inside", realtime: true, start: 0, end: 100 }],
  legend: {
    data: [
      { name: "DMJ12-1号机", icon: "pin" },
      { name: "DMJ12-2号机", icon: "pin" },
      { name: "M81D-1号机", icon: "pin" },
      { name: "M81D-2号机", icon: "pin" },
      { name: "多功能-1号机", icon: "pin" },
      { name: "多功能-2号机", icon: "pin" },
      { name: "多功能-3号机", icon: "pin" }
    ],
    x2: "5%",
    y: 40,
    itemGap: 20,
    textStyle: { fontSize: 16 },
    show: true,
    orient: "vertical",
    x: "right",
    left: "right"
  },
  xAxis: [
    {
      name: " ",
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
      data: [
        "正1",
        "正2",
        "正3",
        "正4",
        "正5",
        "背精1",
        "背精2",
        "背精3",
        "背精4"
      ]
    }
  ],
  yAxis: [
    {
      name: " ",
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
      name: "DMJ12-1号机",
      type: "bar",
      smooth: true,
      barMaxWidth: "100",
      data: ["130", "155", "141", "223", "245", "265", "491", "360", "505"],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 0,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      symbol: "circle",
      lineStyle: {
        normal: {
          width: 3,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      stack: "总量"
    },
    {
      name: "DMJ12-2号机",
      type: "bar",
      smooth: true,
      barMaxWidth: "100",
      data: ["155", "84", "125", "167", "361", "404", "369", "342", "345"],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 0,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      symbol: "circle",
      lineStyle: {
        normal: {
          width: 3,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      stack: "总量"
    },
    {
      name: "M81D-1号机",
      type: "bar",
      smooth: true,
      barMaxWidth: "100",
      data: ["83", "157", "264", "320", "135", "127", "154", "532", "271"],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 0,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      symbol: "circle",
      lineStyle: {
        normal: {
          width: 3,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      stack: "总量"
    },
    {
      name: "M81D-2号机",
      type: "bar",
      smooth: true,
      barMaxWidth: "100",
      data: ["167", "139", "679", "513", "113", "113", "115", "116", "105"],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 0,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      symbol: "circle",
      lineStyle: {
        normal: {
          width: 3,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      stack: "总量"
    },
    {
      name: "多功能-1号机",
      type: "bar",
      smooth: true,
      barMaxWidth: "100",
      data: ["669", "166", "1156", "343", "271", "244", "213", "389", "1347"],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 0,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      symbol: "circle",
      lineStyle: {
        normal: {
          width: 3,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      stack: "总量"
    },
    {
      name: "多功能-2号机",
      type: "bar",
      smooth: true,
      barMaxWidth: "100",
      data: ["293", "310", "543", "302", "469", "286", "193", "159", "676"],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 0,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      symbol: "circle",
      lineStyle: {
        normal: {
          width: 3,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      stack: "总量"
    },
    {
      name: "多功能-3号机",
      type: "bar",
      smooth: true,
      barMaxWidth: "100",
      data: ["442", "314", "768", "490", "1292", "71", "78", "255", "126"],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 0,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      symbol: "circle",
      lineStyle: {
        normal: {
          width: 3,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      stack: "总量"
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
