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
  toolbox: {
    show: true,
    feature: { dataView: { readOnly: false }, restore: {}, saveAsImage: {} },
    top: 10
  },
  tooltip: {
    backgroundColor: "rgba(255,255,255,0.95)",
    extraCssText:
      "padding:20px;color:#999;border-radius:5px;box-shadow: 0 0 7px rgba(0, 0, 0, 0.6);",
    textStyle: { color: "#333" }
  },
  legend: {
    data: [
      { name: "DMJ12-1号机", icon: "pin" },
      { name: "DMJ12-2号机", icon: "pin" },
      { name: "M81D-1号机", icon: "pin" },
      { name: "M81D-2号机", icon: "pin" },
      { name: "丝凸检-1", icon: "pin" },
      { name: "丝凸检-2", icon: "pin" },
      { name: "多功能-1号机", icon: "pin" },
      { name: "多功能-2号机", icon: "pin" },
      { name: "多功能-3号机", icon: "pin" }
    ],
    orient: "vertical",
    left: "right",
    x: "right",
    y: 40
  },
  radar: {
    indicator: [
      { name: "正1", max: "1286" },
      { name: "正2", max: "703" },
      { name: "正3", max: "1272" },
      { name: "正4", max: "743" },
      { name: "正5", max: "1421" },
      { name: "背精1", max: "673" },
      { name: "背精2", max: "546" },
      { name: "背精3", max: "620" },
      { name: "背精4", max: "1482" }
    ],
    shape: "polygon",
    name: { textStyle: { color: "#555" } },
    splitLine: { lineStyle: { color: "#bbb" } },
    center: ["50%", "58%"],
    radius: "75%",
    splitArea: { show: false }
  },
  series: [
    {
      name: "DMJ12-1号机",
      type: "radar",
      symbol: "none",
      areaStyle: { normal: { opacity: 0.3 } },
      lineStyle: { normal: { width: 1, opacity: 0.5 } },
      data: [
        [
          "130.00",
          "155.00",
          "141.00",
          "223.00",
          "245.00",
          "265.00",
          "491.00",
          "360.00",
          "505.00"
        ]
      ]
    },
    {
      name: "DMJ12-2号机",
      type: "radar",
      symbol: "none",
      areaStyle: { normal: { opacity: 0.3 } },
      lineStyle: { normal: { width: 1, opacity: 0.5 } },
      data: [
        [
          "155.00",
          "84.00",
          "125.00",
          "167.00",
          "361.00",
          "404.00",
          "369.00",
          "342.00",
          "345.00"
        ]
      ]
    },
    {
      name: "M81D-1号机",
      type: "radar",
      symbol: "none",
      areaStyle: { normal: { opacity: 0.3 } },
      lineStyle: { normal: { width: 1, opacity: 0.5 } },
      data: [
        [
          "83.00",
          "157.00",
          "264.00",
          "320.00",
          "135.00",
          "127.00",
          "154.00",
          "532.00",
          "271.00"
        ]
      ]
    },
    {
      name: "M81D-2号机",
      type: "radar",
      symbol: "none",
      areaStyle: { normal: { opacity: 0.3 } },
      lineStyle: { normal: { width: 1, opacity: 0.5 } },
      data: [
        [
          "167.00",
          "139.00",
          "679.00",
          "513.00",
          "113.00",
          "113.00",
          "115.00",
          "116.00",
          "105.00"
        ]
      ]
    },
    {
      name: "多功能-1号机",
      type: "radar",
      symbol: "none",
      areaStyle: { normal: { opacity: 0.3 } },
      lineStyle: { normal: { width: 1, opacity: 0.5 } },
      data: [
        [
          "669.00",
          "166.00",
          "1156.00",
          "343.00",
          "271.00",
          "244.00",
          "213.00",
          "389.00",
          "1347.00"
        ]
      ]
    },
    {
      name: "多功能-2号机",
      type: "radar",
      symbol: "none",
      areaStyle: { normal: { opacity: 0.3 } },
      lineStyle: { normal: { width: 1, opacity: 0.5 } },
      data: [
        [
          "293.00",
          "310.00",
          "543.00",
          "302.00",
          "469.00",
          "286.00",
          "193.00",
          "159.00",
          "676.00"
        ]
      ]
    },
    {
      name: "多功能-3号机",
      type: "radar",
      symbol: "none",
      areaStyle: { normal: { opacity: 0.3 } },
      lineStyle: { normal: { width: 1, opacity: 0.5 } },
      data: [
        [
          "442.00",
          "314.00",
          "768.00",
          "490.00",
          "1292.00",
          "71.00",
          "78.00",
          "255.00",
          "126.00"
        ]
      ]
    },
    {
      name: "丝凸检-1",
      type: "radar",
      symbol: "none",
      areaStyle: { normal: { opacity: 0.3 } },
      lineStyle: { normal: { width: 1, opacity: 0.5 } },
      data: [
        [
          "1169.00",
          "374.00",
          "503.00",
          "675.00",
          "414.00",
          "310.00",
          "459.00",
          "564.00",
          "308.00"
        ]
      ]
    },
    {
      name: "丝凸检-2",
      type: "radar",
      symbol: "none",
      areaStyle: { normal: { opacity: 0.3 } },
      lineStyle: { normal: { width: 1, opacity: 0.5 } },
      data: [
        [
          "438.00",
          "639.00",
          "438.00",
          "241.00",
          "169.00",
          "612.00",
          "496.00",
          "438.00",
          "511.00"
        ]
      ]
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
