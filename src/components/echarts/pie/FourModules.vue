<template>
  <div class="pie-chart" v-bind:style="{height:clientHeight}">
    <div id="four-modules-container"></div>
  </div>
</template>

<script>
import optionPublicFun from "../../../utils/optionPublic.js";
import optionPieFun from "./optionPie.js";
import getFourModual from "../../../api/modules.js";
const colors = ["#FCD85A", "#0084C8", "#D8514B", "#9CCB63"];
export default {
  name: "pie-chart",
  data() {
    return {
      clientHeight:"100%",
      myChart: {},
      flag: false, // 切换legend样式
      pieLgendStyle: { // legend 样式
        weight: "bold",
        size: 14,
        legendRight: "13%"
      }
    };
  },
  created() {
    // 向后台发送数据请求
    getFourModual({ timeid: 1 }).then(data => {
      this.$nextTick(() => {
        this.setLegendStyle(this.flag);
        this.fourModulesPieCharts(data.data);
      });
    });
  },
  methods: {
    setLegendStyle(flag) {// 设置 legend 样式参数
      if (flag) {
        this.pieLgendStyle.weight = "normal";
        this.pieLgendStyle.size = 9;
        this.pieLgendStyle.legendRight = "0";
      }
    },
    setClient(){
      let clientHeight = document.documentElement
              ? document.documentElement.clientHeight
              : document.body.clientHeight;
      console.log(clientHeight)
      this.clientHeight = clientHeight-125+"px";
    },
    // pie 数据渲染
    fourModulesPieCharts(data) {
      let pieObj = this.pieLgendStyle;
      this.myChart = new optionPublicFun().init("four-modules-container");
      this.myChart.setOption({
        tooltip: new optionPieFun(data).firstPieTooltip(
          pieObj.weight,
          pieObj.size,
          "first"
        ),
        legend: new optionPieFun(data).firstPieLegend(
          pieObj.weight,
          pieObj.size,
          pieObj.legendRight
        ),
        color: colors,
        series: new optionPieFun(data).firstPieSeries("first")
      });
      // 饼图 级联
      this.myChart.on("click", () => {
        if (!this.flag) {
          this.$router.push({ path: "/show/subpie" });
        }
      });
    }
  },
  mounted() {
    let nowPath = this.$route.path;
    if (nowPath == "/whole/pie") {
      this.setClient();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.pie-chart {
  width: 100%;
  height: 100%;
  #four-modules-container {
    width: 100%;
    height: 92%;
  }
}
</style>