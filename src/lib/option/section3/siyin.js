let option = null;
let data1days = [
  [
    "1K",
    "2K",
    "3K",
    "4K",
    "5K",
    "6K",
    "7K",
    "8K",
    "9K",
    "10K",
    "11K",
    "12K",
    "13K",
    "14K",
    "15K",
    "16K",
    "17K",
    "18K",
    "19K",
    "20K",
    "21K",
    "22K",
    "23K",
    "24K",
    "25K",
    "26K",
    "27K",
    "28K",
    "29K",
    "30K",
    "31K",
    "32K",
    "33K",
    "34K",
    "35K"
  ],
  [
    215,
    294,
    190,
    142,
    413,
    409,
    338,
    108,
    124,
    117,
    126,
    1941,
    570,
    427,
    205,
    232,
    364,
    454,
    2050,
    1176,
    704,
    110,
    71,
    102,
    167,
    1117,
    723,
    382,
    156,
    187,
    334,
    234,
    517,
    489,
    445
  ],
  [
    320,
    171,
    193,
    208,
    338,
    544,
    606,
    267,
    193,
    190,
    336,
    506,
    442,
    400,
    263,
    183,
    269,
    320,
    1603,
    506,
    466,
    206,
    213,
    239,
    286,
    638,
    465,
    359,
    247,
    231,
    258,
    377,
    568,
    653,
    607
  ],
  [
    165,
    116,
    139,
    126,
    350,
    647,
    820,
    106,
    102,
    86,
    124,
    1119,
    520,
    315,
    318,
    170,
    80,
    207,
    1533,
    505,
    416,
    599,
    143,
    96,
    121,
    1469,
    537,
    397,
    175,
    111,
    177,
    255,
    474,
    544,
    546
  ],
  [
    152,
    115,
    127,
    187,
    181,
    233,
    116,
    129,
    89,
    230,
    80,
    759,
    530,
    166,
    170,
    148,
    169,
    174,
    1130,
    543,
    374,
    128,
    112,
    112,
    86,
    300,
    245,
    141,
    152,
    125,
    179,
    178,
    465,
    434,
    474
  ],
  [
    22,
    7,
    9,
    15,
    7,
    18,
    22,
    19,
    13,
    20,
    14,
    111,
    75,
    71,
    12,
    11,
    7,
    7,
    32,
    49,
    22,
    10,
    6,
    7,
    3,
    28,
    23,
    35,
    11,
    13,
    13,
    7,
    57,
    39,
    29
  ]
];

let data2016days = [
  [
    "1K",
    "2K",
    "3K",
    "4K",
    "5K",
    "6K",
    "7K",
    "8K",
    "9K",
    "10K",
    "11K",
    "12K",
    "13K",
    "14K",
    "15K",
    "16K",
    "17K",
    "18K",
    "19K",
    "20K",
    "21K",
    "22K",
    "23K",
    "24K",
    "25K",
    "26K",
    "27K",
    "28K",
    "29K",
    "30K",
    "31K",
    "32K",
    "33K",
    "34K",
    "35K"
  ],

  [
    936,
    809,
    645,
    602,
    1163,
    1769,
    1634,
    754,
    683,
    612,
    886,
    7030,
    2859,
    3804,
    1389,
    1137,
    1398,
    1607,
    7319,
    5316,
    4871,
    861,
    802,
    791,
    1116,
    4380,
    2054,
    2082,
    1071,
    1002,
    1112,
    1082,
    1881,
    1966,
    2030
  ],
  [
    1087,
    709,
    792,
    975,
    999,
    1653,
    1789,
    942,
    712,
    746,
    1026,
    1644,
    1926,
    1535,
    912,
    700,
    805,
    1081,
    3740,
    2245,
    1826,
    737,
    710,
    659,
    854,
    1725,
    2335,
    1731,
    951,
    948,
    930,
    1196,
    1430,
    1940,
    1771
  ],
  [
    1494,
    1326,
    1451,
    2279,
    2091,
    3997,
    4480,
    1301,
    1365,
    1297,
    1535,
    3632,
    3070,
    2675,
    1780,
    1548,
    1424,
    1869,
    5201,
    2949,
    3002,
    1910,
    1390,
    1235,
    1490,
    4664,
    3161,
    2682,
    1716,
    1637,
    1700,
    2632,
    2542,
    3415,
    2685
  ],
  [
    1093,
    879,
    849,
    937,
    905,
    1655,
    1388,
    1247,
    1046,
    947,
    863,
    2925,
    2153,
    2414,
    1693,
    1230,
    1258,
    1760,
    5114,
    3343,
    3533,
    1084,
    861,
    818,
    855,
    2146,
    2034,
    1790,
    1448,
    1322,
    1359,
    1540,
    2371,
    3370,
    2268
  ],
  [
    73,
    95,
    71,
    79,
    40,
    121,
    65,
    37,
    31,
    43,
    38,
    233,
    153,
    225,
    39,
    45,
    37,
    31,
    193,
    326,
    366,
    31,
    29,
    43,
    47,
    96,
    243,
    130,
    88,
    61,
    56,
    48,
    94,
    78,
    109
  ]
];

