import axios from '../control/filter/http.js'
/**
 * @namespace getAllIndexs 获取所有指标
 */
let getAllIndexs = async function () {
  return await axios.get('/ElectricityPriject/rest/JsonData/allIndexs');
}

let getAllTimes = async function () {
  return await axios.get('/ElectricityPriject/rest/JsonData/allTimes');
}

let requestCommonData =  {
  getAllIndexs,
  getAllTimes
}
export default requestCommonData;