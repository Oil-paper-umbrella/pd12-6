const devServer = {
  // host: 'localhost',
  host: "127.0.0.1",
  port: 8083, // 端口号
  https: false, // https:{type:Boolean}
  open: true, //配置自动启动浏览器  http://172.11.11.22:8888/rest/XX/
  hotOnly: true, // 热更新
  // proxy: 'http://localhost:8000',   // 配置跨域处理,只有一个代理
  // http://127.0.0.1:8080/ElectricityPriject/rest/JsonData/allcitys
  proxy: {
    '/ElectricityPriject/rest/JsonData/FourModual': {
      target: 'http://127.0.0.1:8080',   // 需要请求的地址
      changeOrigin: true,  // 是否跨域
      pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://127.0.0.1:8000/login'
        '^/ElectricityPriject/rest/JsonData/FourModual': '/ElectricityPriject/rest/JsonData/FourModual'
      }
    },
    '/ElectricityPriject/rest/JsonData/barChart': {
      target: 'http://127.0.0.1:8080',   // 需要请求的地址
      changeOrigin: true,  // 是否跨域
      pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://127.0.0.1:8000/login'
        '^/ElectricityPriject/rest/JsonData/barChart': '/ElectricityPriject/rest/JsonData/barChart'
      }
    },
    '/ElectricityPriject/rest/JsonData/LineChart': {
      target: 'http://127.0.0.1:8080',   // 需要请求的地址
      changeOrigin: true,  // 是否跨域
      pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://127.0.0.1:8000/login'
        '^/ElectricityPriject/rest/JsonData/LineChart': '/ElectricityPriject/rest/JsonData/LineChart'
      }
    },
    '/ElectricityPriject/rest/JsonData/OneModual': {
      target: 'http://127.0.0.1:8080',   // 需要请求的地址
      changeOrigin: true,  // 是否跨域
      pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://127.0.0.1:8000/login'
        '^/ElectricityPriject/rest/JsonData/OneModual': '/ElectricityPriject/rest/JsonData/OneModual'
      }
    },
    '/ElectricityPriject/rest/JsonData/allIndexs': {
      target: 'http://127.0.0.1:8080',   // 需要请求的地址
      changeOrigin: true,  // 是否跨域
      pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://127.0.0.1:8000/login'
        '^/ElectricityPriject/rest/JsonData/allIndexs': '/ElectricityPriject/rest/JsonData/allIndexs'
      }
    },
    '/ElectricityPriject/rest/JsonData/allTimes': {
      target: 'http://127.0.0.1:8080',   // 需要请求的地址
      changeOrigin: true,  // 是否跨域
      pathRewrite: {// 重写target中的请求地址，也就是说，在请求的时候，url用'/login'增加为'http://127.0.0.1:8000/login'
        '^/ElectricityPriject/rest/JsonData/allTimes': '/ElectricityPriject/rest/JsonData/allTimes'
      }
    }
  },
  historyApiFallback: {
    rewrites: [
      { from: /\/index/, to: '/index.html' },
      { from: /\/toLogin/, to: '/login.html' },
      { from: /\/whole/, to: '/whole.html' }
    ]
  }
}
module.exports = devServer;