let newDataList = [
  [
    "1K",
    "2K",
    "3K",
    "4K",
    "5K",
    "6K",
    "7K",
    "8K",
    "9K",
    "10K",
    "11K",
    "12K",
    "13K",
    "14K",
    "15K",
    "16K",
    "17K",
    "18K",
    "19K",
    "20K",
    "21K",
    "22K",
    "23K",
    "24K",
    "25K",
    "26K",
    "27K",
    "28K",
    "29K",
    "30K",
    "31K",
    "32K",
    "33K",
    "34K",
    "35K"
  ],
  [
    104,
    89,
    82,
    36,
    67,
    60,
    96,
    30,
    38,
    44,
    41,
    210,
    133,
    121,
    133,
    217,
    166,
    72,
    169,
    132,
    127,
    58,
    23,
    41,
    58,
    68,
    45,
    91,
    212,
    32,
    58,
    48,
    26,
    28,
    12
  ],
  [
    81,
    28,
    48,
    53,
    67,
    160,
    313,
    59,
    29,
    13,
    76,
    380,
    147,
    149,
    42,
    62,
    66,
    143,
    152,
    172,
    95,
    16,
    17,
    16,
    65,
    88,
    84,
    26,
    24,
    78,
    80,
    152,
    229,
    304,
    305
  ],
  [
    559,
    152,
    74,
    122,
    329,
    862,
    451,
    46,
    65,
    50,
    67,
    60,
    85,
    41,
    111,
    96,
    91,
    243,
    511,
    123,
    71,
    23,
    35,
    35,
    45,
    184,
    120,
    34,
    42,
    44,
    50,
    64,
    34,
    89,
    49
  ],
  [
    92,
    53,
    101,
    79,
    61,
    162,
    193,
    224,
    157,
    85,
    132,
    89,
    230,
    166,
    163,
    103,
    74,
    100,
    354,
    166,
    191,
    70,
    111,
    88,
    86,
    237,
    137,
    208,
    64,
    38,
    71,
    69,
    131,
    113,
    145
  ]
];

let axisNameList = [
  "丝凸1号机",
  "丝凸2号机",
  "丝凸3号机",
  "丝凸检1号机",
  "丝凸检2号机"
];
let legendData = [
  "2017年作废开数",
  "2017年作废比例",
  "2016年作废开数",
  "2016年作废比例",
  "11.20以后作废开数",
  "11.20以后作废比例"
];
let seriesData = [],
  xAxisData = [],
  yAxisData = [],
  gridData = [],
  data1day = [],
  data1dayP = [],
  data1dayPercent = [],
  data2016day = [],
  data2016dayP = [],
  data2016dayPercent = [],
  newData = [],
  newDataP = [],
  newDataPercent = [];

data1dayPercent = data1days.map(function(item, i) {
  if (i == 0) {
    return item;
  }
  let sum = 0;
  item.forEach(dayItem => {
    sum += dayItem;
  });
  return item.map(dayItem => parseFloat((dayItem / sum * 100).toFixed(1)));
});
data2016dayPercent = data2016days.map(function(item, i) {
  if (i == 0) {
    return item;
  }
  let sum = 0;
  item.forEach(function(dayItem) {
    sum += dayItem;
  });
  return item.map(dayItem => parseFloat((dayItem / sum * 100).toFixed(1)));
});

