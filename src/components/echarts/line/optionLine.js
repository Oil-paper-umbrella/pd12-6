import optionPublicFun from '../../../utils/optionPublic.js'
import dataLineFunc from './dataLine.js'
class optionLineFun {
  constructor(data) {
    this.data = data;
  }
  /**
   * @namespace lineTooltip
   * @param {字体加粗} weight 
   * @param {字体大小} size 
   * @author he
   * create in 19-11-27
   */
  lineTooltip(weight, size) {
    let tooltip = {
      trigger: 'axis',
      textStyle: new optionPublicFun().textStyle(weight, size)
    };
    return tooltip;
  }
  /**
   * @namespace lineDataZoom
   * @param {zoomData 高度} zoomHeight 
   */
  lineDataZoom(zoomHeight) {
    let result = [
      {
        handleStyle: {
          color: '#fff',
          shadowBlur: 3,
          shadowColor: 'rgba(0, 0, 0, 0.6)',
          shadowOffsetX: 2,
          shadowOffsetY: 2
        },
        textStyle: {
          color: '#fff'
        },
        height: zoomHeight
      },
      {
        type: 'inside'
      }
    ]
    return result;
  }
  /**
   * @namespace lineLegend
   * @param {字体加粗} weight 
   * @param {字体大小} size 
   * @param {legend垂直/水平显示} orientData 
   * @param {选中城市} selectedCity 
   */
  lineLegend(weight, size, orientData, selectedCity) {
    let legend = {
      orient: orientData,
      type: 'scroll',
      right: 10,
      top: 8,
      selectedMode: 'multiple',
      selected: selectedCity,
      textStyle: new optionPublicFun().textStyle(weight, size)
    }
    return legend;
  }
  /**
   * @namespace lineXaxis
   * @param {季度} cycle 
   * @param {18个地市同一季度的得分} indicatorValue 
   */
  lineXaxis(indicatorValue, indexCycle) {
    let xaxis = {
      axisLine: {
        show: true,
        lineStyle: new optionPublicFun().lineStyle("#fff", 1)
      },
      axisLabel: {
        show: true,
        textStyle: new optionPublicFun().textStyle("normal", 12),
        nameTextStyle: new optionPublicFun().textStyle("bold", 12)
      },
      data: indicatorValue,//该指标的周期值（指标值）
      name: indexCycle
    }
    return xaxis;
  }
  /**
   * @namespace lineYaxis
   * @param {指标单位} indexUnit 
   */
  lineYaxis(indexUnit) {
    let yaxis = {
      type: 'value',
      axisLabel: {
        formatter: '{value} '
      },
      axisLine: {
        lineStyle: new optionPublicFun().lineStyle("#fff", 1)
      },
      textStyle: new optionPublicFun().textStyle("normal", 12),
      nameTextStyle: new optionPublicFun().textStyle("bold", 12),
      name: indexUnit,
      splitLine: {
        show: true,
        lineStyle: new optionPublicFun().lineStyle("#1B283E", 1)
      },
      min: new dataLineFunc(this.data).lineMinScore()
    }
    return yaxis
  }
}

export default optionLineFun;