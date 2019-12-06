import optionPublicFun from '../../../utils/optionPublic.js'
class optionMapFun {
  mapTooltip() {
    let tooltip = {
      trigger: 'item',
      formatter: '{b}<br/>得分：{c} ',
      // textStyle: textStyle("bold",14)
      textStyle: new optionPublicFun().textStyle("normal"),
    }
    return tooltip;
  }
  mapSeries(datas) {
    let series = [
      {
        type: 'map',
        top: '10%',
        mapType: '河南',
        roam: false,//鼠标缩放和平移漫游
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          emphasis: {
            color: 'red'
          }
        },
        data: datas,
        zoom: 1.25
      }
    ]
    return series;
  }
}
export default optionMapFun;