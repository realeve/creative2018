export default {
  title: [
    {
      text: "缺陷数8千条以上产品统计情况",
      subtext: "数据来源:质量综合管理系统     统计时间：20180401 - 20180430",
      x: "center",
      top: 10
    },
    {
      text: "©成都印钞有限公司 技术质量部",
      borderColor: "#999",
      borderWidth: 0,
      textStyle: { fontSize: 14, fontWeight: "normal" },
      x2: 10,
      y2: 2
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
  series: [
    {
      name: "大万数",
      type: "treemap",
      label: { show: true, normal: { formatter: "{b}: {c}" } },
      squareRatio: 1.618,
      width: "100%",
      height: "90%",
      top: 55,
      itemStyle: { normal: { borderColor: "white" } },
      levels: [
        { itemStyle: { normal: { borderWidth: 0, gapWidth: 1 } } },
        { itemStyle: { normal: { gapWidth: 1 } } },
        {
          colorSaturation: [0.35, 0.5],
          itemStyle: { normal: { gapWidth: 1, borderColorSaturation: 0.6 } }
        }
      ],
      data: [
        {
          name: "9602A",
          value: 20,
          children: [
            {
              name: "凹印",
              value: 6,
              children: [
                {
                  name: "W92-2号",
                  value: 4,
                  children: [
                    { name: "赵杰元", value: 3 },
                    { name: "康健", value: 1 }
                  ]
                },
                {
                  name: "W92C-9号",
                  value: 2,
                  children: [{ name: "刘建勇", value: 2 }]
                }
              ]
            },
            {
              name: "胶二印",
              value: 2,
              children: [
                {
                  name: "小森机-4号",
                  value: 2,
                  children: [
                    { name: "吴明森", value: 1 },
                    { name: "查安余", value: 1 }
                  ]
                }
              ]
            },
            {
              name: "胶印",
              value: 3,
              children: [
                {
                  name: "8色水胶印机1号",
                  value: 3,
                  children: [
                    { name: "王崇润", value: 2 },
                    { name: "邓忠华", value: 1 }
                  ]
                }
              ]
            },
            {
              name: "印码",
              value: 7,
              children: [
                {
                  name: "M81D-2号",
                  value: 4,
                  children: [
                    { name: "万诚", value: 2 },
                    { name: "唐承", value: 2 }
                  ]
                },
                {
                  name: "M81D-1号",
                  value: 3,
                  children: [
                    { name: "龙绪斌", value: 1 },
                    { name: "林凯", value: 2 }
                  ]
                }
              ]
            },
            {
              name: "胶一印",
              value: 2,
              children: [
                {
                  name: "小森机-2号",
                  value: 2,
                  children: [{ name: "查安余", value: 2 }]
                }
              ]
            }
          ]
        },
        {
          name: "9603A",
          value: 156,
          children: [
            {
              name: "印码",
              value: 30,
              children: [
                {
                  name: "多功能-1号",
                  value: 8,
                  children: [
                    { name: "朱殊", value: 2 },
                    { name: "张世成", value: 6 }
                  ]
                },
                {
                  name: "多功能-2号",
                  value: 22,
                  children: [
                    { name: "姚军", value: 10 },
                    { name: "奉钧", value: 12 }
                  ]
                }
              ]
            },
            {
              name: "胶一印",
              value: 32,
              children: [
                {
                  name: "海德堡-1号",
                  value: 8,
                  children: [
                    { name: "许嘉", value: 2 },
                    { name: "唐军", value: 6 }
                  ]
                },
                {
                  name: "小森机-1号",
                  value: 24,
                  children: [
                    { name: "吴强", value: 14 },
                    { name: "刘强", value: 7 },
                    { name: "查安余", value: 3 }
                  ]
                }
              ]
            },
            {
              name: "凹一印",
              value: 31,
              children: [
                {
                  name: "W92A-3号",
                  value: 16,
                  children: [
                    { name: "牟军", value: 8 },
                    { name: "奉伟", value: 8 }
                  ]
                },
                {
                  name: "W92A-4号",
                  value: 15,
                  children: [
                    { name: "康建", value: 10 },
                    { name: "何兵", value: 5 }
                  ]
                }
              ]
            },
            {
              name: "凹二印",
              value: 33,
              children: [
                {
                  name: "W92B-5号",
                  value: 14,
                  children: [
                    { name: "马斌", value: 7 },
                    { name: "陈拥军", value: 7 }
                  ]
                },
                {
                  name: "W92B-6号",
                  value: 19,
                  children: [
                    { name: "罗仕勇", value: 17 },
                    { name: "康健", value: 2 }
                  ]
                }
              ]
            },
            {
              name: "胶二印",
              value: 30,
              children: [
                {
                  name: "海德堡-2号",
                  value: 22,
                  children: [
                    { name: "刘文华", value: 12 },
                    { name: "李晓军", value: 10 }
                  ]
                },
                {
                  name: "小森机-3号",
                  value: 8,
                  children: [{ name: "刘强", value: 8 }]
                }
              ]
            }
          ]
        },
        {
          name: "9604A",
          value: 90,
          children: [
            {
              name: "印码",
              value: 19,
              children: [
                {
                  name: "DMJ12-2号",
                  value: 5,
                  children: [
                    { name: "祖涛", value: 2 },
                    { name: "陈代勇", value: 3 }
                  ]
                },
                {
                  name: "多功能-3号",
                  value: 14,
                  children: [
                    { name: "徐春林", value: 9 },
                    { name: "潘先明", value: 5 }
                  ]
                }
              ]
            },
            {
              name: "胶印",
              value: 23,
              children: [
                {
                  name: "J98-2号",
                  value: 18,
                  children: [
                    { name: "周武华", value: 8 },
                    { name: "严强", value: 10 }
                  ]
                },
                {
                  name: "J98-1号",
                  value: 5,
                  children: [
                    { name: "刘勇明", value: 2 },
                    { name: "陈兵", value: 3 }
                  ]
                }
              ]
            },
            {
              name: "凹一印",
              value: 21,
              children: [
                {
                  name: "SD-1号",
                  value: 8,
                  children: [{ name: "赵小华", value: 8 }]
                },
                {
                  name: "SD-2号",
                  value: 13,
                  children: [
                    { name: "汪涛", value: 5 },
                    { name: "任光耀", value: 8 }
                  ]
                }
              ]
            },
            {
              name: "凹二印",
              value: 27,
              children: [
                {
                  name: "接线凹-4号",
                  value: 25,
                  children: [
                    { name: "彭强", value: 18 },
                    { name: "冯利军", value: 3 },
                    { name: "蔡勇", value: 4 }
                  ]
                },
                {
                  name: "W92C-10号",
                  value: 2,
                  children: [{ name: "付豹", value: 2 }]
                }
              ]
            }
          ]
        },
        {
          name: "9606A",
          value: 143,
          children: [
            {
              name: "凹一印",
              value: 36,
              children: [
                {
                  name: "W92C-7号",
                  value: 19,
                  children: [
                    { name: "周文彬", value: 11 },
                    { name: "刘大金", value: 8 }
                  ]
                },
                {
                  name: "W92C-11号",
                  value: 17,
                  children: [
                    { name: "刘大金", value: 9 },
                    { name: "康建", value: 1 },
                    { name: "何杰", value: 7 }
                  ]
                }
              ]
            },
            {
              name: "印码",
              value: 30,
              children: [
                {
                  name: "丝凸检2号",
                  value: 12,
                  children: [
                    { name: "周冬", value: 5 },
                    { name: "付锐", value: 7 }
                  ]
                },
                {
                  name: "丝凸检1号",
                  value: 18,
                  children: [
                    { name: "王虎", value: 9 },
                    { name: "段虹舟", value: 9 }
                  ]
                }
              ]
            },
            {
              name: "胶印",
              value: 38,
              children: [
                {
                  name: "J98-5号",
                  value: 16,
                  children: [
                    { name: "张志军", value: 12 },
                    { name: "刘勇明", value: 4 }
                  ]
                },
                {
                  name: "J98-6号",
                  value: 22,
                  children: [
                    { name: "杨晓东", value: 10 },
                    { name: "廖其武", value: 12 }
                  ]
                }
              ]
            },
            {
              name: "凹二印",
              value: 39,
              children: [
                {
                  name: "W92C-12号",
                  value: 29,
                  children: [
                    { name: "张向军", value: 18 },
                    { name: "刘健康", value: 11 }
                  ]
                },
                {
                  name: "W92C-8号",
                  value: 10,
                  children: [
                    { name: "余松阳", value: 5 },
                    { name: "刘健康", value: 5 }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: "9607T",
          value: 11,
          children: [
            {
              name: "凹一印",
              value: 3,
              children: [
                {
                  name: "接线凹-1号",
                  value: 1,
                  children: [{ name: "张登军", value: 1 }]
                },
                {
                  name: "接线凹-3号",
                  value: 2,
                  children: [{ name: "佘涛", value: 2 }]
                }
              ]
            },
            {
              name: "胶印",
              value: 2,
              children: [
                {
                  name: "J98-4号",
                  value: 2,
                  children: [{ name: "严磊", value: 2 }]
                }
              ]
            },
            {
              name: "",
              value: 2,
              children: [
                {
                  name: "丝凸印-3号",
                  value: 2,
                  children: [{ name: "熊亮", value: 2 }]
                }
              ]
            },
            {
              name: "印码",
              value: 2,
              children: [
                {
                  name: "DMJ12-1号",
                  value: 2,
                  children: [
                    { name: "汤杰", value: 1 },
                    { name: "邓宇", value: 1 }
                  ]
                }
              ]
            },
            {
              name: "凹二印",
              value: 2,
              children: [
                {
                  name: "接线凹-6号",
                  value: 2,
                  children: [{ name: "廖大为", value: 2 }]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
