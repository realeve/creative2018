<template>
  <div ref="chart" class="chart"></div>
</template>

<script>
import echarts from "echarts";
import china from "echarts/map/js/china";
import "echarts-wordcloud";
// import 'echarts-gl';

import theme from "../lib/theme";
import defaultOption from "../lib/defaultOption";

export default {
  props: {
    option: {
      type: Object,
      default() {
        return defaultOption;
      }
    }
  },
  data() {
    return {
      render: "svg"
    };
  },
  computed: {
    chart() {
      return echarts.init(this.$refs.chart, theme, {
        renderer: this.render
      });
    }
  },
  methods: {
    init() {
      this.initChart();
    },
    initChart() {
      // SVG渲染折线图和饼图的效率更高，而由于Canvas渲染矩形的效率很高，所以柱状图使用Canvas渲染的效率高于SVG。
      let option = Object.assign({}, this.option);
      let chartType =
        option.series.type == undefined
          ? option.series[0].type
          : option.series.type;

      if (chartType == "heatmap") {
        this.chart.setOption(option);
        return;
      }

      this.render = "canvas";

      let isCloud = chartType == "wordCloud";

      let isGraph = chartType == "graph";

      // 文字云导出时，自定义函数无法输出
      if (isCloud) {
        option.series.textStyle = {
          normal: {
            color: param => theme.color[param.dataIndex % theme.color.length]
          }
        };
      }

      if (this.fill) {
        // this.option.backgroundColor = this.bgColor;
        option = Object.assign(option, this.bgColor);
      }

      option.toolbox = {
        show: false
      };

      if (Reflect.has(option, "tooltip")) {
        if (Reflect.has(option.tooltip, "axisPointer")) {
          if (option.tooltip.axisPointer.type == "line") {
            option.tooltip.axisPointer = {
              type: "cross",
              lineStyle: {
                type: "dashed"
              }
            };
          }
        }
      }
      if (!isGraph) {
        let fontSize = 25;
        if (!option.title.length) {
          option.title.top = 0;
          option.title.textStyle = { fontSize };
        } else {
          option.title[0].top = 0;
          option.title[0].textStyle = { fontSize };
        }
      }

      if (Reflect.has(option, "xAxis")) {
        option.xAxis[0].boundaryGap = true;
      }
      this.chart.setOption(option);
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style scoped>
.chart {
  width: 100%;
  height: 97%;
}
</style>