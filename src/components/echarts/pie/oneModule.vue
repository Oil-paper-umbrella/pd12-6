<template>
  <div class="pie-chart">
    <div id="one-module-container"></div>
  </div>
</template>

<script>
import optionPublicFun from "../../../utils/optionPublic.js";
import optionPieFun from "./optionPie.js";
import getOneModual from "../../../api/oneModule.js";
const colors = ["#FCD85A", "#0084C8", "#D8514B", "#9CCB63"];
export default {
  name: "echarts",
  data() {
    return {
      myChart: {}
    };
  },
  created() {
    // 向后台发送数据请求
    getOneModual({ timeid: 1, moduleid: 1 }).then(data => {
      this.$nextTick(() => {
        this.oneModulePieCharts(data.data);
      });
    });
  },
  methods: {
    oneModulePieCharts(data) {
      let opPieFnc = new optionPieFun(data);
      this.myChart = new optionPublicFun().init("one-module-container");
      this.myChart.setOption({
        color: colors,
        tooltip: opPieFnc.firstPieTooltip("bold", 14,"second"),
        legend: opPieFnc.firstPieLegend("bold", 14, "13%"),
        series: opPieFnc.firstPieSeries("second")
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pie-chart {
  width: 100%;
  height: 100%;
  #one-module-container {
    width: 100%;
    height: 90%;
  }
}
</style>