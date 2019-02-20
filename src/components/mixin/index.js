import echarts from 'eCharts'

// const echarts = require('echarts')
// require('echarts/lib/chart/bar') // 柱状图
// require('echarts/lib/chart/line') // 折线图
const mixin = {
  data () {
    return {
      changeInpState: 1,
      inpDisabled: true,
      btn1Checked: true,
      btn2Checked: false,
      searchEncode: ''
    }
  },
  methods: {
    // 更新数据
    updateEcharts (myChart, data) {
      myChart.setOption({
        series: [{
          // 根据名字对应到相应的系列
          name: '订单总数',
          data: data.allOrders
        },
        {
          // 根据名字对应到相应的系列
          name: '2单及以上订单数',
          data: data.orders
        },
        {
          name: '复购率',
          data: data.allOrders
        }]
      })
    },
    // echarts 动态更新数据
    changeData (id, option) {
      const orderList = {
        allOrders: [110, 100, 120, 95, 80, 90, 130, 30, 80, 60, 70, 98],
        orders: [130, 140, 129, 95, 80, 90, 110, 140, 120, 60, 70, 98]
      }
      const orderList1 = {
        allOrders: [130, 140, 129, 135, 110, 90, 130, 140, 150, 130, 120, 118],
        orders: [110, 100, 120, 95, 80, 90, 100, 30, 80, 60, 70, 98]
      }
      const myChart = echarts.init(document.getElementById(id)) // 绘制图表
      if (option) {
        myChart.setOption(option) // 添加图标配置和样式
        this.updateEcharts(myChart, orderList1) // 添加第一次渲染的默认数据
      } else {
        // 点击切换数据
        if (this.btn1Checked) {
          this.updateEcharts(myChart, orderList)
        }
        if (this.btn2Checked) {
          this.updateEcharts(myChart, orderList1)
        }
      }
    }
  }
}

export default mixin