newDataPercent = newDataList.map(function(item, i) {
  if (i == 0) {
    return item;
  }
  let sum = 0;
  item.forEach(function(dayItem) {
    sum += dayItem;
  });
  return item.map(dayItem => parseFloat((dayItem / sum * 100).toFixed(1)));
});

let visualMap = [];
let idx = 0;
axisNameList.map(function(data, i) {
  data1day = [];
  data1dayP = [];
  data2016day = [];
  data2016dayP = [];
  newData = [];
  newDataP = [];
  for (let k = 0; k < 5; k++) {
    for (let j = 0; j < 7; j++) {
      data1day.push([5 - k, 7 - j, data1days[i + 1][k * 7 + j]]);
      data1dayP.push([5 - k, 7 - j, data1dayPercent[i + 1][k * 7 + j]]);
      data2016day.push([5 - k, 7 - j, data2016days[i + 1][k * 7 + j]]);
      data2016dayP.push([5 - k, 7 - j, data2016dayPercent[i + 1][k * 7 + j]]);
      if (i < 4) {
        newData.push([5 - k, 7 - j, newDataList[i + 1][k * 7 + j]]);
        newDataP.push([5 - k, 7 - j, newDataPercent[i + 1][k * 7 + j]]);
      }
    }
  }
  let max = 0;
  data1days.forEach(function(item, i) {
    if (i == 0) {
      return;
    }
    item.forEach(function(dayItem) {
      max = Math.max(dayItem, max);
    });
  });

  visualMap.push({
    min: 0,
    max: max,
    precision: 1,
    calculable: true,
    orient: "verticle",
    right: "0",
    color: ["#45527a", "#f44"].reverse(),
    textStyle: {
      //color:'#fff'
    },
    show: false,
    seriesIndex: idx
  });
  max = 0;
  data1dayPercent.forEach(function(item, i) {
    if (i == 0) {
      return;
    }
    item.forEach(function(dayItem) {
      max = Math.max(dayItem, max);
    });
  });
  visualMap.push({
    min: 0,
    max: max,
    precision: 1,
    calculable: true,
    orient: "verticle",
    right: "0",
    color: ["#45527a", "#f44"].reverse(),
    textStyle: {
      //color:'#fff'
    },
    show: false,
    seriesIndex: idx + 1
  });

  max = 0;
  data2016days.forEach(function(item, i) {
    if (i == 0) {
      return;
    }
    item.forEach(function(dayItem) {
      max = Math.max(dayItem, max);
    });
  });

  visualMap.push({
    min: 0,
    max: max,
    precision: 1,
    calculable: true,
    orient: "verticle",
    right: "0",
    color: ["#45527a", "#f44"].reverse(),
    textStyle: {
      //color:'#fff'
    },
    show: false,
    seriesIndex: idx + 2
  });
  max = 0;
  data2016dayP.forEach(function(item, i) {
    if (i == 0) {
      return;
    }
    item.forEach(function(dayItem) {
      max = Math.max(dayItem, max);
    });
  });

  visualMap.push({
    min: 0,
    max: max,
    precision: 1,
    calculable: true,
    orient: "verticle",
    right: "0",
    color: ["#45527a", "#f44"].reverse(),
    textStyle: {
      //color:'#fff'
    },
    show: false,
    seriesIndex: idx + 3
  });

  max = 0;
  newData.forEach(function(item, i) {
    if (i == 0) {
      return;
    }
    item.forEach(function(dayItem) {
      max = Math.max(dayItem, max);
    });
  });

  visualMap.push({
    min: 0,
    max: max,
    precision: 1,
    calculable: true,
    orient: "verticle",
    right: "0",
    color: ["#45527a", "#f44"].reverse(),
    textStyle: {
      //color:'#fff'
    },
    show: false,
    seriesIndex: idx + 4
  });
  max = 0;
  newDataP.forEach(function(item, i) {
    if (i == 0) {
      return;
    }
    item.forEach(function(dayItem) {
      max = Math.max(dayItem, max);
    });
  });

  visualMap.push({
    min: 0,
    max: max,
    precision: 1,
    calculable: true,
    orient: "verticle",
    right: "0",
    color: ["#45527a", "#f44"].reverse(),
    textStyle: {
      //color:'#fff'
    },
    show: false,
    seriesIndex: idx + 5
  });

  idx += 6;

  seriesData.push({
    name: legendData[0],
    type: "heatmap",
    xAxisIndex: i,
    yAxisIndex: i,
    //symbolSize: 8,
    data: data1day,
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.5)"
      }
    },
    label: {
      normal: {
        show: true
      }
    }
  });

  seriesData.push({
    name: legendData[1],
    type: "heatmap",
    xAxisIndex: i,
    yAxisIndex: i,
    //symbolSize: 8,
    data: data1dayP,
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.5)"
      }
    },
    label: {
      normal: {
        show: true
      }
    }
  });
  seriesData.push({
    name: legendData[2],
    type: "heatmap",
    xAxisIndex: i,
    yAxisIndex: i,
    //symbolSize: 8,
    data: data2016day,
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.5)"
      }
    },
    label: {
      normal: {
        show: true
      }
    }
  });
  seriesData.push({
    name: legendData[3],
    type: "heatmap",
    xAxisIndex: i,
    yAxisIndex: i,
    //symbolSize: 8,
    data: data2016dayP,
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.5)"
      }
    },
    label: {
      normal: {
        show: true
      }
    }
  });
  seriesData.push({
    name: legendData[4],
    type: "heatmap",
    xAxisIndex: i,
    yAxisIndex: i,
    //symbolSize: 8,
    data: newData,
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.5)"
      }
    },
    label: {
      normal: {
        show: true
      }
    }
  });
  seriesData.push({
    name: legendData[5],
    type: "heatmap",
    xAxisIndex: i,
    yAxisIndex: i,
    //symbolSize: 8,
    data: newDataP,
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowColor: "rgba(0, 0, 0, 0.5)"
      }
    },
    label: {
      normal: {
        show: true
      }
    }
  });

  xAxisData.push({
    type: "category",
    gridIndex: i,
    data: [1, 2, 3, 4, 5].reverse(),
    axisLabel: {
      show: Math.floor(i / 3) == 2 ? true : false,
      textStyle: {
        //color:'#fff'
      }
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  });
  yAxisData.push({
    gridIndex: i,
    type: "category",
    name: data,
    data: [1, 2, 3, 4, 5, 6, 7].reverse(),
    nameLocation: "middle",
    nameTextStyle: {
      //color:'#fff'
      fontSize: 18,
      fontWeight: 100
    },
    nameGap: i % 3 === 0 ? 20 : 2,
    axisLine: {
      show: false
    },
    axisLabel: {
      show: i % 3 === 0 ? true : false,
      textStyle: {
        //color:'#fff'
      }
    },
    axisTick: {
      show: false
    }
  });
  gridData.push({
    left: (i % 3) * 30 + 5 + "%",
    height: "28%",
    width: "28%",
    top: Math.floor(i / 3) * 30 + 7 + "%"
  });
});

