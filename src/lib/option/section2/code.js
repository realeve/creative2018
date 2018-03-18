export default {
  title: [
    { text: "印码机台每日缺陷数", x: "center", top: 10 },
    {
      text: "数据来源:号码三合一系统",
      borderWidth: 0,
      textStyle: { fontSize: 10, fontWeight: "normal" },
      x: 5,
      y2: 0
    },
    {
      text: "统计时间：20180301 - 20180331",
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
      type: "cross",
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
    data: [
      "DMJ12-1",
      "DMJ12-2",
      "M81D-1",
      "M81D-2",
      "M97-1",
      "M97-2",
      "M97-3",
      "STJ-1",
      "STJ-2",
      "多功能-1",
      "多功能-2",
      "多功能-3",
      "接线印码机"
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
      name: "日期",
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
      boundaryGap: false,
      data: [
        "2018-03-01",
        "2018-03-02",
        "2018-03-05",
        "2018-03-06",
        "2018-03-07",
        "2018-03-08",
        "2018-03-09",
        "2018-03-12",
        "2018-03-13",
        "2018-03-14"
      ]
    }
  ],
  yAxis: [
    {
      name: "缺陷条数",
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
      name: "DMJ12-1",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [80, 30, 110, 90, 154, 197, 232, 51, 110, 35],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      sampling: "average",
      symbol: "circle",
      areaStyle: { normal: { opacity: 0.4 } },
      lineStyle: {
        normal: {
          width: 0,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: { normal: { show: false, position: "top" } },
      stack: "总量"
    },
    {
      name: "DMJ12-2",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [217, 88, 124, 212, 164, 180, 125, 0, 0, 0],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      sampling: "average",
      symbol: "circle",
      areaStyle: { normal: { opacity: 0.4 } },
      lineStyle: {
        normal: {
          width: 0,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: { normal: { show: false, position: "top" } },
      stack: "总量"
    },
    {
      name: "M81D-1",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [134, 136, 439, 96, 68, 44, 34, 52, 78, 64],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      sampling: "average",
      symbol: "circle",
      areaStyle: { normal: { opacity: 0.4 } },
      lineStyle: {
        normal: {
          width: 0,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: { normal: { show: false, position: "top" } },
      stack: "总量"
    },
    {
      name: "M81D-2",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [69, 199, 88, 25, 52, 35, 28, 66, 97, 62],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      sampling: "average",
      symbol: "circle",
      areaStyle: { normal: { opacity: 0.4 } },
      lineStyle: {
        normal: {
          width: 0,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: { normal: { show: false, position: "top" } },
      stack: "总量"
    },
    {
      name: "M97-1",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [0, 0, 106, 99, 93, 62, 107, 175, 189, 35],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      sampling: "average",
      symbol: "circle",
      areaStyle: { normal: { opacity: 0.4 } },
      lineStyle: {
        normal: {
          width: 0,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: { normal: { show: false, position: "top" } },
      stack: "总量"
    },
    {
      name: "M97-2",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [0, 0, 0, 0, 0, 0, 0, 168, 111, 0],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      sampling: "average",
      symbol: "circle",
      areaStyle: { normal: { opacity: 0.4 } },
      lineStyle: {
        normal: {
          width: 0,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: { normal: { show: false, position: "top" } },
      stack: "总量"
    },
    {
      name: "M97-3",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [145, 81, 86, 153, 117, 180, 98, 184, 277, 267],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      sampling: "average",
      symbol: "circle",
      areaStyle: { normal: { opacity: 0.4 } },
      lineStyle: {
        normal: {
          width: 0,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: { normal: { show: false, position: "top" } },
      stack: "总量"
    },
    {
      name: "STJ-1",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [27, 38, 7, 34, 39, 17, 18, 36, 42, 118],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      sampling: "average",
      symbol: "circle",
      areaStyle: { normal: { opacity: 0.4 } },
      lineStyle: {
        normal: {
          width: 0,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: { normal: { show: false, position: "top" } },
      stack: "总量"
    },
    {
      name: "STJ-2",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [37, 36, 56, 131, 146, 46, 58, 0, 0, 0],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      sampling: "average",
      symbol: "circle",
      areaStyle: { normal: { opacity: 0.4 } },
      lineStyle: {
        normal: {
          width: 0,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: { normal: { show: false, position: "top" } },
      stack: "总量"
    },
    {
      name: "多功能-1",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [106, 175, 194, 176, 97, 115, 0, 71, 95, 40],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      sampling: "average",
      symbol: "circle",
      areaStyle: { normal: { opacity: 0.4 } },
      lineStyle: {
        normal: {
          width: 0,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: { normal: { show: false, position: "top" } },
      stack: "总量"
    },
    {
      name: "多功能-2",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [143, 116, 241, 264, 181, 193, 0, 199, 128, 238],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      sampling: "average",
      symbol: "circle",
      areaStyle: { normal: { opacity: 0.4 } },
      lineStyle: {
        normal: {
          width: 0,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: { normal: { show: false, position: "top" } },
      stack: "总量"
    },
    {
      name: "多功能-3",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [96, 145, 96, 90, 79, 82, 69, 82, 158, 41],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      sampling: "average",
      symbol: "circle",
      areaStyle: { normal: { opacity: 0.4 } },
      lineStyle: {
        normal: {
          width: 0,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: { normal: { show: false, position: "top" } },
      stack: "总量"
    },
    {
      name: "接线印码机",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [24, 16, 0, 0, 0, 0, 0, 0, 0, 0],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: 0,
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: 0,
      sampling: "average",
      symbol: "circle",
      areaStyle: { normal: { opacity: 0.4 } },
      lineStyle: {
        normal: {
          width: 0,
          type: "solid",
          shadowColor: "rgba(0,0,0,0)",
          shadowBlur: 0,
          shadowOffsetX: 0,
          shadowOffsetY: 0
        }
      },
      label: { normal: { show: false, position: "top" } },
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
