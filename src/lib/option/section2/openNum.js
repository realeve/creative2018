export default {
  title: [
    { text: "各品种月度开包量对比", x: "center", top: 10 },
    {
      text: "数据来源:质量综合管理系统",
      borderWidth: 0,
      textStyle: { fontSize: 10, fontWeight: "normal" },
      x: 5,
      y2: 0
    },
    {
      text: "统计时间：20170101 - 20180331",
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
    data: ["9602A", "9603A", "9604A", "9606A", "9607T"],
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
      name: "月份",
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
        "201701",
        "201702",
        "201703",
        "201704",
        "201705",
        "201706",
        "201707",
        "201708",
        "201709",
        "201710",
        "201711",
        "201712",
        "201801",
        "201802",
        "201803"
      ]
    }
  ],
  yAxis: [
    {
      name: "开包量",
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
      name: "9602A",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [53, 48, 54, 46, 47, 43, 39, 46, 46, 43, 41, 43, 47, 56, 62],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: [2, 2, 0, 0],
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: "12",
      sampling: "average",
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
      label: { normal: { show: false, position: "top" } }
    },
    {
      name: "9603A",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [
        "-",
        "-",
        119,
        123,
        106,
        67,
        "-",
        "-",
        "-",
        "-",
        "-",
        "-",
        109,
        81,
        93
      ],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: [2, 2, 0, 0],
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: "12",
      sampling: "average",
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
      label: { normal: { show: false, position: "top" } }
    },
    {
      name: "9604A",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [60, 57, 72, 74, "-", 81, 66, 52, 57, 56, 65, 65, 71, 68, 63],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: [2, 2, 0, 0],
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: "12",
      sampling: "average",
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
      label: { normal: { show: false, position: "top" } }
    },
    {
      name: "9606A",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: ["-", "-", "-", 96, 88, 70, 62, 57, 49, 48, 69, 75, "-", 70, 69],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: [2, 2, 0, 0],
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: "12",
      sampling: "average",
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
      label: { normal: { show: false, position: "top" } }
    },
    {
      name: "9607T",
      type: "line",
      smooth: true,
      barMaxWidth: "100",
      data: [123, 126, 121, 113, 78, 89, 89, 88, 91, 84, 93, 123, 107, 95, 87],
      itemStyle: {
        normal: {
          label: { show: true, position: "insideTop" },
          barBorderRadius: [2, 2, 0, 0],
          borderColor: "rgba(255,255,255,0.95)",
          borderWidth: 4,
          lineStyle: { width: 1 }
        }
      },
      symbolSize: "12",
      sampling: "average",
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
      label: { normal: { show: false, position: "top" } }
    }
  ],
  color: [
    "#7ECF51",
    "rgb(189,66,175)",
    "#61A5E8",
    "#3D7F18",
    "rgb(255,127,104)",
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