option = {
  backgroundColor: "#fff",
  title: {
    text: "丝印设备作废开位分布",
    x: "center",
    textStyle: {
      //color:'#fff'
      fontSize: 30,
      fontWeight: 100
    }
  },
  visualMap: visualMap,
  toolbox: {
    show: true,
    feature: {
      dataView: {
        show: true,
        readOnly: false
      },
      restore: {
        show: true
      },
      saveAsImage: {
        show: true
      }
    }
  },
  tooltip: {
    trigger: "item",
    axisPointer: {
      animation: false
    },
    formatter: function(param) {
      if (!param.seriesName.includes("比例")) {
        return (
          "开位： 第" +
          (8 + (4 - param.data[0]) * 7 + (7 - param.data[1])) +
          "开<br>作废开数：" +
          param.data[2] +
          "开"
        );
      } else {
        return (
          "开位： 第" +
          (8 + (4 - param.data[0]) * 7 + (7 - param.data[1])) +
          "开<br>作废比例：" +
          param.data[2] +
          "%"
        );
      }
    }
  },
  legend: {
    data: legendData,
    x2: "100",
    y2: "100",
    width: 150,
    selectedMode: "single",
    textStyle: {
      //color:'#fff'
    }
  },
  grid: gridData,
  xAxis: xAxisData,
  yAxis: yAxisData,
  series: seriesData
};

export default option;
