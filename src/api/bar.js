import axios from '../control/filter/http.js'
/**
 * @namespace getBarChart
 * @param {获取柱状图的指标参数和时间参数} body 
 */
let getBarChart = async function (body) {
  return await axios.post('/ElectricityPriject/rest/JsonData/barChart', body);
}
export default getBarChart;